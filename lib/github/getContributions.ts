import { IssueStats, PullRequest, PullRequestResponse, PullRequestStats, Repository } from "../../types/github";
import { GITHUB_API_BASE_URL, githubApiHeaders } from ".";
import { GitHubApiError } from "../../types/github";

export async function fetchUserPRStats(username: string): Promise<PullRequestStats> {
  try {
    const openPRsResponse = await fetch(
      `${GITHUB_API_BASE_URL}/search/issues?q=author:${username}+type:pr+state:open`,
      {
        headers: githubApiHeaders,
        cache: "force-cache"
      }
    );

    const closedPRsResponse = await fetch(
      `${GITHUB_API_BASE_URL}/search/issues?q=author:${username}+type:pr+state:closed`,
      {
        headers: githubApiHeaders,
        cache: "force-cache"
      }
    );

    if (!openPRsResponse.ok || !closedPRsResponse.ok) {
      throw new GitHubApiError('Failed to fetch PR data',
        openPRsResponse.status || closedPRsResponse.status);
    }

    const openPRs = await openPRsResponse.json();
    const closedPRs = await closedPRsResponse.json();

    const mergedPRs = (await Promise.all(
      //eslint-disable-next-line
      closedPRs.items.map(async (pr: any) => {
        const prDetailsResponse = await fetch(pr.pull_request.url, {
          headers: githubApiHeaders
        });
        const prDetails = await prDetailsResponse.json();
        return prDetails.merged_at != null;
      })
    )).filter(Boolean).length;

    return {
      open: openPRs.total_count,
      closed: closedPRs.total_count - mergedPRs,
      merged: mergedPRs
    };
  } catch (error) {
    if (error instanceof GitHubApiError) throw error;
    throw new GitHubApiError('Failed to fetch PR statistics', undefined, error);
  }
}

export async function fetchUserIssueStats(username: string): Promise<IssueStats> {
  try {
    const openIssuesResponse = await fetch(
      `${GITHUB_API_BASE_URL}/search/issues?q=author:${username}+type:issue+state:open`,
      {
        headers: githubApiHeaders,
        cache: "force-cache"
      },
    );

    const closedIssuesResponse = await fetch(
      `${GITHUB_API_BASE_URL}/search/issues?q=author:${username}+type:issue+state:closed`,
      { headers: githubApiHeaders }
    );

    if (!openIssuesResponse.ok || !closedIssuesResponse.ok) {
      throw new GitHubApiError('Failed to fetch issue data',
        openIssuesResponse.status || closedIssuesResponse.status);
    }

    const openIssues = await openIssuesResponse.json();
    const closedIssues = await closedIssuesResponse.json();

    return {
      open: openIssues.total_count,
      closed: closedIssues.total_count
    };
  } catch (error) {
    if (error instanceof GitHubApiError) throw error;
    throw new GitHubApiError('Failed to fetch issue statistics', undefined, error);
  }
}

export async function fetchAllUserPullRequests(username: string): Promise<PullRequest[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE_URL}/search/issues?q=author:${username}+type:pr`,
      {
        headers: githubApiHeaders,
        cache: "force-cache"
      }
    );

    if (!response.ok) {
      throw new GitHubApiError('Failed to fetch pull requests', response.status);
    }

    const data = await response.json() as PullRequestResponse;

    const enrichedPRs = await Promise.all(
      data.items.map(async (pr) => {
        const prDetailsResponse = await fetch(pr.pull_request.url, {
          headers: githubApiHeaders,
          cache: "reload",
          next: {
            revalidate: 60 * 2 // 2min
          }
        });

        if (!prDetailsResponse.ok) {
          throw new GitHubApiError('Failed to fetch PR details', prDetailsResponse.status);
        }

        const prDetails = await prDetailsResponse.json();

        const repository: Repository = {
          name: prDetails.base.repo.name,
          full_name: prDetails.base.repo.full_name,
          html_url: prDetails.base.repo.html_url,
        };

        return {
          id: Number(pr.id),
          number: Number(pr.number),
          title: String(pr.title),
          state: String(pr.state),
          created_at: String(pr.created_at),
          updated_at: String(pr.updated_at),
          html_url: String(pr.html_url),
          diff_url: String(prDetails.diff_url),
          additions: Number(prDetails.additions),
          deletions: Number(prDetails.deletions),
          changed_files: Number(prDetails.changed_files),
          commits: Number(prDetails.commits),
          comments: Number(prDetails.comments),
          review_comments: Number(prDetails.review_comments),
          merge_commit_sha: prDetails.merge_commit_sha ? String(prDetails.merge_commit_sha) : null,
          //eslint-disable-next-line
          labels: pr.labels.map((label: any) => ({
            name: String(label.name),
            color: String(label.color),
            description: label.description ? String(label.description) : null
          })),
          repository,
          head: {
            ref: String(prDetails.head.ref),
            sha: String(prDetails.head.sha),
            repo: {
              name: String(prDetails.head.repo?.name || ''),
              full_name: String(prDetails.head.repo?.full_name || ''),
              html_url: String(prDetails.head.repo?.html_url || ''),
              description: String(prDetails.head.repo?.description || ''),
              private: Boolean(prDetails.head.repo?.private || false),
              language: String(prDetails.head.repo?.language || '')
            }
          },
          base: {
            ref: String(prDetails.base.ref),
            sha: String(prDetails.base.sha),
            repo: repository
          }
        };
      })
    );

    return enrichedPRs.sort((a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

  } catch (error) {
    if (error instanceof GitHubApiError) throw error;
    throw new GitHubApiError('Failed to fetch pull requests', undefined, error);
  }
};

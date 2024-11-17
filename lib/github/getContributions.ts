import { ContributionDay, ContributionStats, IssueStats, PullRequestStats } from ".";
import { GITHUB_API_BASE_URL, GitHubApiError, githubApiHeaders } from ".";



export async function fetchUserPRStats(username: string): Promise<PullRequestStats> {
  try {
    const openPRsResponse = await fetch(
      `${GITHUB_API_BASE_URL}/search/issues?q=author:${username}+type:pr+state:open`,
      { headers: githubApiHeaders }
    );

    const closedPRsResponse = await fetch(
      `${GITHUB_API_BASE_URL}/search/issues?q=author:${username}+type:pr+state:closed`,
      { headers: githubApiHeaders }
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
      { headers: githubApiHeaders }
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



export async function fetchUserContributions(username: string): Promise<ContributionStats> {
  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: githubApiHeaders,
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      throw new GitHubApiError('Failed to fetch contribution data', response.status);
    }

    const data = await response.json();
    
    if (data.errors) {
      throw new GitHubApiError(data.errors[0].message);
    }

    const calendar = data.data.user.contributionsCollection.contributionCalendar;
    const contributionDays: ContributionDay[] = [];
    //eslint-disable-next-line
    calendar.weeks.forEach((week: any) => {
      //eslint-disable-next-line
      week.contributionDays.forEach((day: any) => {

        let level: 0 | 1 | 2 | 3 | 4 = 0;
        if (day.contributionCount > 0) {
          if (day.contributionCount <= 3) level = 1;
          else if (day.contributionCount <= 6) level = 2;
          else if (day.contributionCount <= 9) level = 3;
          else level = 4;
        }

        contributionDays.push({
          date: day.date,
          count: day.contributionCount,
          level,
        });
      });
    });

    return {
      totalContributions: calendar.totalContributions,
      contributionDays,
    };
  } catch (error) {
    if (error instanceof GitHubApiError) throw error;
    throw new GitHubApiError('Failed to fetch contribution statistics', undefined, error);
  }
}

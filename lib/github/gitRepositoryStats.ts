import { GitHubError, GitHubStats } from "@/types";
import { GITHUB_API_BASE_URL, githubApiHeaders } from ".";
import { GitHubApiError } from "../../types/github";


const extractRepoInfo = (githubLink: string): { owner: string; repo: string } | null => {
    const match = githubLink.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return null;
    const [, owner, repo] = match;
    return { owner, repo: repo.replace(/\.git$/, '') };
};

const fetchWithAuth = async (url: string) => {
    const response = await fetch(url, { 
        headers: githubApiHeaders,
        cache:"force-cache"
     });
    
    if (!response.ok) {
        const error: GitHubError = await response.json();
        throw new GitHubApiError(
            error.message || 'GitHub API request failed',
            response.status,
            error
        );
    }
    
    return response;
};

const getLastPageNumber = (linkHeader: string | null): number => {
    if (!linkHeader) return 0;
    const match = linkHeader.match(/page=(\d+)>; rel="last"/);
    return match ? parseInt(match[1], 10) : 0;
};


export const getRepositoryStats = async (githubLink: string): Promise<GitHubStats | null> => {
    try {
        const repoInfo = extractRepoInfo(githubLink);
        if (!repoInfo) {
            throw new GitHubApiError('Invalid GitHub repository URL');
        }

        const { owner, repo } = repoInfo;

        const repoResponse = await fetchWithAuth(
            `${GITHUB_API_BASE_URL}/repos/${owner}/${repo}`
        );
        const repoData = await repoResponse.json();

        const closedIssuesResponse = await fetchWithAuth(
            `${GITHUB_API_BASE_URL}/repos/${owner}/${repo}/issues?state=closed&per_page=1`
        );
        const totalClosedIssues = getLastPageNumber(closedIssuesResponse.headers.get('Link'));

        const prsResponse = await fetchWithAuth(
            `${GITHUB_API_BASE_URL}/repos/${owner}/${repo}/pulls?state=all&per_page=1`
        );
        const totalPRs = getLastPageNumber(prsResponse.headers.get('Link'));

        return {
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            openIssues: repoData.open_issues_count,
            closedIssues: totalClosedIssues,
            pullRequests: totalPRs,
        };
    } catch (error) {
        if (error instanceof GitHubApiError) {
            console.error('GitHub API Error:', error.message, error.status);
        } else {
            console.error('Error fetching GitHub stats:', error);
        }
        return null;
    }
};

export const getRepositoryIssues = async (
    githubLink: string,
    state: 'open' | 'closed' | 'all' = 'all',
    page = 1,
    perPage = 30
) => {
    const repoInfo = extractRepoInfo(githubLink);
    if (!repoInfo) return null;

    const { owner, repo } = repoInfo;
    
    try {
        const response = await fetchWithAuth(
            `${GITHUB_API_BASE_URL}/repos/${owner}/${repo}/issues?state=${state}&page=${page}&per_page=${perPage}`
        );
        return await response.json();
    } catch (error) {
        console.error('Error fetching repository issues:', error);
        return null;
    }
};

export const getRepositoryPullRequests = async (
    githubLink: string,
    state: 'open' | 'closed' | 'all' = 'all',
    page = 1,
    perPage = 30
) => {
    const repoInfo = extractRepoInfo(githubLink);
    if (!repoInfo) return null;

    const { owner, repo } = repoInfo;
    
    try {
        const response = await fetchWithAuth(
            `${GITHUB_API_BASE_URL}/repos/${owner}/${repo}/pulls?state=${state}&page=${page}&per_page=${perPage}`
        );
        return await response.json();
    } catch (error) {
        console.error('Error fetching repository pull requests:', error);
        return null;
    }
};
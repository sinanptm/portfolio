
export class GitHubApiError extends Error {
    constructor(message: string, public status?: number, public response?: unknown) {
        super(message);
        this.name = 'GitHubApiError';
    }
}

export interface PullRequestStats {
    open: number;
    closed: number;
    merged: number;
}

export interface IssueStats {
    open: number;
    closed: number;
}


export interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionStats {
    totalContributions: number;
    contributionDays: ContributionDay[];
}



export interface Repository {
    name: string;
    full_name: string;
    html_url: string;
}



export interface PullRequest {
    id: number;
    number: number;
    title: string;
    state: string;
    created_at: string;
    updated_at:string;
    html_url: string;
    diff_url: string;
    additions: number;
    deletions: number;
    changed_files: number;
    commits: number;
    comments: number;
    review_comments: number;
    merge_commit_sha: string | null;
    labels: Array<{
        name: string;
        color: string;
        description: string | null;
    }>;
    repository: Repository;
    head: {
        ref: string;
        sha: string;
        repo: Repository;
    };
    base: {
        ref: string;
        sha: string;
        repo: Repository;
    };
}

export interface PullRequestResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Array<any>;
}

export interface SearchResultItem {
    id: number;
    number: number;
    title: string;
    state: 'open' | 'closed';
    created_at: string;
    updated_at: string;
    html_url: string;
    pull_request: {
        url: string;
    };
    user: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
}

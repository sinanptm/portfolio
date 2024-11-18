"use client";

import { useEffect, useState } from 'react';
import { ChartDataType } from "@/types";
import ContributionChart from "./ContributionChart";
import { fetchAllUserPullRequests, fetchUserIssueStats, fetchUserPRStats } from '@/lib/github/getContributions';
import { profile } from '@/constants';
import ChartSkeleton from './ChartSkeleton';
import { PullRequest } from "@/types/github";
import PullRequestsTable from './PullRequests';

const Contributions = () => {
  const [prData, setPrData] = useState<ChartDataType>([]);
  const [issueData, setIssueData] = useState<ChartDataType>([]);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [prStats, issueStats, prs] = await Promise.all([
          fetchUserPRStats(profile.gitHubUserName),
          fetchUserIssueStats(profile.gitHubUserName),
          fetchAllUserPullRequests(profile.gitHubUserName)
        ]);

        setPrData([
          { status: "open", count: prStats.open, fill: "hsl(var(--chart-1))" },
          { status: "closed", count: prStats.closed, fill: "hsl(var(--chart-2))" },
          { status: "merged", count: prStats.merged, fill: "hsl(var(--chart-3))" },
        ]);

        setIssueData([
          { status: "open", count: issueStats.open, fill: "hsl(var(--chart-4))" },
          { status: "closed", count: issueStats.closed, fill: "hsl(var(--chart-5))" },
        ]);

        setPullRequests(prs);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error loading contributions: {error}
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-4">
        <h2 className="heading">Contributions</h2>

        <div className="flex flex-col md:flex-row gap-4">
          {loading ? (
            <>
              <ChartSkeleton />
              <ChartSkeleton />
            </>
          ) : (
            <>
              <ContributionChart title="Pull Requests" data={prData} />
              <ContributionChart title="Issues" data={issueData} />
            </>
          )}
        </div>
        <PullRequestsTable pullRequests={pullRequests} />
      </div>
    </div>
  );
};

export default Contributions;
import { ChartDataType } from "@/types";
import ContributionChart from "./ContributionChart";


const pullRequestData: ChartDataType = [
  { status: "open", count: 15, fill: "hsl(var(--chart-1))" },
  { status: "closed", count: 45, fill: "hsl(var(--chart-2))" },
  { status: "merged", count: 30, fill: "hsl(var(--chart-3))" },
];

const issuesData: ChartDataType = [
  { status: "open", count: 20, fill: "hsl(var(--chart-4))" },
  { status: "closed", count: 35, fill: "hsl(var(--chart-5))" },
];

const Contributions = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="heading">Contributions</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <ContributionChart title="Pull Requests" data={pullRequestData} />
          <ContributionChart title="Issues" data={issuesData} />
        </div>
      </div>
    </div>
  );
};

export default Contributions;
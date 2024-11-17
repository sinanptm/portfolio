"use client"

import { Pie, PieChart, Tooltip, Cell } from "recharts"
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { memo } from "react"
import { ChartDataType } from "@/types"

const chartConfig = {
  count: { label: "Count" },
  open: { label: "Open", color: "hsl(212, 100%, 50%)" },
  closed: { label: "Closed", color: "hsl(333, 71%, 51%)" },
  merged: { label: "Merged", color: "hsl(161, 94%, 43%)" },
  inProgress: { label: "In Progress", color: "hsl(280, 87%, 65%)" },
}

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number }> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 border border-white/10 rounded-lg px-3 py-2 shadow-xl">
        <p className="text-sm font-medium text-white">{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

const ContributionChart = ({ title, data }: { title: string; data: ChartDataType }) => (
  <div className="flex-1">
    <div className="text-center space-y-1 mb-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/60">Distribution</p>
    </div>
    <ChartContainer
      config={chartConfig}
      className="w-full aspect-square max-w-[400px] mx-auto"
    >
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="status"
          cx="50%"
          cy="50%"
          outerRadius={150}
          innerRadius={80}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <ChartLegend
          content={<ChartLegendContent nameKey="status" />}
          className="mt-8 flex-wrap gap-4 [&>*]:basis-1/3 [&>*]:justify-center text-white/80"
        />
      </PieChart>
    </ChartContainer>
  </div>
)

export default memo(ContributionChart)
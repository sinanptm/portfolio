"use client"

import { memo } from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

interface ContributionGraphProps {
  contributionDays: ContributionDay[]
  totalContributions: number
}

export interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export interface ContributionStats {
  totalContributions: number
  contributionDays: ContributionDay[]
}

const ContributionGraph = ({ contributionDays, totalContributions }: ContributionGraphProps) => {
  const chartConfig = {
    contributions: {
      label: "Contributions",
      color: "hsl(var(--primary))",
    },
  }

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return "hsl(var(--muted-foreground))"
      case 1: return "hsl(var(--primary)/0.3)"
      case 2: return "hsl(var(--primary)/0.5)"
      case 3: return "hsl(var(--primary)/0.7)"
      case 4: return "hsl(var(--primary))"
      default: return "hsl(var(--muted-foreground))"
    }

  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>GitHub Contributions</CardTitle>
        <CardDescription>Total contributions: {totalContributions}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={contributionDays} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short' })}
                interval={30}
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis hide />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload as ContributionDay
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Date
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Contributions
                            </span>
                            <span className="font-bold">{data.count}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="count"
                radius={[2, 2, 0, 0]}
                fill="hsl(var(--primary))"
              >
                {contributionDays.map((entry, index) => (
                  <Bar 
                    key={`cell-${index}`} 
                    dataKey="count" 
                    fill={getContributionColor(entry.level)}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default memo(ContributionGraph)
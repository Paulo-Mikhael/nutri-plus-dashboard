"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../ui/chart";

interface CaloriesChartInfo {
  day: string;
  goal: number;
  myKcal: number;
}

export function CaloriesChart() {
  const chartData: CaloriesChartInfo[] = [
    { day: "21 de outubro", goal: 1731, myKcal: 1500 },
    { day: "22 de outubro", goal: 1931, myKcal: 0 },
    { day: "23 de outubro", goal: 3400, myKcal: 0 },
    { day: "24 de outubro", goal: 1700, myKcal: 0 },
    { day: "25 de outubro", goal: 1731, myKcal: 0 },
    { day: "26 de outubro", goal: 1931, myKcal: 0 },
    { day: "27 de outubro", goal: 3400, myKcal: 0 },
    { day: "28 de outubro", goal: 1700, myKcal: 0 },
  ];
  const chartConfig = {
    goal: {
      label: "Meta",
    },
    myKcal: {
      label: "Minhas Calorias",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="max-w-[75%]">
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <CartesianGrid vertical={true} strokeDasharray="3 3" />
        <XAxis
          name="Dia da semana (Outubro)"
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={true}
        />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar type="monotone" dataKey="goal" fill="hsl(120, 40%, 50%)" radius={4} />
        <Bar type="monotone" dataKey="myKcal" fill="hsl(177, 70%, 50%)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

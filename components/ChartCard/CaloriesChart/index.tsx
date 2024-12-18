"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";
import { caloriesChartConfig } from "@/data/calories-chart-data";
import { useWeeklyCaloriesChart } from "@/hooks/use-weekly-calories-chart";

export function CaloriesChart() {
  const userWeelkyCaloriesChart = useWeeklyCaloriesChart();
  if (!userWeelkyCaloriesChart) return;

  return (
    <ChartContainer config={caloriesChartConfig} className="max-w-[100%] max-h-96">
      <BarChart
        accessibilityLayer
        data={userWeelkyCaloriesChart}
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

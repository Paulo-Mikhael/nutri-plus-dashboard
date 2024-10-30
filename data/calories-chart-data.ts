import type { ChartConfig } from "@/components/ui/chart";
import type { CaloriesChartInfo } from "@/types/CaloriesChartInfo";

export const caloriesChartConfig = {
  goal: {
    label: "Meta",
  },
  myKcal: {
    label: "Minhas Calorias",
  },
} satisfies ChartConfig;

export const caloriesChartData: CaloriesChartInfo[] = [
  { day: "21 de outubro", goal: 1731, myKcal: 1500 },
  { day: "22 de outubro", goal: 1931, myKcal: 0 },
  { day: "23 de outubro", goal: 3400, myKcal: 0 },
  { day: "24 de outubro", goal: 1700, myKcal: 0 },
  { day: "25 de outubro", goal: 1731, myKcal: 0 },
  { day: "26 de outubro", goal: 1931, myKcal: 0 },
  { day: "27 de outubro", goal: 3400, myKcal: 0 },
  { day: "28 de outubro", goal: 1700, myKcal: 0 },
];

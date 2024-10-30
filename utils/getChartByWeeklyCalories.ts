import type { CaloriesChartInfo } from "@/types/CaloriesChartInfo";

export function getChartByWeeklyCalories(weeklyCalories: number): CaloriesChartInfo[] {
  const dailyCalories = parseFloat((weeklyCalories / 7).toFixed(0));
  const userCaloriesChart: CaloriesChartInfo[] = [];
  const days = [
    "21 de outubro",
    "22 de outubro",
    "23 de outubro",
    "24 de outubro",
    "25 de outubro",
    "26 de outubro",
    "27 de outubro",
  ];

  for (let i = 0; i < 7; i++) {
    userCaloriesChart.push({
      day: days[i],
      goal: dailyCalories,
      myKcal: 0,
    });
  }

  return userCaloriesChart;
}

import type { CaloriesChartInfo } from "@/types/CaloriesChartInfo";
import { randomizeArray } from "./randomizeArray";

export function getChartByWeeklyCalories(weeklyCalories: number): CaloriesChartInfo[] {
  const dailyCalories = parseFloat((weeklyCalories / 7).toFixed(0));
  // const dailyCaloriesRandomized = [
  //   dailyCalories - 80,
  //   dailyCalories + 80,
  //   dailyCalories - 100,
  //   dailyCalories + 100,
  //   dailyCalories - 200,
  //   dailyCalories + 200,
  //   dailyCalories,
  // ];
  const differenceValues: number[] = [200, 100, 400];
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
    let dailyCaloryReajusted = dailyCalories;

    if (i !== 6) {
      if (i < 3) {
        dailyCaloryReajusted += differenceValues[i];
      } else {
        dailyCaloryReajusted -= differenceValues[i - 3];
      }
    }

    userCaloriesChart.push({
      day: days[i],
      goal: i !== 6 ? dailyCaloryReajusted : dailyCalories,
      myKcal: 0,
    });
  }

  return randomizeArray(userCaloriesChart);
}

import type { CaloriesChartInfo } from "@/types/CaloriesChartInfo";
import { getDaysOfWeek } from "./getDaysOfWeek";

export function getChartByWeeklyCalories(weeklyCalories: number): CaloriesChartInfo[] {
  const dailyCalories = parseFloat((weeklyCalories / 7).toFixed(0));
  const reajustValues: number[] = [150, 100, 200];
  const userCaloriesChart: CaloriesChartInfo[] = [];
  const days: string[] = getDaysOfWeek();

  for (let i = 0; i < 7; i++) {
    let dailyCaloryReajusted = dailyCalories;

    if (i !== 6) {
      if (i < 3) {
        dailyCaloryReajusted += reajustValues[i];
      } else {
        dailyCaloryReajusted -= reajustValues[i - 3];
      }
    }

    userCaloriesChart.push({
      day: days[i],
      goal: i !== 6 ? dailyCaloryReajusted : dailyCalories,
      myKcal: 0,
    });
  }

  return userCaloriesChart;
}

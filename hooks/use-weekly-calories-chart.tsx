import type { CaloriesChartInfo } from "@/types/CaloriesChartInfo";
import { getDaysOfWeek } from "../utils/getDaysOfWeek";
import { useUserWeeklyCalories } from "@/hooks/use-user-weekly-calories";
import { useGetUserCalories } from "./use-get-user-calories";

export function useWeeklyCaloriesChart(): CaloriesChartInfo[] | null {
  const userWeeklyCalories = useUserWeeklyCalories();
  const userCalories = useGetUserCalories();

  if (!userCalories) return null;

  const weeklyCalories = userCalories.weeklyCalories;
  const dailyCalories = parseFloat((weeklyCalories / 7).toFixed(0));
  const reajustValues: number[] = [150, 100, 200];
  const userCaloriesChart: CaloriesChartInfo[] = [];
  const days: string[] = getDaysOfWeek();

  for (let i = 0; i < 7; i++) {
    let dailyCaloryToReajust = dailyCalories;
    const userInDayCalories = userWeeklyCalories.filter((item) => item.date === days[i]);

    if (i !== 6) {
      if (i < 3) {
        dailyCaloryToReajust += reajustValues[i];
      } else {
        dailyCaloryToReajust -= reajustValues[i - 3];
      }
    }

    userCaloriesChart.push({
      day: days[i],
      goal: i !== 6 ? dailyCaloryToReajust : dailyCalories,
      myKcal: userInDayCalories.length > 0 ? userInDayCalories[0].calories : 0,
    });
  }

  return userCaloriesChart;
}

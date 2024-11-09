import type { UserWeeklyCalories } from "@/types/UserWeeklyCalories";
import { useUserStore } from "./state/UserStore";
import { useUserWeeklyCalories } from "./use-user-weekly-calories";

export function useAddUserWeeklyCalories(): (
  weeklyCalories: UserWeeklyCalories,
  action?: "increase" | "decrease"
) => void {
  const userWeeklyCalories = useUserWeeklyCalories();
  const setUserWeeklyCalories = useUserStore((state) => state.setUserWeeklyCalories);

  return (weeklyCalories, action = "increase") => {
    const recievedDate = weeklyCalories.date;
    const recievedCalories = weeklyCalories.calories;
    const dayOfWeek = userWeeklyCalories.filter((item) => item.date === recievedDate);

    if (dayOfWeek.length > 0) {
      setUserWeeklyCalories(
        userWeeklyCalories.map((item) => {
          const quantity =
            action === "increase"
              ? item.calories + recievedCalories
              : item.calories - recievedCalories;

          return {
            ...item,
            calories: item.date === weeklyCalories.date ? quantity : item.calories,
          };
        })
      );
    } else {
      setUserWeeklyCalories([
        ...userWeeklyCalories,
        {
          date: recievedDate,
          calories: recievedCalories,
        },
      ]);
    }
  };
}

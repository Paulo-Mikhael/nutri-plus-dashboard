import type { UserWeeklyCalories } from "@/types/UserWeeklyCalories";
import { useUserStore } from "./state/UserStore";

export function useUserWeeklyCalories(): UserWeeklyCalories[] {
  const userWeelkyCalories = useUserStore((state) => state.weeklyCalories);

  return userWeelkyCalories;
}

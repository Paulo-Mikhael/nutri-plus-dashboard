import type { UserWeelkyCalories } from "@/types/UserWeeklyCalories";
import { useUserStore } from "./state/UserStore";

export function useUserWeeklyCalories(): UserWeelkyCalories {
  const userWeelkyCalories = useUserStore((state) => state.weeklyCalories);

  return userWeelkyCalories;
}

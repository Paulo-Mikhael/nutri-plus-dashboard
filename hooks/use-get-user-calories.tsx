import type { GetWeeklyCaloriesReturn } from "@/types/GetSemanalCaloriesReturn";
import { useUserStore } from "./state/UserStore";

export function useGetUserCalories(): GetWeeklyCaloriesReturn | null {
  const userWeeklyCalories = useUserStore((state) => state.getUserWeeklyCalories);

  if (!userWeeklyCalories) return null;

  return userWeeklyCalories();
}

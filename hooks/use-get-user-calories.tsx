import type { GetWeeklyCaloriesReturn } from "@/types/GetSemanalCaloriesReturn";
import { useUserStore } from "./state/store";

export function useGetUserCalories(): GetWeeklyCaloriesReturn | null {
  const userWeeklyCalories = useUserStore((state) => state.getUserWeeklyCalories);

  if (!userWeeklyCalories) return null;

  return userWeeklyCalories();
}

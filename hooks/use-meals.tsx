import type { Meal } from "@/types/Meal";
import { useFoodsStore } from "./state/FoodsStore";

export function useMeals(): Meal[] {
  const meals = useFoodsStore((state) => state.meals);

  return meals;
}

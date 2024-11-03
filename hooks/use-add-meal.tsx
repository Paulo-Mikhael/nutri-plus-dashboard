import type { Meal } from "@/types/Meal";
import { useFoodsStore } from "./state/FoodsStore";

export function useAddMeal(): (meal: Meal) => void {
  const addMeal = useFoodsStore((state) => state.addMeal);

  return (meal: Meal) => {
    addMeal(meal);
  };
}

import type { FoodToUpdateChart } from "@/types/FoodToUpdateChart";
import { useFoodsStore } from "./state/FoodsStore";

export function useFoodsToUpdateChart(): FoodToUpdateChart[] {
  const foodsToUpdateChart = useFoodsStore((state) => state.foodsToUpdateChart);

  return foodsToUpdateChart;
}

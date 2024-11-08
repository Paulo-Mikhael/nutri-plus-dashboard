import type { FoodToUpdateChart } from "@/types/FoodToUpdateChart";
import { useFoodsStore } from "./state/FoodsStore";
import { useFoods } from "./use-foods";

interface UseFoodsToUpdateChartProps {
  foods: FoodToUpdateChart[];
  totalCalories: number;
}

export function useFoodsToUpdateChart(): UseFoodsToUpdateChartProps {
  const foods = useFoods();
  const foodsToUpdateChart = useFoodsStore((state) => state.foodsToUpdateChart);
  let totalCalories = 0;

  for (let i = 0; i < foodsToUpdateChart.length; i++) {
    const quantity = foodsToUpdateChart[i].quantity;
    const foodId = foodsToUpdateChart[i].foodId;
    const food = foods.filter((item) => item.id === foodId);

    totalCalories += quantity * food[0].nutrients.calories;
  }

  return {
    foods: foodsToUpdateChart,
    totalCalories,
  };
}

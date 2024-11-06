import type { FoodItem } from "@/types/FoodItem";
import { useFoodsStore } from "./state/FoodsStore";

export function useAddFood() {
  const addFood = useFoodsStore((state) => state.addFood);

  return (food: FoodItem) => {
    addFood(food);
  };
}

import type { FoodItem } from "@/types/FoodItem";
import { useFoods } from "./use-foods";

export function useFoodsByIdList(foodsIdList: string[]): FoodItem[] {
  const foods = useFoods();

  return foods.filter((item) => foodsIdList.includes(item.id));
}

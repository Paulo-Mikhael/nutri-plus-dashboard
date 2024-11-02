import type { FoodItem } from "@/types/FoodItem";
import { useFoodsStore } from "./state/FoodsStore";

export function useFoods(): FoodItem[] {
  const foods = useFoodsStore((state) => state.items);

  return foods.sort((a, b) => a.name.localeCompare(b.name));
}

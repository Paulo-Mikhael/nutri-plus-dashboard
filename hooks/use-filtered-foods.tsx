import type { FoodItem } from "@/types/FoodItem";
import { useFoods } from "./use-foods";

export function useFilteredFoodsByName(searchedName: string): FoodItem[] {
  const foods = useFoods();

  const filteredFoods = foods.filter((item) => {
    const foodName = item.name.toLowerCase().trim();
    const normalizedSearch = searchedName.toLowerCase().trim();

    return foodName.includes(normalizedSearch);
  });
  return filteredFoods;
}

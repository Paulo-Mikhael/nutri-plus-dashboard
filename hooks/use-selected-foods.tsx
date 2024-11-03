import type { Nutrients } from "@/types/Nutrients";
import type { SelectedFoodsReturn } from "@/types/SelectedFoodsReturn";
import { useFoods } from "./use-foods";

export function useSelectedFoods(): SelectedFoodsReturn {
  let caloriesSum = 0;
  let ironSum = 0;
  let calciumSum = 0;
  let dietaryFiberSum = 0;
  let proteinSum = 0;
  let magnesiumSum = 0;
  let potassiumSum = 0;
  let carbohydratesSum = 0;
  const foods = useFoods().filter((food) => food.selected === true);

  for (let i = 0; i < foods.length; i++) {
    const food = foods[i].nutrients;

    caloriesSum += food.calories;
    ironSum += food.iron;
    calciumSum += food.calcium;
    dietaryFiberSum += food.dietaryFiber;
    proteinSum += food.protein;
    magnesiumSum += food.magnesium;
    potassiumSum += food.potassium;
    carbohydratesSum += food.carbohydrates;
  }

  const nutrients: Nutrients = {
    calories: caloriesSum,
    iron: ironSum,
    calcium: calciumSum,
    dietaryFiber: dietaryFiberSum,
    protein: proteinSum,
    magnesium: magnesiumSum,
    potassium: potassiumSum,
    carbohydrates: carbohydratesSum,
  };

  return {
    foods,
    nutrients,
  };
}

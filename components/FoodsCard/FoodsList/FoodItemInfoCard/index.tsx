import { Card } from "@/components/ui/card";
import { useFoodsState } from "@/hooks/use-foods-state";
import { useUpdateFoodSelectById } from "@/hooks/use-update-food-select-by-id";
import type { FoodItem } from "@/types/FoodItem";
import clsx from "clsx";

export function FoodItemInfoCard({ ...food }: FoodItem) {
  const foodsState = useFoodsState();
  const updateSelectedById = useUpdateFoodSelectById();

  return (
    <Card
      onClick={() => updateSelectedById(food.id)}
      className={clsx("p-4 flex-shrink-0 min-w-56 transition-all", {
        "bg-cyan-500 dark:bg-cyan-500/70 text-white cursor-pointer":
          foodsState === "selecting-meal",
        "bg-green-500 dark:bg-green-500/70":
          foodsState === "selecting-meal" && food.selected === true,
      })}
    >
      <div className="flex flex-col gap-2">
        <span className="h-full text-xl">{food.name}</span>
        <ul>
          <li>Calorias: {food.calories} kcal</li>
          <li>Ferro: {food.iron} mg</li>
          <li>Cálcio: {food.calcium} mg</li>
          <li>Fibra Alimentar: {food.dietaryFiber} g</li>
          <li>Proteínas: {food.protein} mg</li>
          <li>Magnésio: {food.magnesium} mg</li>
          <li>Potássio: {food.potassium} mg</li>
          <li>Carboidratos: {food.carbohydrates} g</li>
        </ul>
      </div>
    </Card>
  );
}

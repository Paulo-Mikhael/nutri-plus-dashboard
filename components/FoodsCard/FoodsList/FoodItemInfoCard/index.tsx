import clsx from "clsx";
import type { FoodItem } from "@/types/FoodItem";
import type { Meal } from "@/types/Meal";
import { useUpdateFoodSelectById } from "@/hooks/use-update-food-select-by-id";
import { useFoodsState } from "@/hooks/use-foods-state";
import { Card } from "@/components/ui/card";
import { NutrientsList } from "../../NutrientsList";

interface FoodItemInfoCardProps {
  food?: FoodItem;
  meal?: Meal;
}

export function FoodItemInfoCard({ food, meal }: FoodItemInfoCardProps) {
  const foodsState = useFoodsState();
  const updateSelectedById = useUpdateFoodSelectById();

  return (
    <Card
      onClick={() => {
        if (food && foodsState === "selecting-meal") {
          updateSelectedById(food.id);
        }
      }}
      className={clsx("p-4 flex-shrink-0 min-w-56 transition-all", {
        "bg-cyan-500 dark:bg-cyan-500/70 text-white cursor-pointer":
          food && foodsState === "selecting-meal",
        "bg-green-500 dark:bg-green-500/70":
          food && foodsState === "selecting-meal" && food.selected === true,
      })}
    >
      {food && (
        <>
          <div className="flex flex-col gap-2">
            <span className="h-full text-xl">{food.name}</span>
          </div>
          {!meal && <NutrientsList {...food.nutrients} />}
        </>
      )}
      {meal && (
        <>
          <div className="flex flex-col gap-2">
            <span className="h-full text-xl">{meal.name}</span>
          </div>
          {!food && <NutrientsList {...meal.nutrients} />}
        </>
      )}
    </Card>
  );
}

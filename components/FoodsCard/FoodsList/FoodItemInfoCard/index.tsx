import clsx from "clsx";
import type { FoodItem } from "@/types/FoodItem";
import type { Meal } from "@/types/Meal";
import { useUpdateFoodSelectById } from "@/hooks/use-update-food-select-by-id";
import { useFoodsState } from "@/hooks/use-foods-state";
import { Card } from "@/components/ui/card";
import { NutrientsList } from "../NutrientsList";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useFoodsToUpdateChart } from "@/hooks/use-foods-to-update-chart";
import { useAddFoodToUpdateChart } from "@/hooks/use-add-food-to-update-chart";

interface FoodItemInfoCardProps {
  food?: FoodItem;
  meal?: Meal;
}

export function FoodItemInfoCard({ food, meal }: FoodItemInfoCardProps) {
  const foodsState = useFoodsState();
  const updateSelectedById = useUpdateFoodSelectById();
  const [handleHover, setHandleHover] = useState<boolean>(false);
  const foodsToUpdateChart = useFoodsToUpdateChart();
  const addFoodToUpdateCard = useAddFoodToUpdateChart();
  const foodToUpdateChart = foodsToUpdateChart.foods.filter((item) => item.foodId === food?.id);
  const foodToUpdateChartQuantity =
    foodToUpdateChart.length > 0 ? foodToUpdateChart[0].quantity : 0;

  return (
    <Card
      onMouseLeave={() => {
        if (foodsState === "selecting-food") {
          setHandleHover(false);
        }
      }}
      onMouseOver={() => {
        if (foodsState === "selecting-food") {
          setHandleHover(true);
        }
      }}
      onClick={() => {
        if (food && foodsState === "selecting-meal") {
          updateSelectedById(food.id);
        }
      }}
      className={clsx(
        "p-4 flex-shrink-0 min-w-56 transition-all relative flex flex-col justify-center items-center",
        {
          "bg-cyan-500 dark:bg-cyan-500/70 text-white cursor-pointer":
            (food && foodsState === "selecting-meal") || foodsState === "selecting-food",
          "bg-green-500 dark:bg-green-500/70":
            food && foodsState === "selecting-meal" && food.selected === true,
          "bg-lime-500/70 text-white cursor-pointer":
            food?.createdByUser === true && foodsState !== "selecting-meal",
          "hover:bg-slate-200/70 hover:text-white dark:hover:bg-slate-900/70 dark:hover:text-slate-500 cursor-default":
            foodsState === "selecting-food",
          "cursor-pointer": meal,
        }
      )}
    >
      {food && (
        <span className="w-full">
          <div className="flex flex-col gap-2">
            <span className="h-full text-xl">{food.name}</span>
          </div>
          {!meal && <NutrientsList {...food.nutrients} />}
        </span>
      )}
      {meal && (
        <>
          <div className="flex flex-col gap-2">
            <span className="h-full text-xl">{meal.name}</span>
          </div>
          {!food && <NutrientsList {...meal.nutrients} />}
        </>
      )}
      {food && foodsState === "selecting-food" && handleHover && (
        <div className="flex flex-col gap-4 absolute">
          <Button onClick={() => addFoodToUpdateCard(food.id, true)}>
            <Minus className="size-8" />
          </Button>
          <Button onClick={() => addFoodToUpdateCard(food.id)}>
            <Plus className="size-8" />
          </Button>
        </div>
      )}
      {foodsState === "selecting-food" &&
        foodToUpdateChart.length > 0 &&
        foodToUpdateChartQuantity !== 0 && (
          <span className="bg-green-700 rounded-lg px-4 py-2 absolute top-2 right-2">
            <p className="text-bold text-white">{foodToUpdateChartQuantity}</p>
          </span>
        )}
    </Card>
  );
}

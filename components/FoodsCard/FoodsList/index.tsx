import clsx from "clsx";
import { FoodItemInfoCard } from "./FoodItemInfoCard";
import type { FoodItem } from "@/types/FoodItem";
import type { Meal } from "@/types/Meal";
import { MealFoodsDialog } from "./MealFoodsDialog";

interface FoodsListProps {
  foods?: FoodItem[];
  meals?: Meal[];
  nullListMessage?: string;
  vertical?: boolean;
}

export function FoodsList({
  foods,
  meals,
  nullListMessage = "Lista vazia",
  vertical,
}: FoodsListProps) {
  const nullList = (foods && foods.length <= 0) || (meals && meals.length <= 0);
  const nonNullList = (foods && foods.length > 0) || (meals && meals.length > 0);

  return (
    <div
      className={clsx("w-full flex gap-4", {
        "overflow-x-scroll pb-1": nonNullList && !vertical,
        "overflow-y-scroll pr-1": nonNullList && vertical,
        "overflow-none": nullList,
        "flex-col max-h-96": vertical,
      })}
    >
      {foods && (
        <>
          {foods.length <= 0 ? (
            <p className="text-xl">{nullListMessage}</p>
          ) : (
            <>
              {foods.map((food) => (
                <FoodItemInfoCard key={food.id} food={food} />
              ))}
            </>
          )}
        </>
      )}
      {meals && (
        <>
          {meals.length <= 0 ? (
            <p className="text-xl">{nullListMessage}</p>
          ) : (
            <>
              {meals.map((meal) => (
                <MealFoodsDialog key={meal.id} mealFoodsId={meal.foodsId}>
                  <FoodItemInfoCard meal={meal} />
                </MealFoodsDialog>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

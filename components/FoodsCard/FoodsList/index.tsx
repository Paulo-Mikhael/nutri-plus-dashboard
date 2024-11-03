import clsx from "clsx";
import { FoodItemInfoCard } from "./FoodItemInfoCard";
import type { FoodItem } from "@/types/FoodItem";
import type { Meal } from "@/types/Meal";

interface FoodsListProps {
  foods?: FoodItem[];
  meals?: Meal[];
  nullListMessage?: string;
}

export function FoodsList({
  foods,
  meals,
  nullListMessage = "Nada foi encontrado",
}: FoodsListProps) {
  const nullList = (foods && foods.length <= 0) || (meals && meals.length <= 0);
  const nonNullList = (foods && foods.length > 0) || (meals && meals.length > 0);

  return (
    <div
      className={clsx("w-full flex gap-4 pb-1", {
        "overflow-x-scroll": nonNullList,
        "overflow-none": nullList,
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
                <FoodItemInfoCard key={meal.id} meal={meal} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

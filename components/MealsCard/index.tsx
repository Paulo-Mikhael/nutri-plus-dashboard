"use client";

import { useMeals } from "@/hooks/use-meals";
import { FoodsList } from "../FoodsCard/FoodsList";
import { CardTitle } from "../CardTitle";

export function MealsCard() {
  const meals = useMeals();

  return (
    <div className="flex flex-col gap-4">
      <CardTitle h2="Minhas Refeições" h3="Refeições criadas com os alimentos acima" />
      <FoodsList nullListMessage="Nenhuma refeição criada" meals={meals} />
    </div>
  );
}

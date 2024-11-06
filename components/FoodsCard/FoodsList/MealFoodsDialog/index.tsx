import type { ReactNode } from "react";
import { useFoodsByIdList } from "@/hooks/use-foods-by-id-list";
import { Dialog } from "@/components/Dialog";
import { FoodsList } from "..";

interface MealFoodsDialogProps {
  children: ReactNode;
  mealFoodsId: string[];
}

export function MealFoodsDialog({ children, mealFoodsId }: MealFoodsDialogProps) {
  const mealFoods = useFoodsByIdList(mealFoodsId);

  return (
    <Dialog maxWidth="max-w-96" title="Alimentos presentes na refeição" trigger={children}>
      <FoodsList vertical foods={mealFoods} />
    </Dialog>
  );
}

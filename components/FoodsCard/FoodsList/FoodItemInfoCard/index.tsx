import { Card } from "@/components/ui/card";
import type { FoodItem } from "@/types/FoodItem";

export function FoodItemInfoCard({ ...food }: FoodItem) {
  return (
    <Card className="p-4 flex-shrink-0 min-w-56">
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

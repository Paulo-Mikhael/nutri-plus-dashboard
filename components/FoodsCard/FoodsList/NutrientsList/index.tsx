import type { Nutrients } from "@/types/Nutrients";

export function NutrientsList({
  calories,
  iron,
  calcium,
  dietaryFiber,
  protein,
  magnesium,
  potassium,
  carbohydrates,
}: Nutrients) {
  return (
    <ul>
      <li>Calorias: {calories.toFixed(1)} kcal</li>
      <li>Ferro: {iron.toFixed(2)} mg</li>
      <li>Cálcio: {calcium.toFixed(2)} mg</li>
      <li>Fibra Alimentar: {dietaryFiber.toFixed(1)} g</li>
      <li>Proteínas: {protein.toFixed(2)} mg</li>
      <li>Magnésio: {magnesium.toFixed(2)} mg</li>
      <li>Potássio: {potassium.toFixed(2)} mg</li>
      <li>Carboidratos: {carbohydrates.toFixed(1)} g</li>
    </ul>
  );
}

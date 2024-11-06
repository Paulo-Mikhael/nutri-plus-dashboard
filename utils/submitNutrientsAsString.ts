import type { Nutrients } from "@/types/Nutrients";
import type { UseFormReturn } from "react-hook-form";

type NutrientsAsString = {
  [K in keyof Nutrients]: string;
};
type NutrientsForm = UseFormReturn<{ foodName: string; nutrients: NutrientsAsString }>;

type SubmitNutrientsAsStringReturn = {
  success: boolean;
  numberNutrients?: Nutrients;
};

export function submitNutrientsAsString(
  form: NutrientsForm,
  nutrients: NutrientsAsString
): SubmitNutrientsAsStringReturn {
  const normalizeNutrientText = (nutrient: string) => {
    return nutrient.replace("mg", "").replace("MG", "").replace("g", "").replace("G", "").trim();
  };
  const isNumber = (text: string): boolean => {
    return Boolean(Number(text));
  };

  const calories = normalizeNutrientText(nutrients.calories);
  const iron = normalizeNutrientText(nutrients.iron);
  const calcium = normalizeNutrientText(nutrients.calcium);
  const dietaryFiber = normalizeNutrientText(nutrients.dietaryFiber);
  const protein = normalizeNutrientText(nutrients.protein);
  const magnesium = normalizeNutrientText(nutrients.magnesium);
  const potassium = normalizeNutrientText(nutrients.potassium);
  const carbohydrates = normalizeNutrientText(nutrients.carbohydrates);

  if (!isNumber(calories)) {
    form.setValue("nutrients.calories", "");
    form.setError("nutrients.calories", { message: "Insira um valor numérico nesse campo" });
    return { success: false };
  }
  if (!isNumber(iron)) {
    form.setValue("nutrients.iron", "");
    form.setError("nutrients.iron", { message: "Insira um valor numérico nesse campo" });
    return { success: false };
  }
  if (!isNumber(calcium)) {
    form.setValue("nutrients.calcium", "");
    form.setError("nutrients.calcium", { message: "Insira um valor numérico nesse campo" });
    return { success: false };
  }
  if (!isNumber(dietaryFiber)) {
    form.setValue("nutrients.dietaryFiber", "");
    form.setError("nutrients.dietaryFiber", { message: "Insira um valor numérico nesse campo" });
    return { success: false };
  }
  if (!isNumber(protein)) {
    form.setValue("nutrients.protein", "");
    form.setError("nutrients.protein", { message: "Insira um valor numérico nesse campo" });
    return { success: false };
  }
  if (!isNumber(magnesium)) {
    form.setValue("nutrients.magnesium", "");
    form.setError("nutrients.magnesium", { message: "Insira um valor numérico nesse campo" });
    return { success: false };
  }
  if (!isNumber(potassium)) {
    form.setValue("nutrients.potassium", "");
    form.setError("nutrients.potassium", { message: "Insira um valor numérico nesse campo" });
    return { success: false };
  }
  if (!isNumber(carbohydrates)) {
    form.setValue("nutrients.carbohydrates", "");
    form.setError("nutrients.carbohydrates", { message: "Insira um valor numérico nesse campo" });
    return { success: false };
  }

  return {
    success: true,
    numberNutrients: {
      calories: Number(calories),
      iron: Number(iron),
      calcium: Number(calcium),
      dietaryFiber: Number(dietaryFiber),
      protein: Number(protein),
      magnesium: Number(magnesium),
      potassium: Number(potassium),
      carbohydrates: Number(carbohydrates),
    },
  };
}

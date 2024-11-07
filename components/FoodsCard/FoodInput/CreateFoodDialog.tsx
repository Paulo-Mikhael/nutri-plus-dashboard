"use client";

import { Dialog } from "@/components/Dialog";
import { InputForm } from "@/components/InputForm";
import { Button } from "@/components/ui/button";
import { useAddFood } from "@/hooks/use-add-food";
import { submitNutrientsAsString } from "@/utils/submitNutrientsAsString";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";
import { z } from "zod";

const message = "Esse campo é obrigatório";
const nutrients = z.object({
  calories: z.string({ message }).min(1, { message }), // in kcal
  iron: z.string({ message }).min(1, { message }), // in mg
  calcium: z.string({ message }).min(1, { message }), // in mg
  dietaryFiber: z.string({ message }).min(1, { message }), // in g
  protein: z.string({ message }).min(1, { message }), // in mg
  magnesium: z.string({ message }).min(1, { message }), // in mg
  potassium: z.string({ message }).min(1, { message }), // in mg
  carbohydrates: z.string({ message }).min(1, { message }), // in g
});
const formSchema = z.object({
  foodName: z.string({ message }).min(1, { message }),
  nutrients,
});
type FoodSchema = z.infer<typeof formSchema>;

export function CreateFoodDialog({ children }: { children: ReactNode }) {
  const form = useForm<FoodSchema>({
    resolver: zodResolver(formSchema),
  });
  const addFood = useAddFood();

  function clearForm() {
    form.setValue("foodName", "");
    form.setValue("nutrients", {
      calories: "",
      iron: "",
      calcium: "",
      dietaryFiber: "",
      protein: "",
      magnesium: "",
      potassium: "",
      carbohydrates: "",
    });
    form.clearErrors();
  }

  function onSubmit(data: FoodSchema) {
    const nutrients = data.nutrients;
    const nutrientsSubmitReturn = submitNutrientsAsString(form, nutrients);

    if (nutrientsSubmitReturn.success === false) return;
    if (!nutrientsSubmitReturn.numberNutrients) return;

    addFood({
      id: uuidV4(),
      name: data.foodName,
      nutrients: nutrientsSubmitReturn.numberNutrients,
      selected: false,
      createdByUser: true,
    });
    clearForm();
  }

  return (
    <Dialog
      title="Adicionar comida:"
      description="Insira algumas informações nutricionais do alimento para prosseguir"
      onOpen={clearForm}
      maxWidth="w-96"
      asChild
      trigger={children}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="max-h-96 p-1 flex flex-col gap-4 overflow-y-scroll scrollbar-none">
          <InputForm
            form={form}
            name="foodName"
            label="Nome:"
            placeholder="Insira o nome do alimento"
            formMessage
          />
          <InputForm
            form={form}
            name="nutrients.calories"
            label="Calorias (kcal):"
            placeholder="Insira a quantidade de calorias"
            formMessage
          />
          <InputForm
            form={form}
            name="nutrients.iron"
            label="Ferro (mg):"
            placeholder="Insira a quantidade de ferro"
            formMessage
          />
          <InputForm
            form={form}
            name="nutrients.calcium"
            label="Cálcio (mg):"
            placeholder="Insira a quantidade de cálcio"
            formMessage
          />
          <InputForm
            form={form}
            name="nutrients.dietaryFiber"
            label="Fibra alimentar (g):"
            placeholder="Insira a quantidade de fibra alimentar"
            formMessage
          />
          <InputForm
            form={form}
            name="nutrients.protein"
            label="Proteína (mg):"
            placeholder="Insira a quantidade de proteína"
            formMessage
          />
          <InputForm
            form={form}
            name="nutrients.magnesium"
            label="Magnésio (mg):"
            placeholder="Insira a quantidade de magnésio"
            formMessage
          />
          <InputForm
            form={form}
            name="nutrients.potassium"
            label="Potássio (mg):"
            placeholder="Insira a quantidade de potássio"
            formMessage
          />
          <InputForm
            form={form}
            name="nutrients.carbohydrates"
            label="Carboidratos (mg):"
            placeholder="Insira a quantidade de carboidratos"
            formMessage
          />
        </div>
        <Button variant={!form.formState.isValid ? "destructive" : "default"} type="submit">
          Criar alimento
        </Button>
      </form>
    </Dialog>
  );
}

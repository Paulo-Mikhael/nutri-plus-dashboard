"use client";

import { Dialog } from "@/components/Dialog";
import { useSelectedFoods } from "@/hooks/use-selected-foods";
import { useRef, type ReactNode } from "react";
import { NutrientsList } from "../../NutrientsList";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "@/components/InputForm";
import { useAddMeal } from "@/hooks/use-add-meal";
import { v4 as uuidV4 } from "uuid";
import { useClearFoodSelection } from "@/hooks/use-clear-food-selection";

const message = "Esse campo é obrigatório.";
const formSchema = z.object({
  mealName: z.string({ message }).min(1, message),
});
type MealSchema = z.infer<typeof formSchema>;

export function CheckMealDialog({ children }: { children: ReactNode }) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const selectedFoodsState = useSelectedFoods();
  const selectedFoods = selectedFoodsState.foods;
  const addMeal = useAddMeal();
  const clearSelection = useClearFoodSelection();
  const form = useForm<MealSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mealName: "",
    },
  });

  function onSubmit(data: MealSchema) {
    const mealName = data.mealName;

    if (!mealName || mealName.trim() === "" || selectedFoods.length <= 0) return;
    const foodsId: string[] = [];

    for (let i = 0; i < selectedFoods.length; i++) {
      const foodId = selectedFoods[i].id;

      foodsId.push(foodId);
    }

    addMeal({
      id: uuidV4(),
      name: mealName,
      nutrients: selectedFoodsState.nutrients,
      foodsId,
    });
    clearSelection();

    closeButtonRef.current?.click();
  }

  return (
    <Dialog trigger={children}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <InputForm
          defaultValue={form.watch("mealName")}
          form={form}
          name="mealName"
          placeholder="Insira o nome da refeição a ser criada"
          label="Nome da refeição"
          formMessage
        />
        <h4>Alimentos selecionados:</h4>
        {selectedFoods.length === 0 ? (
          <p>Nada selecionado ainda. Monte sua refeição escolhendo os alimentos da lista.</p>
        ) : (
          <ul className="w-full flex gap-2 overflow-x-scroll pb-1 scrollbar-thin">
            {selectedFoods.map((food) => (
              <li
                className="flex-shrink-0 text-lg px-4 py-1 bg-slate-300 dark:bg-slate-900 rounded-full"
                key={food.id}
              >
                {food.name}
              </li>
            ))}
          </ul>
        )}
        {selectedFoods.length > 0 && (
          <>
            <h5 className="mt-4">Nutrientes da refeição:</h5>
            <NutrientsList {...selectedFoodsState.nutrients} />
          </>
        )}
        <span className="flex">
          <Button
            type="submit"
            variant={
              selectedFoods.length <= 0 ||
              !form.watch("mealName") ||
              form.watch("mealName").trim() === ""
                ? "destructive"
                : "default"
            }
            className="flex-grow"
          >
            Criar Refeição
          </Button>
        </span>
      </form>
      <DialogClose>
        <button type="button" ref={closeButtonRef} hidden>
          fechar
        </button>
      </DialogClose>
    </Dialog>
  );
}

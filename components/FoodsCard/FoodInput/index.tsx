"use client";

import { InputForm } from "@/components/InputForm";
import { Tooltip } from "@/components/Tooltip";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import { FoodsDialog } from "./FoodsDialog";
import { useFoodsState } from "@/hooks/use-foods-state";
import { useClearFoodSelection } from "@/hooks/use-clear-food-selection";
import { Button } from "@/components/ui/button";
import { CheckMealDialog } from "./CheckMealDialog";

interface FoodInputProps {
  form: UseFormReturn<{
    foodName: string | null;
  }>;
}

export function FoodInput({ form }: FoodInputProps) {
  const foodsState = useFoodsState();
  const clearSelection = useClearFoodSelection();

  return (
    <span className="flex gap-4 items-end">
      {foodsState === "none" && (
        <FoodsDialog>
          <Tooltip tipText="Adicionar novo alimento ou refeição">
            <Card className="flex justify-center items-center p-4 cursor-pointer">
              <Plus className="size-6" />
            </Card>
          </Tooltip>
        </FoodsDialog>
      )}
      {foodsState === "selecting-meal" && (
        <div className="flex gap-2">
          <CheckMealDialog>
            <Button type="button">Conferir Refeição</Button>
          </CheckMealDialog>
          <Button
            type="button"
            variant="destructive"
            onClick={() => {
              clearSelection();
            }}
          >
            Limpar
          </Button>
        </div>
      )}
      <span className="flex-grow">
        <InputForm
          form={form}
          label="Pesquisar alimento:"
          name="foodName"
          placeholder="Pesquise pelo nome de um alimento"
        />
      </span>
    </span>
  );
}
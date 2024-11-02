import { InputForm } from "@/components/InputForm";
import { Tooltip } from "@/components/Tooltip";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import { FoodsDialog } from "./FoodsDialog";

interface FoodInputProps {
  form: UseFormReturn<{
    foodName: string | null;
  }>;
}

export function FoodInput({ form }: FoodInputProps) {
  return (
    <span className="flex gap-4 items-end">
      <FoodsDialog>
        <Tooltip tipText="Adicionar novo alimento ou refeição">
          <Card className="flex justify-center items-center p-4 cursor-pointer">
            <Plus className="size-6" />
          </Card>
        </Tooltip>
      </FoodsDialog>
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

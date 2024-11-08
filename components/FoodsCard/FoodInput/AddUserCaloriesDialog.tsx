import type { SelectItems } from "@/types/SelectItems";
import type { ReactNode } from "react";
import { Dialog } from "@/components/Dialog";
import { SelectForm } from "@/components/SelectForm";
import { Button } from "@/components/ui/button";
import { useFoodsToUpdateChart } from "@/hooks/use-foods-to-update-chart";
import { getDaysOfWeek } from "@/utils/getDaysOfWeek";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputForm } from "@/components/InputForm";

const message = "Esse campo é obrigatório.";
const formSchema = z.object({
  day: z.string({ message }).min(1, { message }),
  totalCalories: z.string({ message }).min(1, { message }),
  action: z.enum(["decrease", "increase"]),
});
type UserCaloriesSchema = z.infer<typeof formSchema>;

interface AddUserCaloriesDialogProps {
  children: ReactNode;
}

export function AddUserCaloriesDialog({ children }: AddUserCaloriesDialogProps) {
  const foodsToUpdateChart = useFoodsToUpdateChart();
  const foodsCalories = foodsToUpdateChart.totalCalories.toString();
  const form = useForm<UserCaloriesSchema>({
    resolver: zodResolver(formSchema),
  });
  const actionItems: SelectItems[] = [
    {
      group: {
        name: "Ação",
        items: [
          {
            text: "Aumentar calorias do dia",
            value: "increase",
          },
          {
            text: "Dimimuir calorias do dia",
            value: "decrease",
          },
        ],
      },
    },
  ];

  function daysOfWeekItems(): SelectItems[] {
    const days = getDaysOfWeek();
    const daysSelectItem: { value: string; text: string }[] = [];

    for (let i = 0; i < days.length; i++) {
      daysSelectItem.push({
        value: days[i],
        text: days[i],
      });
    }

    return [
      {
        group: {
          name: "Minha semana",
          items: daysSelectItem,
        },
      },
    ];
  }
  function onSubmit(data: UserCaloriesSchema) {
    const totalCalories = data.totalCalories.replace("kcal", "").replace("KCAL", "");

    if (!Number(totalCalories)) {
      form.setError("totalCalories", { message: "Insira um valor numérico nesse campo" });
      return;
    }
  }

  return (
    <Dialog
      title="Adicionar calorias"
      description="Selecione um dia e diminua ou aumente suas calorias ingeridas neste dia."
      trigger={children}
    >
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <SelectForm
          form={form}
          name="day"
          label="Dia da semana:"
          placeholder="Escolha uma data"
          items={daysOfWeekItems()}
          defaultValue=""
        />
        <SelectForm
          form={form}
          name="action"
          label="Ação:"
          placeholder="Deseja diminuir ou aumentar as calorias?"
          items={actionItems}
          defaultValue=""
        />
        <div className="flex gap-4 items-end justify-between">
          <div className="flex-grow">
            <InputForm
              form={form}
              name="totalCalories"
              label="Quantidade de calorias:"
              placeholder="Calorias ingeridas"
              defaultValue={foodsCalories}
              formMessage
            />
          </div>
          {form.watch("totalCalories") !== foodsCalories && (
            <Button
              variant="outline"
              onClick={() => {
                form.setValue("totalCalories", foodsCalories);
                form.clearErrors("totalCalories");
              }}
            >
              Calorias das comidas selecionadas
            </Button>
          )}
        </div>
        <Button variant={!form.formState.isValid ? "destructive" : "default"}>
          Atualizar gráfico
        </Button>
      </form>
    </Dialog>
  );
}

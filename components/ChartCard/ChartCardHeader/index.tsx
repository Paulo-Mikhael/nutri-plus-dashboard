"use client";

import { CardTitle } from "@/components/CardTitle";
import { TextCard } from "@/components/TextCard";
import { useGetUserCalories } from "@/hooks/use-get-user-calories";
import { useSetUserObjective } from "@/hooks/use-set-user-objective";
import { useUserObjective } from "@/hooks/use-user-objective";
import { userObjectivesEnum } from "@/types/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  objective: z.enum(userObjectivesEnum),
});
type UserObjectivesSchema = z.infer<typeof formSchema>;

export function ChartCardHeader() {
  const userCaloriesState = useGetUserCalories();
  const userCalories = userCaloriesState ? userCaloriesState.weeklyCalories.toFixed(0) : 0;
  const setUserObjective = useSetUserObjective();
  const userObjective = useUserObjective();
  const form = useForm<UserObjectivesSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      objective: undefined,
    },
  });
  const chartInfoMessage = `Com base no seu objetivo e sua Taxa Metabólica Basal, seu consumo semanal de calorias deve ser ${userCalories} kcal. O gráfico abaixo mostra essas ${userCalories} calorias distribuídas pela semana e suas calorias consumidas no dia, para informações vá para 'Minha Dieta'.`;
  const getChartInfoMessage =
    "Informe os dados pedidos em seu perfil para gerar um gráfico de como deve ser sua ingestão calórica diária para alcançar seu objetivo.";

  function onSubmit(data: UserObjectivesSchema) {
    setUserObjective(data.objective);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex-grow flex flex-col gap-4">
      <CardTitle
        h2="Gráfico nutricional"
        h3="Quantidade de calorias que você deve ingerir durante a semana para alcançar seu objetivo"
      />
      <span className="flex gap-4 text-xl">
        <TextCard
          className="capitalize"
          headingElement="h4"
          text={`Meu objetivo: ${userObjective ? userObjective : "Não Definido"}`}
          minWidth="min-w-[300px]"
        />
        <TextCard
          danger={userCalories === 0}
          headingElement="h5"
          text={userCalories !== 0 ? chartInfoMessage : getChartInfoMessage}
        />
      </span>
    </form>
  );
}

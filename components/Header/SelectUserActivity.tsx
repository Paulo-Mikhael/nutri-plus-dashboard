"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetUserLevel } from "@/hooks/use-set-user-level";
import type { SelectItems } from "@/types/SelectItems";
import { SelectForm } from "../SelectForm";

const userLevelEnum = ["sedentario", "leve", "moderado", "forte", "extremo"] as const;
const formSchema = z.object({
  level: z.union([z.enum(userLevelEnum), z.null()]),
});
type LevelSchema = z.infer<typeof formSchema>;

export function SelectUserActivity() {
  const setUserLevel = useSetUserLevel();
  const form = useForm<LevelSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      level: null,
    },
  });
  const items: SelectItems[] = [
    {
      group: {
        name: "Meu nível de atividade física",
        items: [
          {
            value: "sedentario",
            text: "Sedentário (Pouco ou nenhum exercício)",
          },
          {
            value: "leve",
            text: "Levemente ativo (Exercício leve ou esportes 1-3 dias/semana)",
          },
          {
            value: "moderado",
            text: "Moderadamente ativo (Exercício moderado 3-5 dias/semana)",
          },
          {
            value: "forte",
            text: "Fortemente ativo (Exercício intenso 6-7 dias/semana)",
          },
          {
            value: "extremo",
            text: "Extremamente ativo (Trabalho físico pesado ou treinamento intenso)",
          },
        ],
      },
    },
  ];

  function onSubmit(data: LevelSchema) {
    setUserLevel(data.level);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <SelectForm
        form={form}
        name="level"
        placeholder="Selecione seu ritmo de atividade física"
        items={items}
        submitOnChange
      />
    </form>
  );
}

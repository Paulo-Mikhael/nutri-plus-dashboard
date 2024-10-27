"use client";

import { CardTitle } from "@/components/CardTitle";
import { SelectForm } from "@/components/SelectForm";
import { userObjectiveItems } from "@/data/user-objective-items";
import { useSetUserObjective } from "@/hooks/use-set-user-objective";
import { userObjectivesEnum } from "@/types/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  objective: z.enum(userObjectivesEnum),
});
type UserObjectivesSchema = z.infer<typeof formSchema>;

export function SelectiveObjectiveCard() {
  const setUserObjective = useSetUserObjective();
  const form = useForm<UserObjectivesSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      objective: undefined,
    },
  });

  function onSubmit(data: UserObjectivesSchema) {
    setUserObjective(data.objective);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex-grow flex flex-col gap-4">
      <CardTitle
        h2="Gráfico nutricional"
        h3="Quantidade de calorias que você deve ingerir durante a semana para alcançar seu objetivo"
      />
      <SelectForm
        submitOnChange
        form={form}
        name="objective"
        items={userObjectiveItems}
        placeholder="Selecione seu objetivo"
      />
    </form>
  );
}

"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetUserLevel } from "@/hooks/use-set-user-level";
import { SelectForm } from "../SelectForm";
import { userLevelEnum } from "@/types/enums";
import { userLevelItems } from "@/data/user-level-items";

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

  function onSubmit(data: LevelSchema) {
    setUserLevel(data.level);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <SelectForm
        form={form}
        name="level"
        placeholder="Selecione seu ritmo de atividade física"
        items={userLevelItems}
        submitOnChange
      />
    </form>
  );
}

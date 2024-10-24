"use client";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "../ui/select";
import { Form, FormField, FormItem } from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useSetUserLevel } from "@/hooks/use-set-user-level";

const userLevelEnum = ["sedentario", "leve", "moderado", "forte", "extremo"] as const;
const formSchema = z.object({
  level: z.union([z.enum(userLevelEnum), z.null()]),
});
type LevelSchema = z.infer<typeof formSchema>;

export function SelectUserActivity() {
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  submitButtonRef.current?.click();
                }}
                defaultValue={field.value ? String(field.value) : undefined}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione seu ritmo de atividade física" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Meu nível de atividade física</SelectLabel>
                    <SelectItem value="sedentario">
                      Sedentário (Pouco ou nenhum exercício)
                    </SelectItem>
                    <SelectItem value="leve">
                      Levemente ativo (Exercício leve ou esportes 1-3 dias/semana)
                    </SelectItem>
                    <SelectItem value="moderado">
                      Moderadamente ativo (Exercício moderado 3-5 dias/semana)
                    </SelectItem>
                    <SelectItem value="forte">
                      Fortemente ativo (Exercício intenso 6-7 dias/semana)
                    </SelectItem>
                    <SelectItem value="extremo">
                      Extremamente ativo (Trabalho físico pesado ou treinamento intenso)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <button ref={submitButtonRef} type="submit" hidden />
      </form>
    </Form>
  );
}

"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputForm } from "./InputForm";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  height: z.string().min(1),
  weight: z.string().min(1),
});
export type ImcSchema = z.infer<typeof formSchema>;

export function ImcForm() {
  const form = useForm<ImcSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: "",
      weight: "",
    },
  });

  function handleSubmit(values: ImcSchema) {
    alert(values.height);
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-2">
      <InputForm
        placeholder="Insira sua altura"
        label="Altura:"
        form={form}
        name="height"
      />
      <InputForm
        placeholder="Insira seu peso"
        label="Peso:"
        form={form}
        name="weight"
      />
    </form>
  );
}

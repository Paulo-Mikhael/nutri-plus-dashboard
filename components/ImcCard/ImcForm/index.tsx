"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputForm } from "./InputForm";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/Tooltip";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const formSchema = z.object({
  height: z.string().min(1),
  weight: z.string().min(1),
});
export type ImcSchema = z.infer<typeof formSchema>;
type UserImcStatus = "Indefinido" | "Baixo Peso" | "Normal" | "Sobrepeso" | "Obesidade";

export function ImcForm() {
  const form = useForm<ImcSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: "",
      weight: "",
    },
  });
  const [userImc, setUserImc] = useState<number>(0);
  const [userImcStatus, setUserImcStatus] = useState<UserImcStatus>("Indefinido");

  function takeUserImcStatus(imc: number): UserImcStatus {
    if (imc < 18.5) {
      return "Baixo Peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Normal";
    } else if (imc >= 25 && imc < 30) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  }

  function handleSubmit(values: ImcSchema) {
    const weight = values.weight.replace(",", ".").replace("kg", "").replace(" ", "");
    const height = values.height.replace(",", ".").replace("m", "").replace(" ", "");

    if (!Number(weight) || !Number(height)) {
      form.setValue("weight", "");
      form.setValue("height", "");
      setUserImc(0);
      setUserImcStatus("Indefinido");
      return;
    }

    const numWeight = Number(weight);
    const numHeight = Number(height);
    const formatWeight = `${numWeight.toFixed(2)} kg`;
    const formatHeight = `${numHeight.toFixed(2)} m`;
    const userImc = numWeight / (numHeight * numHeight);

    if (numHeight > 3) {
      form.setValue("weight", formatWeight);
      form.setValue("height", "");
      setUserImc(0);
      setUserImcStatus("Indefinido");
      return;
    }

    form.setValue("weight", formatWeight);
    form.setValue("height", formatHeight);
    setUserImc(userImc);
    setUserImcStatus(takeUserImcStatus(userImc));
  }

  return (
    <div className="flex gap-4">
      <Tooltip tipText="IMC atual com base no seu peso e altura">
        <Card className="p-5 flex flex-col gap-2 justify-center items-center h-full">
          <h4 className="text-3xl">{userImc.toFixed(2)}</h4>
          <h5 className="text-center">{userImcStatus}</h5>
        </Card>
      </Tooltip>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <InputForm placeholder="Insira sua altura" label="Altura:" form={form} name="height" />
          <InputForm placeholder="Insira seu peso" label="Peso:" form={form} name="weight" />
        </div>
        <Button variant="outline">Enviar</Button>
      </form>
    </div>
  );
}

"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputForm } from "./InputForm";
import { Button } from "@/components/ui/button";
import { SquareInfoCard } from "@/components/SquareInfoCard";
import type { UserImcStatus } from "@/types/UserImcStatus";
import { useUserImc } from "@/hooks/use-user-imc";
import { useSetUserImc } from "@/hooks/use-set-user-imc";
import { useUserStatus } from "@/hooks/use-user-status";
import { useSetUserImcStatus } from "@/hooks/use-set-user-imc-status";
import { useSetUserWeight } from "@/hooks/use-set-user-weight";
import { useSetUserHeight } from "@/hooks/use-set-user-height";

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
  const userImc = useUserImc();
  const setUserImc = useSetUserImc();
  const userImcStatus = useUserStatus();
  const setUserImcStatus = useSetUserImcStatus();
  const setUserWeight = useSetUserWeight();
  const setUserHeight = useSetUserHeight();

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

      setUserHeight("0");
      setUserWeight("0");
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

    setUserHeight(height);
    setUserWeight(weight);
    setUserImc(parseFloat(userImc.toFixed(2)));
    setUserImcStatus(takeUserImcStatus(userImc));
  }

  return (
    <div className="flex gap-4">
      <SquareInfoCard
        tipText="Seu IMC indica se você está numa faixa de peso saudável, calculado usando o peso e altura fornecidos. (p / a^2)"
        h4={String(userImc)}
        h5={userImcStatus}
      />
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <InputForm placeholder="Insira sua altura" label="Altura:" form={form} name="height" />
          <InputForm placeholder="Insira seu peso" label="Peso:" form={form} name="weight" />
        </div>
        <Button variant="default">Enviar</Button>
      </form>
    </div>
  );
}

"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { submitHeightWeight } from "@/utils/submitHeightWeight";
import { formatHeight } from "@/utils/formatHeight";
import { formatWeight } from "@/utils/formatWeight";
import { useSetUserWeight } from "@/hooks/use-set-user-weight";
import { useSetUserHeight } from "@/hooks/use-set-user-height";
import { useUserHeight } from "@/hooks/use-user-height";
import { useUserWeight } from "@/hooks/use-user-weight";
import { Button } from "@/components/ui/button";
import { SquareInfoCard } from "@/components/SquareInfoCard";
import { InputForm } from "@/components/InputForm";
import { useUserImcData } from "@/hooks/use-user-imc-data";

const formSchema = z.object({
  height: z.string().min(1),
  weight: z.string().min(1),
});
type ImcSchema = z.infer<typeof formSchema>;

export function ImcForm() {
  const form = useForm<ImcSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: "",
      weight: "",
    },
  });
  const userImcData = useUserImcData();
  const userHeight = userImcData.height;
  const userWeight = userImcData.weight;
  const getUserImc = userImcData.getImc();
  const setUserWeight = useSetUserWeight();
  const setUserHeight = useSetUserHeight();

  function handleSubmit(values: ImcSchema) {
    const submitHeightWeightReturn = submitHeightWeight(values.height, values.weight);
    const submitStatus = submitHeightWeightReturn.status;
    const submitValues = submitHeightWeightReturn.values;

    if (submitStatus === "high-height" || submitStatus === "invalid-height") {
      form.setValue("height", "");
      setUserHeight("");
      return;
    }

    if (submitStatus === "invalid-weight") {
      form.setValue("weight", "");
      setUserWeight("");
      return;
    }

    if (!submitValues || submitStatus !== "success") return;

    form.setValue("weight", submitValues.formatedWeight);
    form.setValue("height", submitValues.formatedHeight);

    setUserHeight(String(submitValues.height));
    setUserWeight(String(submitValues.weight));
  }

  return (
    <div className="flex gap-4">
      <SquareInfoCard
        tipText="Seu IMC indica se você está numa faixa de peso saudável, calculado usando o peso e altura fornecidos. (p / a^2)"
        h4={String(getUserImc.value)}
        h5={String(getUserImc.status)}
      />
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <InputForm
            defaultValue={userHeight ? formatHeight(userHeight) : undefined}
            placeholder="Insira sua altura"
            label="Altura:"
            form={form}
            name="height"
          />
          <InputForm
            defaultValue={userWeight ? formatWeight(userWeight) : undefined}
            placeholder="Insira seu peso"
            label="Peso:"
            form={form}
            name="weight"
          />
        </div>
        <Button variant="default">Calcular IMC</Button>
      </form>
    </div>
  );
}

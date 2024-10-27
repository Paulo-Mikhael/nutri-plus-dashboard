"use client";

import { userGenderItems } from "@/data/user-gender-items";
import { userLevelItems } from "@/data/user-level-items";
import { userObjectiveItems } from "@/data/user-objective-items";
import { InputForm } from "../InputForm";
import { SelectForm } from "../SelectForm";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import { useUserHeight } from "@/hooks/use-user-height";
import { useUserWeight } from "@/hooks/use-user-weight";
import { useUserAge } from "@/hooks/use-user-age";

interface DialogInfosFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}

export function DialogInfosForm<T extends FieldValues>({ form }: DialogInfosFormProps<T>) {
  const userHeight = useUserHeight();
  const userWeight = useUserWeight();
  const userAge = useUserAge();

  return (
    <div className="max-h-96 overflow-y-scroll scrollbar-none flex flex-col gap-4 p-1">
      <InputForm
        defaultValue={userAge ? String(userAge) : ""}
        formMessage
        form={form}
        name="age"
        placeholder="Insira sua idade"
        label="Idade:"
      />
      <SelectForm
        label="Sexo:"
        form={form}
        name="gender"
        items={userGenderItems}
        placeholder="Selecione seu gênero:"
      />
      <InputForm
        defaultValue={userHeight !== "" ? `${userHeight} m` : ""}
        formMessage
        form={form}
        name="height"
        placeholder="Insira sua altura"
        label="Altura:"
      />
      <InputForm
        defaultValue={userWeight !== "" ? `${userWeight} kg` : ""}
        formMessage
        form={form}
        name="weight"
        placeholder="Insira seu peso"
        label="Peso:"
      />
      <SelectForm
        label="Nível de atividade física:"
        form={form}
        name="level"
        items={userLevelItems}
        placeholder="Selecione seu nível de atividade física:"
      />
      <SelectForm
        label="Objetivo:"
        form={form}
        name="objective"
        items={userObjectiveItems}
        placeholder="Selecione seu objetivo"
      />
    </div>
  );
}

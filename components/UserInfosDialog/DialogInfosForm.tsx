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
import { useUserLevel } from "@/hooks/use-user-level";
import { useUserObjective } from "@/hooks/use-user-objective";
import { useUserGender } from "@/hooks/use-user-gender";
import { formatHeight } from "@/utils/formatHeight";
import { formatWeight } from "@/utils/formatWeight";

interface DialogInfosFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}

export function DialogInfosForm<T extends FieldValues>({ form }: DialogInfosFormProps<T>) {
  const userHeight = useUserHeight();
  const userWeight = useUserWeight();
  const userLevel = useUserLevel();
  const userObjective = useUserObjective();
  const userGender = useUserGender();
  const userAge = useUserAge();

  return (
    <div className="max-h-96 overflow-y-scroll scrollbar-none flex flex-col gap-4 p-1">
      <InputForm
        defaultValue={userAge ? String(userAge) : undefined}
        formMessage
        form={form}
        name="age"
        placeholder="Insira sua idade"
        label="Idade:"
      />
      <SelectForm
        defaultValue={userGender ? String(userGender) : undefined}
        label="Sexo:"
        form={form}
        name="gender"
        items={userGenderItems}
        placeholder="Selecione seu gênero:"
      />
      <InputForm
        defaultValue={userHeight !== "" ? formatHeight(userHeight) : undefined}
        formMessage
        form={form}
        name="height"
        placeholder="Insira sua altura"
        label="Altura:"
      />
      <InputForm
        defaultValue={userWeight !== "" ? formatWeight(userWeight) : undefined}
        formMessage
        form={form}
        name="weight"
        placeholder="Insira seu peso"
        label="Peso:"
      />
      <SelectForm
        defaultValue={userLevel ? String(userLevel) : undefined}
        label="Nível de atividade física:"
        form={form}
        name="level"
        items={userLevelItems}
        placeholder="Selecione seu nível de atividade física:"
      />
      <SelectForm
        defaultValue={userObjective ? String(userObjective) : undefined}
        label="Objetivo:"
        form={form}
        name="objective"
        items={userObjectiveItems}
        placeholder="Selecione seu objetivo"
      />
    </div>
  );
}

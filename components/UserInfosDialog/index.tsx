"use client";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSetUserGender } from "@/hooks/use-set-user-gender";
import { useSetUserAge } from "@/hooks/use-set-user-age";
import { userLevelEnum, userObjectivesEnum } from "@/types/enums";
import { DialogInfosForm } from "./DialogInfosForm";
import { useSetUserLevel } from "@/hooks/use-set-user-level";
import { useSetUserObjective } from "@/hooks/use-set-user-objective";
import { useSetUserHeight } from "@/hooks/use-set-user-height";
import { useSetUserWeight } from "@/hooks/use-set-user-weight";
import { submitHeightWeight } from "@/utils/submitHeightWeight";
import { Dialog } from "../Dialog";

const requiredMessage = "Esse campo é obrigatório";
const formSchema = z.object({
  age: z.string({ message: requiredMessage }).min(1, { message: requiredMessage }),
  gender: z.enum(["man", "woman"], { message: requiredMessage }),
  height: z.string({ message: requiredMessage }).min(1, { message: requiredMessage }),
  weight: z.string({ message: requiredMessage }).min(1, { message: requiredMessage }),
  level: z.enum(userLevelEnum, { message: requiredMessage }),
  objective: z.enum(userObjectivesEnum, { message: requiredMessage }),
});
type UserInfosSchema = z.infer<typeof formSchema>;

export function UserInfosDialog({ children }: { children: ReactNode }) {
  const form = useForm<UserInfosSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      gender: undefined,
      height: "",
      weight: "",
      level: undefined,
      objective: undefined,
    },
  });
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const setUserAge = useSetUserAge();
  const setUserGender = useSetUserGender();
  const setUserLevel = useSetUserLevel();
  const setUserObjective = useSetUserObjective();
  const setUserHeight = useSetUserHeight();
  const setUserWeight = useSetUserWeight();

  function onSubmit(data: UserInfosSchema) {
    const userAge = data.age;
    const submitHeightWeightReturn = submitHeightWeight(data.height, data.weight);
    const submitStatus = submitHeightWeightReturn.status;
    const submitValues = submitHeightWeightReturn.values;

    if (!Number(userAge)) {
      form.setValue("age", "");
      return;
    }
    if (submitStatus === "high-height" || submitStatus === "invalid-height") {
      form.setValue("height", "");
    }
    if (submitStatus === "invalid-weight") {
      form.setValue("weight", "");
    }

    if (!submitValues) return;

    setUserAge(Number(userAge));
    setUserGender(data.gender);
    setUserLevel(data.level);
    setUserObjective(data.objective);
    setUserHeight(String(submitValues.height));
    setUserWeight(String(submitValues.weight));

    closeButtonRef.current?.click();
  }

  return (
    <Dialog
      title="Informações Pessoais"
      description="Insira alguns dados sobre você para obter mais informações em seu dashboard."
      asChild
      trigger={children}
      maxWidth="max-w-96"
    >
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <DialogInfosForm form={form} />
        <DialogFooter className="sm:justify-start">
          <Button type="submit" variant={!form.formState.isValid ? "destructive" : "default"}>
            Salvar
          </Button>
          <DialogClose>
            <button hidden type="button" ref={closeButtonRef} />
          </DialogClose>
        </DialogFooter>
      </form>
    </Dialog>
  );
}

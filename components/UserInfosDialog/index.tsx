"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSetUserGender } from "@/hooks/use-set-user-gender";
import { useSetUserAge } from "@/hooks/use-set-user-age";
import { userLevelEnum, userObjectivesEnum } from "@/types/enums";
import { DialogInfosForm } from "./DialogInfosForm";

const formSchema = z.object({
  age: z.string().min(1, { message: "Esse campo é obrigatório" }),
  gender: z.enum(["man", "woman"], { message: "Selecione seu sexo" }),
  height: z.string().min(1, { message: "Esse campo é obrigatório" }),
  weight: z.string().min(1, { message: "Esse campo é obrigatório" }),
  level: z.enum(userLevelEnum),
  objective: z.enum(userObjectivesEnum),
});
type UserInfosSchema = z.infer<typeof formSchema>;

export function UserInfosDialog({ children }: { children: ReactNode }) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const setUserGender = useSetUserGender();
  const setUserAge = useSetUserAge();
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

  function onSubmit(data: UserInfosSchema) {
    const userAge = data.age;

    if (!Number(userAge)) {
      form.setValue("age", "");
      return;
    }

    setUserAge(Number(data.age));
    setUserGender(data.gender);
    closeButtonRef.current?.click();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Informações Pessoais</DialogTitle>
            <DialogDescription>
              Insira seu gênero e idade para personalizar ainda mais seu dashboard.
            </DialogDescription>
          </DialogHeader>
          <DialogInfosForm form={form} />
          <DialogFooter className="sm:justify-start">
            <Button type="submit" variant="secondary">
              Salvar
            </Button>
            <DialogClose>
              <button hidden type="button" ref={closeButtonRef} />
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

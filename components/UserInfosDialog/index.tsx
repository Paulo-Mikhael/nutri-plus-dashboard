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
import { InputForm } from "../InputForm";
import type { SelectItems } from "@/types/SelectItems";
import { SelectForm } from "../SelectForm";
import { useSetUserGender } from "@/hooks/use-set-user-gender";
import { useSetUserAge } from "@/hooks/use-set-user-age";

const formSchema = z.object({
  age: z.string().min(1, { message: "Este campo é obrigatório" }),
  gender: z.enum(["man", "woman"], { message: "Selecione seu sexo" }),
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
    },
  });
  const items: SelectItems[] = [
    {
      group: {
        name: "Sexo",
        items: [
          {
            text: "Masculino",
            value: "man",
          },
          {
            text: "Feminino",
            value: "woman",
          },
        ],
      },
    },
  ];

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
          <InputForm
            formMessage
            form={form}
            name="age"
            placeholder="Insira sua idade"
            label="Idade:"
          />
          <SelectForm form={form} name="gender" items={items} placeholder="Selecione seu gênero:" />
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

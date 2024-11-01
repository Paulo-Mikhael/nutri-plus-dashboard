"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputForm } from "../InputForm";
import { FoodsList } from "./FoodsList";

const formSchema = z.object({
  foodName: z.string().min(1).nullable(),
});
type SearchShema = z.infer<typeof formSchema>;

export function FoodsCard() {
  const form = useForm<SearchShema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
    },
  });
  const foodName = form.watch("foodName");

  return (
    <form
      onSubmit={form.handleSubmit((data) => console.log(data.foodName))}
      className="w-full flex flex-col gap-4"
    >
      <InputForm
        form={form}
        label="Pesquisar alimento:"
        name="foodName"
        placeholder="Pesquise pelo nome de um alimento"
      />
      <FoodsList searchedName={foodName ? foodName : ""} />
    </form>
  );
}

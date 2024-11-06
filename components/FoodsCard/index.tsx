"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FoodsList } from "./FoodsList";
import { FoodInput } from "./FoodInput";
import { useFilteredFoodsByName } from "@/hooks/use-filtered-foods";

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
  const filteredFoods = useFilteredFoodsByName(foodName ? foodName : "");

  return (
    <div className="w-full flex flex-col gap-4">
      <FoodInput form={form} />
      <FoodsList nullListMessage="Sem alimentos com esse nome" foods={filteredFoods} />
      {filteredFoods.length > 0 && (
        <h3>
          Nutrientes de 100 gramas dos alimentos acima. Fonte:{" "}
          <a
            className="underline text-cyan-500"
            target="_blank"
            href="https://fdc.nal.usda.gov/food-search?type=Foundation&query="
          >
            USDA
          </a>
        </h3>
      )}
    </div>
  );
}

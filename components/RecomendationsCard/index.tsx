"use client";

import { useUserStore } from "@/hooks/state/store";
import { CardTitle } from "../CardTitle";
import { SquareInfoCard } from "../SquareInfoCard";

export function RecomendationsCard() {
  const userWeight = useUserStore((state) => state.weight);
  const userWaterRecomendation = (Number(userWeight) * 35) / 1000;

  return (
    <article className="h-full w-full flex flex-col gap-3">
      <CardTitle
        h2="Recomendações"
        h3="Porções recomendadas a se consumir diáriamente baseados no seu IMC"
      />
      <div className="flex gap-2">
        <SquareInfoCard
          h4={`${userWaterRecomendation.toFixed(1)} L`}
          h5="Consumo de água"
          titleH5
          tipText="De acordo com seu peso e nível físico, seu consumo de água diário deve ser esse. ((p * 30) / 1000)"
        />
      </div>
    </article>
  );
}

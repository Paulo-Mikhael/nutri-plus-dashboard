"use client";

import { useUserStore } from "@/hooks/state/store";
import { CardTitle } from "../CardTitle";
import { SquareInfoCard } from "../SquareInfoCard";
import { useEffect } from "react";

export function RecomendationsCard() {
  const userLevel = useUserStore((state) => state.level);
  const userWeight = useUserStore((state) => state.weight);
  const userWaterRecommendation = useUserStore((state) => state.getUserWaterRecommendation);

  useEffect(() => {
    userLevel?.includes("");
    userWeight?.includes("");
  });

  return (
    <article className="h-full w-full flex flex-col gap-3">
      <CardTitle
        h2="Recomendações"
        h3="De acordo com seus dados, você deve consumir diáriamente:"
      />
      <div className="flex gap-2">
        <SquareInfoCard
          h4={`${userWaterRecommendation().toFixed(1)} L`}
          h5="Consumo de Água"
          titleH5
          tipText="De acordo com seu peso e nível físico, seu consumo de água diário deve ser esse. ((p * 30) / 1000)"
        />
      </div>
    </article>
  );
}

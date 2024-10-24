"use client";

import { CardTitle } from "../CardTitle";
import { SquareInfoCard } from "../SquareInfoCard";
import { useGetUserWaterRecommendation } from "@/hooks/use-get-user-water-recommedation";

export function RecomendationsCard() {
  const userWaterRecommendation = useGetUserWaterRecommendation();

  return (
    <article className="h-full w-full flex flex-col gap-3 overflow-y-scroll max-lg:overflow-hidden max-lg:h-auto">
      <CardTitle
        h2="Recomendações"
        h3="De acordo com seus dados, você deve consumir diáriamente:"
      />
      <div className="flex justify-between gap-2">
        <SquareInfoCard
          h4={`${userWaterRecommendation().toFixed(1)} L`}
          h5="Consumo de Água"
          titleH5
          tipText="De acordo com seu peso e nível físico, seu consumo de água diário deve ser esse. ((p * 35) / 1000)"
        />
        <span className="h-full flex-grow max-w-[73%]">
          <SquareInfoCard
            h4={`${userWaterRecommendation().toFixed(1)} L`}
            h5="Taxa Metabólica Basal"
            h6="Sua Taxa Metábolica Basal (TMB), indica a quantidade de calorias que seu corpo consome diáriamente mesmo em repouso, ou seja, a quantidade de calorias no seu corpo não pode ser inferior a esse valor"
            titleH5
            tipText="De acordo com seu peso e nível físico, seu consumo de água diário deve ser esse. ((p * 35) / 1000)"
          />
        </span>
      </div>
    </article>
  );
}

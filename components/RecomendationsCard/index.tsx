"use client";

import { useGetUserBMR } from "@/hooks/use-get-user-bmr";
import { CardTitle } from "../CardTitle";
import { SquareInfoCard } from "../SquareInfoCard";
import { useGetUserWaterRecommendation } from "@/hooks/use-get-user-water-recommedation";

export function RecomendationsCard() {
  const userWaterRecommendation = useGetUserWaterRecommendation();
  const userBMRReturn = useGetUserBMR();
  const userBMR = userBMRReturn.get();
  const userGender = userBMRReturn.gender;

  const maleUserInfoMessage =
    "Sua taxa metabólica basal é calculada usando seu peso, altura, idade e sexo. (88,362 + (13,397 x p) + (4,799 x (a * 100)) - (5,677 x i))";
  const femaleUserInfoMessage =
    "Sua taxa metabólica basal é calculada usando seu peso, altura, idade e sexo. (447,593 + (9,247 x p) + (3,098 x (a * 100)) - (4,330 x i))";
  const noGenderUserInfoMessage =
    "Para calcular sua taxa metabólica basal, informe seu IMC e os preencha os dados em seu perfil.";
  const actualUserInfoMessage = userBMR
    ? userGender === "man"
      ? maleUserInfoMessage
      : femaleUserInfoMessage
    : noGenderUserInfoMessage;

  return (
    <article className="h-full w-full flex flex-col gap-3 overflow-y-scroll max-lg:overflow-hidden max-lg:h-auto">
      <CardTitle
        h2="Recomendações"
        h3="De acordo com seus dados, você deve consumir diáriamente:"
      />
      <div className="flex justify-between gap-2">
        <SquareInfoCard
          h4={`${userWaterRecommendation()} L`}
          h5="Consumo de Água"
          titleH5
          tipText="De acordo com seu peso e nível físico, seu consumo de água diário deve ser esse. ((p * 35) / 1000)"
        />
        <span
          className="h-full flex-grow max-w-[73%]"
          onClick={() => {
            if (!userBMR) {
              alert(
                "Para calcular sua taxa metabólica basal, informe seu IMC e preencha os dados em seu perfil"
              );
            }
          }}
        >
          <SquareInfoCard
            h4={`${userBMR ? userBMR : 0.0} kcal`}
            h5="Taxa Metabólica Basal"
            h6="Sua Taxa Metábolica Basal (TMB), indica a quantidade de calorias que seu corpo consome diáriamente mesmo em repouso, ou seja, a quantidade de calorias no seu corpo não pode ser inferior a esse valor"
            titleH5
            tipText={actualUserInfoMessage}
          />
        </span>
      </div>
    </article>
  );
}

import { CardTitle } from "../CardTitle";
import { SquareInfoCard } from "../SquareInfoCard";

export function RecomendationsCard() {
  return (
    <article className="h-full w-full flex flex-col gap-3">
      <CardTitle
        h2="Recomendações"
        h3="Porções recomendadas a se consumir diáriamente baseados no seu IMC"
      />
      <div>
        <SquareInfoCard h4="2.1" h5="Consumo de água" titleH5 tipText="Consumo de água" />
      </div>
    </article>
  );
}

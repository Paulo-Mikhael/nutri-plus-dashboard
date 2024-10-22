import { CardTitle } from "../CardTitle";
import { ImcForm } from "./ImcForm";

export function ImcCard() {
  return (
    <article className="flex flex-col gap-2 items-start max-w-96">
      <CardTitle
        h2="Seu IMC"
        h3="Informe seu peso e altura para obter o índice de massa corporal"
      />
      <ImcForm />
    </article>
  );
}

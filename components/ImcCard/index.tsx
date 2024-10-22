import { CardTitle } from "../CardTitle";
import { ImcForm } from "./ImcForm";

export function ImcCard() {
  return (
    <article className="w-2/4 flex flex-col gap-2 items-start max-lg:flex-grow max-lg:w-full">
      <CardTitle
        h2="Seu IMC"
        h3="Informe seu peso e altura para obter o índice de massa corporal"
      />
      <ImcForm />
    </article>
  );
}

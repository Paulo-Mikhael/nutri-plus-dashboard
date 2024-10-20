import { CardTitle } from "../CardTitle";
import { Tooltip } from "../Tooltip";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

export function ImcCard() {
  return (
    <article className="flex flex-col gap-2 items-start max-w-96">
      <CardTitle
        h2="Seu IMC"
        h3="Informe seu peso e altura para obter o índice de massa corporal"
      />
      <div className="flex gap-4 items-center">
        <Tooltip tipText="IMC atual com base no seu peso (em quilos) e altura (em metros)">
          <Card className="p-5 flex">
            <h4 className="text-3xl">19</h4>
          </Card>
        </Tooltip>
        <div className="flex gap-2">
          <div>
            <label htmlFor="user-height">Altura:</label>
            <Input id="user-height" placeholder="Insira sua altura" />
          </div>
          <div>
            <label htmlFor="user-height">Peso:</label>
            <Input id="user-height" placeholder="Insira seu peso" />
          </div>
        </div>
      </div>
    </article>
  );
}

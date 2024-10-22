import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "../ui/select";

export function SelectUserActivity() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione seu ritmo de atividade física" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="sedentario">Sedentário (Pouco ou nenhum exercício)</SelectItem>
        <SelectItem value="leve">
          Levemente ativo (Exercício leve ou esportes 1-3 dias/semana)
        </SelectItem>
        <SelectItem value="moderado">
          Moderadamente ativo (Exercício moderado 3-5 dias/semana)
        </SelectItem>
        <SelectItem value="forte">Fortemente ativo (Exercício intenso 6-7 dias/semana)</SelectItem>
        <SelectItem value="extremo">
          Extremamente ativo (Trabalho físico pesado ou treinamento intenso)
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

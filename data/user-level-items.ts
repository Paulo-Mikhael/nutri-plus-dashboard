import type { SelectItems } from "@/types/SelectItems";

export const userLevelItems: SelectItems[] = [
  {
    group: {
      name: "Meu nível de atividade física",
      items: [
        {
          value: "sedentario",
          text: "Sedentário (Pouco ou nenhum exercício)",
        },
        {
          value: "leve",
          text: "Levemente ativo (Exercício leve ou esportes 1-3 dias/semana)",
        },
        {
          value: "moderado",
          text: "Moderadamente ativo (Exercício moderado 3-5 dias/semana)",
        },
        {
          value: "forte",
          text: "Fortemente ativo (Exercício intenso 6-7 dias/semana)",
        },
        {
          value: "extremo",
          text: "Extremamente ativo (Trabalho físico pesado ou treinamento intenso)",
        },
      ],
    },
  },
];

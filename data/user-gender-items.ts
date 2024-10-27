import type { SelectItems } from "@/types/SelectItems";

export const userGenderItems: SelectItems[] = [
  {
    group: {
      name: "Sexo",
      items: [
        {
          text: "Masculino",
          value: "man",
        },
        {
          text: "Feminino",
          value: "woman",
        },
      ],
    },
  },
];

import type { UserImcStatus } from "@/types/UserImcStatus";
import type { UserLevel } from "@/types/UserLevel";
import { create } from "zustand";

type UserState = {
  imc: number;
  height: string;
  weight: string;
  status: UserImcStatus;
  level: UserLevel;
};
type UserActions = {
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setUserImc: (imc: number) => void;
  setUserImcStatus: (status: UserImcStatus) => void;
  setUserLevel: (level: UserLevel) => void;
  getUserWaterRecommendation: () => number;
};

export const useUserStore = create<UserState & UserActions>((set, get) => ({
  imc: 0,
  height: "",
  weight: "",
  status: "Indefinido",
  level: null,
  setHeight: (height) => set(() => ({ height })),
  setWeight: (weight) => set(() => ({ weight })),
  setUserImc: (imc) => set(() => ({ imc })),
  setUserImcStatus: (status) => set(() => ({ status })),
  setUserLevel: (level) => set(() => ({ level })),
  getUserWaterRecommendation: () => {
    const waterPerWeightCalculation = (Number(get().weight) * 35) / 1000;
    const userLevel = get().level;

    if (!userLevel) return waterPerWeightCalculation;

    if (userLevel === "sedentario") {
      return waterPerWeightCalculation;
    } else if (userLevel === "leve") {
      return waterPerWeightCalculation + 0.4;
    } else if (userLevel === "moderado") {
      return waterPerWeightCalculation + 0.8;
    } else if (userLevel === "forte") {
      return waterPerWeightCalculation + 1.2;
    } else {
      return waterPerWeightCalculation + 1.5;
    }
  },
}));

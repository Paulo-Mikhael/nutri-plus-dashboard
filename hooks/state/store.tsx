import type { UserImcStatus } from "@/types/UserImcStatus";
import type { UserLevel } from "@/types/UserLevel";
import { create } from "zustand";
import { increaseWaterRecommendationByLevel } from "./functions/increaseWaterRecommendationByLevel";

type UserState = {
  imc: number;
  height: string;
  weight: string;
  status: UserImcStatus;
  level: UserLevel;
  idade: number | null;
  gender: "male" | "woman" | null;
};
type UserActions = {
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setUserImc: (imc: number) => void;
  setUserImcStatus: (status: UserImcStatus) => void;
  setUserLevel: (level: UserLevel) => void;
  getUserWaterRecommendation: () => number;
  getUserBMR: () => void;
};

export const useUserStore = create<UserState & UserActions>((set, get) => ({
  imc: 0,
  height: "",
  weight: "",
  status: "Indefinido",
  level: null,
  idade: null,
  gender: null,
  setHeight: (height) => set(() => ({ height })),
  setWeight: (weight) => set(() => ({ weight })),
  setUserImc: (imc) => set(() => ({ imc })),
  setUserImcStatus: (status) => set(() => ({ status })),
  setUserLevel: (level) => set(() => ({ level })),
  getUserWaterRecommendation: () => {
    const waterPerWeightCalculation = (Number(get().weight) * 35) / 1000;
    const userLevel = get().level;

    if (!userLevel) return waterPerWeightCalculation;

    return increaseWaterRecommendationByLevel(userLevel, waterPerWeightCalculation);
  },
  getUserBMR: () => {},
}));

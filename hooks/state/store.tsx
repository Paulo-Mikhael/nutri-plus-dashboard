import type { UserImcStatus } from "@/types/UserImcStatus";
import type { UserLevel } from "@/types/UserLevel";
import { create } from "zustand";
import { increaseWaterRecommendationByLevel } from "./functions/increaseWaterRecommendationByLevel";
import type { UserObjectives } from "@/types/UserObjectives";

type UserState = {
  imc: number;
  height: string;
  weight: string;
  status: UserImcStatus;
  level: UserLevel;
  age: number | null;
  gender: "man" | "woman" | null;
  objective: UserObjectives;
};
type UserActions = {
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setUserImc: (imc: number) => void;
  setUserImcStatus: (status: UserImcStatus) => void;
  setUserLevel: (level: UserLevel) => void;
  setUserAge: (age: number) => void;
  setUserGender: (gender: "man" | "woman") => void;
  setUserObjective: (objective: UserObjectives) => void;
  getUserWaterRecommendation: () => number;
  getUserBMR: () => number | null;
};

export const useUserStore = create<UserState & UserActions>((set, get) => ({
  imc: 0,
  height: "",
  weight: "",
  status: "Indefinido",
  level: null,
  age: null,
  gender: null,
  objective: null,
  setHeight: (height) => set(() => ({ height })),
  setWeight: (weight) => set(() => ({ weight })),
  setUserImc: (imc) => set(() => ({ imc })),
  setUserImcStatus: (status) => set(() => ({ status })),
  setUserLevel: (level) => set(() => ({ level })),
  setUserAge: (age) => set(() => ({ age })),
  setUserGender: (gender) => set(() => ({ gender })),
  setUserObjective: (objective) => set(() => ({ objective })),
  getUserWaterRecommendation: () => {
    const waterPerWeightCalculation = (Number(get().weight) * 35) / 1000;
    const userLevel = get().level;

    if (!userLevel) return waterPerWeightCalculation;

    return increaseWaterRecommendationByLevel(userLevel, waterPerWeightCalculation);
  },
  getUserBMR: () => {
    const userGender = get().gender;
    const userAge = get().age;
    const userWeight = get().weight;
    const userHeight = get().height;

    if (!userGender || !userAge) return null;
    if (!Number(userWeight) || !Number(userHeight)) return null;

    const numUserWeight = Number(userWeight);
    const numUserHeight = Number(userHeight);

    const maleUserBMR =
      88.362 + 13.397 * numUserWeight + 4.799 * numUserHeight * 100 - 5.677 * userAge;
    const femaleUserBMR =
      447.593 + 9.247 * numUserWeight + 3.098 * numUserHeight * 100 - 4.33 * userAge;

    return userGender === "man" ? maleUserBMR : femaleUserBMR;
  },
}));

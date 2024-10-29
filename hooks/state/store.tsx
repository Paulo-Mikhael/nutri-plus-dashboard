import type { UserLevel } from "@/types/UserLevel";
import type { UserObjectives } from "@/types/UserObjectives";
import type { GetSemanalCaloriesReturn } from "@/types/GetSemanalCaloriesReturn";
import type { GetImcReturn } from "@/types/GetImcReturn";
import { create } from "zustand";
import { increaseWaterRecommendationByLevel } from "./functions/increaseWaterRecommendationByLevel";
import { takeImcStatus } from "@/utils/takeImcStatus";
import { getUserSemanalCalories } from "@/utils/getUserSemanalCalories";

type UserState = {
  height: string;
  weight: string;
  level: UserLevel;
  age: number | null;
  gender: "man" | "woman" | null;
  objective: UserObjectives;
};
type UserActions = {
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setUserLevel: (level: UserLevel) => void;
  setUserAge: (age: number) => void;
  setUserGender: (gender: "man" | "woman") => void;
  setUserObjective: (objective: UserObjectives) => void;
  getUserImc: () => GetImcReturn;
  getUserWaterRecommendation: () => number;
  getUserBMR: () => number | null;
  getUserSemanalCalories: () => GetSemanalCaloriesReturn | null;
};

export const useUserStore = create<UserState & UserActions>((set, get) => ({
  height: "",
  weight: "",
  level: null,
  age: null,
  gender: null,
  objective: null,
  setHeight: (height) => set(() => ({ height })),
  setWeight: (weight) => set(() => ({ weight })),
  setUserLevel: (level) => set(() => ({ level })),
  setUserAge: (age) => set(() => ({ age })),
  setUserGender: (gender) => set(() => ({ gender })),
  setUserObjective: (objective) => set(() => ({ objective })),
  getUserImc: () => {
    const userHeight = get().height;
    const userWeight = get().weight;

    if (!Number(userHeight) || !Number(userWeight)) return { value: 0, status: "Indefinido" };

    const numHeight = Number(userHeight);
    const numWeight = Number(userWeight);
    const imc = parseFloat((numWeight / (numHeight * numHeight)).toFixed(2));
    const imcStatus = takeImcStatus(imc);

    return { value: imc, status: imcStatus };
  },
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
  getUserSemanalCalories,
}));

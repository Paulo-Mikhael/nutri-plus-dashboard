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
};

export const useUserStore = create<UserState & UserActions>((set) => ({
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
}));

import type { GetImcReturn } from "@/types/GetImcReturn";
import { useUserStore } from "./state/UserStore";
import { useUserHeight } from "./use-user-height";
import { useUserWeight } from "./use-user-weight";

interface UseUserImcDataReturn {
  getImc: () => GetImcReturn;
  height: string;
  weight: string;
}

export function useUserImcData(): UseUserImcDataReturn {
  const userHeight = useUserHeight();
  const userWeight = useUserWeight();
  const userImcData = useUserStore((state) => state.getUserImc);

  return {
    getImc: userImcData,
    height: userHeight,
    weight: userWeight,
  };
}

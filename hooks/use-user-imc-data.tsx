import type { GetImcData } from "@/types/GetImcData";
import { useUserStore } from "./state/store";
import { useUserHeight } from "./use-user-height";
import { useUserWeight } from "./use-user-weight";

interface UseUserImcDataReturn {
  getImc: () => GetImcData;
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

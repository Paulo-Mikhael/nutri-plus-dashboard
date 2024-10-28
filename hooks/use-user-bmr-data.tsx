import { useUserStore } from "./state/store";

interface UseUserBMRDataReturn {
  getBMR: () => number | null;
  age: number | null;
  weight: string;
  height: string;
  gender: "man" | "woman" | null;
}

export function useUserBMRData(): UseUserBMRDataReturn {
  const userBMR = useUserStore((state) => state.getUserBMR);
  const userGender = useUserStore((state) => state.gender);
  const userAge = useUserStore((state) => state.age);
  const userWeight = useUserStore((state) => state.weight);
  const userHeight = useUserStore((state) => state.height);

  return {
    getBMR: () => Number(userBMR()?.toFixed(0)),
    age: userAge,
    gender: userGender,
    weight: userWeight,
    height: userHeight,
  };
}

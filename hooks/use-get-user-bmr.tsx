import { useUserStore } from "./state/store";

interface UseUserBMRReturn {
  get: () => number | null;
  age: number | null;
  weight: string;
  height: string;
  gender: "man" | "woman" | null;
}

export function useGetUserBMR(): UseUserBMRReturn {
  const userBMR = useUserStore((state) => state.getUserBMR);
  const userGender = useUserStore((state) => state.gender);
  const userAge = useUserStore((state) => state.age);
  const userWeight = useUserStore((state) => state.weight);
  const userHeight = useUserStore((state) => state.height);

  return {
    get: () => Number(userBMR()?.toFixed(0)),
    age: userAge,
    gender: userGender,
    weight: userWeight,
    height: userHeight,
  };
}

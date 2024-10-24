import { useUserStore } from "./state/store";

export function useSetUserWeight(): (weight: string) => void {
  const setUserWeight = useUserStore((state) => state.setWeight);

  return (weight: string) => {
    setUserWeight(weight);
  };
}

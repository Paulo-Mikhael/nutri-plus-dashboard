import { useUserStore } from "./state/UserStore";

export function useSetUserWeight(): (weight: string) => void {
  const setUserWeight = useUserStore((state) => state.setWeight);

  return (weight: string) => {
    setUserWeight(weight);
  };
}

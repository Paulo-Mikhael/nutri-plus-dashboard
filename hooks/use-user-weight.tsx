import { useUserStore } from "./state/store";

export function useUserWeight(): string {
  const userWeight = useUserStore((state) => state.weight);

  return userWeight;
}

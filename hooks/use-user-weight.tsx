import { useUserStore } from "./state/UserStore";

export function useUserWeight(): string {
  const userWeight = useUserStore((state) => state.weight);

  return userWeight;
}

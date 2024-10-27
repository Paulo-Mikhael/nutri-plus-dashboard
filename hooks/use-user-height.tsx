import { useUserStore } from "./state/store";

export function useUserHeight(): string {
  const userHeight = useUserStore((state) => state.height);

  return userHeight;
}

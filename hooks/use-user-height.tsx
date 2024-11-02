import { useUserStore } from "./state/UserStore";

export function useUserHeight(): string {
  const userHeight = useUserStore((state) => state.height);

  return userHeight;
}

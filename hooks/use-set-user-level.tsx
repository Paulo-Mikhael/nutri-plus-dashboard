import type { UserLevel } from "@/types/UserLevel";
import { useUserStore } from "./state/store";

export function useSetUserLevel(): (level: UserLevel) => void {
  const setUserLevel = useUserStore((state) => state.setUserLevel);

  return (level: UserLevel) => {
    setUserLevel(level);
  };
}

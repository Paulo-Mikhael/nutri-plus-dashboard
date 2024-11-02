import type { UserLevel } from "@/types/UserLevel";
import { useUserStore } from "./state/UserStore";

export function useUserLevel(): UserLevel {
  const userLevel = useUserStore((state) => state.level);

  return userLevel;
}

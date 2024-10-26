import type { UserObjectives } from "@/types/UserObjectives";
import { useUserStore } from "./state/store";

export function useUserObjective(): UserObjectives {
  const userObjective = useUserStore((state) => state.objective);

  return userObjective;
}

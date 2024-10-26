import type { UserObjectives } from "@/types/UserObjectives";
import { useUserStore } from "./state/store";

export function useSetUserObjective(): (objective: UserObjectives) => void {
  const setUserObjective = useUserStore((state) => state.setUserObjective);

  return (objective: UserObjectives) => {
    setUserObjective(objective);
  };
}

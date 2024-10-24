import type { UserImcStatus } from "@/types/UserImcStatus";
import { useUserStore } from "./state/store";

export function useSetUserImcStatus(): (status: UserImcStatus) => void {
  const setUserImcStatus = useUserStore((state) => state.setUserImcStatus);

  return (status: UserImcStatus) => {
    setUserImcStatus(status);
  };
}

import type { UserImcStatus } from "@/types/UserImcStatus";
import { useUserStore } from "./state/store";

export function useUserStatus(): UserImcStatus {
  const userStatus = useUserStore((state) => state.status);

  return userStatus;
}

import { useUserStore } from "./state/store";

export function useUserGender(): "man" | "woman" | null {
  const userGender = useUserStore((state) => state.gender);

  return userGender;
}

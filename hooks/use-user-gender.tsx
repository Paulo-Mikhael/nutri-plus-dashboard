import { useUserStore } from "./state/UserStore";

export function useUserGender(): "man" | "woman" | null {
  const userGender = useUserStore((state) => state.gender);

  return userGender;
}

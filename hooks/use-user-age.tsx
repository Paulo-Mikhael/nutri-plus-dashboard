import { useUserStore } from "./state/UserStore";

export function useUserAge(): number | null {
  const userAge = useUserStore((state) => state.age);

  return userAge;
}

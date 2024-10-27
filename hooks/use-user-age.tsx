import { useUserStore } from "./state/store";

export function useUserAge(): number | null {
  const userAge = useUserStore((state) => state.age);

  return userAge;
}

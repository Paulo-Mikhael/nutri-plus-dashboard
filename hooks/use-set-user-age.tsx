import { useUserStore } from "./state/store";

export function useSetUserAge(): (age: number) => void {
  const setUserAge = useUserStore((state) => state.setUserAge);

  return (age: number) => {
    setUserAge(age);
  };
}

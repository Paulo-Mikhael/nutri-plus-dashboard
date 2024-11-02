import { useUserStore } from "./state/UserStore";

export function useSetUserAge(): (age: number) => void {
  const setUserAge = useUserStore((state) => state.setUserAge);

  return (age: number) => {
    setUserAge(age);
  };
}

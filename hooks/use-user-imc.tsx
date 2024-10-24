import { useUserStore } from "./state/store";

export function useUserImc(): number {
  const userImc = useUserStore((state) => state.imc);

  return userImc;
}

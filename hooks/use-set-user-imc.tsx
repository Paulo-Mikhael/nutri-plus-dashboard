import { useUserStore } from "./state/store";

export function useSetUserImc(): (imc: number) => void {
  const setUserImc = useUserStore((state) => state.setUserImc);

  return (imc: number) => {
    setUserImc(imc);
  };
}

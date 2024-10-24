import { useUserStore } from "./state/store";

export function useSetUserHeight(): (height: string) => void {
  const setUserHeight = useUserStore((state) => state.setHeight);

  return (height: string) => {
    setUserHeight(height);
  };
}

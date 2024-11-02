import type { FoodsState } from "@/types/FoodsState";
import { useFoodsStore } from "./state/FoodsStore";

export function useSetFoodsState(): (state: FoodsState) => void {
  const setFoodsState = useFoodsStore((state) => state.setFoodsState);

  return (state) => {
    setFoodsState(state);
  };
}

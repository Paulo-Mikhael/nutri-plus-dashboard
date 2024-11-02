import type { FoodsState } from "@/types/FoodsState";
import { useFoodsStore } from "./state/FoodsStore";

export function useFoodsState(): FoodsState {
  const foodsState = useFoodsStore((state) => state.state);

  return foodsState;
}

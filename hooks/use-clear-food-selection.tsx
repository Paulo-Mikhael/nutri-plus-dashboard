import { useFoodsStore } from "./state/FoodsStore";

export function useClearFoodSelection(): () => void {
  const clearSelection = useFoodsStore((state) => state.clearSelection);

  return clearSelection;
}

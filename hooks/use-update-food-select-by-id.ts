import { useFoodsStore } from "./state/FoodsStore";

export function useUpdateFoodSelectById(): (id: string) => void {
  const updateFoodSelectById = useFoodsStore((state) => state.updateSelectedByFoodId);

  return (id: string) => {
    updateFoodSelectById(id);
  };
}

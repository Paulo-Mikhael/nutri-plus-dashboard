import { useFilteredFoodsByName } from "@/hooks/use-filtered-foods";
import { FoodItemInfoCard } from "./FoodItemInfoCard";

export function FoodsList({ searchedName }: { searchedName: string }) {
  const filteredFoods = useFilteredFoodsByName(searchedName);

  return (
    <div className="w-full flex gap-4 overflow-x-scroll">
      {filteredFoods.map((food) => (
        <FoodItemInfoCard key={food.id} {...food} />
      ))}
    </div>
  );
}

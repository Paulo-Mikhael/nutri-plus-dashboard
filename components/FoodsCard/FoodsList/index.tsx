import { foodItems } from "@/data/food-items";
import { FoodItemInfoCard } from "./FoodItemInfoCard";

export function FoodsList({ searchedName }: { searchedName: string }) {
  const foodsCopy = [...foodItems];
  const organizedFoods = foodsCopy.sort((a, b) => a.name.localeCompare(b.name));
  const filteredFoods = organizedFoods.filter((item) => {
    const foodName = item.name.toLowerCase().trim();
    const normalizedSearch = searchedName.toLowerCase().trim();

    return foodName.includes(normalizedSearch);
  });

  return (
    <div className="w-full flex gap-4 overflow-x-scroll scrollbar-none">
      {filteredFoods.map((food) => (
        <FoodItemInfoCard key={food.id} {...food} />
      ))}
    </div>
  );
}

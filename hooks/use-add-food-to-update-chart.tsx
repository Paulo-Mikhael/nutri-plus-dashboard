import { useFoodsStore } from "./state/FoodsStore";

export function useAddFoodToUpdateChart(): (foodId: string, decrease?: boolean) => void {
  const foodsToUpdateChart = useFoodsStore((state) => state.foodsToUpdateChart);
  const setFoodsToUpdateChart = useFoodsStore((state) => state.setFoodsToUpdateChart);

  return (foodId, decrease) => {
    const requiredFoodToUpdateChart = foodsToUpdateChart.filter((item) => item.foodId === foodId);

    if (requiredFoodToUpdateChart.length > 0) {
      const foodQuantity = requiredFoodToUpdateChart[0].quantity;

      if (foodQuantity > 0) {
        setFoodsToUpdateChart(
          foodsToUpdateChart.map((food) => {
            const quantity = decrease ? food.quantity - 1 : food.quantity + 1;
            return {
              ...food,
              quantity: food.foodId === foodId ? quantity : food.quantity,
            };
          })
        );
      } else {
        setFoodsToUpdateChart([...foodsToUpdateChart.filter((item) => item.foodId !== foodId)]);
      }
    } else if (!decrease) {
      setFoodsToUpdateChart([...foodsToUpdateChart, { foodId, quantity: 1 }]);
    }
  };
}

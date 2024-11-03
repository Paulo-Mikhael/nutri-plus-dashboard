import type { FoodItem } from "./FoodItem";
import type { Nutrients } from "./Nutrients";

export type SelectedFoodsReturn = {
  foods: FoodItem[];
  nutrients: Nutrients;
};

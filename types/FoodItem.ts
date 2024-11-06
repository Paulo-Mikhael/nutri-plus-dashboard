import type { Nutrients } from "./Nutrients";

export type FoodItem = {
  id: string; // uuid()
  name: string; // string
  nutrients: Nutrients;
  selected?: boolean;
  createdByUser?: boolean;
};

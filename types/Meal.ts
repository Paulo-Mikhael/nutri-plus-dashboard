import type { Nutrients } from "./Nutrients";

export type Meal = {
  id: string;
  name: string;
  foodsId: string[];
  nutrients: Nutrients;
};

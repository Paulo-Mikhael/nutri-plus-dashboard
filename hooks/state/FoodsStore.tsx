import { foodItems as items } from "@/data/food-items";
import type { FoodItem } from "@/types/FoodItem";
import type { FoodsState } from "@/types/FoodsState";
import { create } from "zustand";
import { useFilteredFoodsByName } from "../use-filtered-foods";

type FoodState = {
  items: FoodItem[];
  state: FoodsState;
};
type FoodsActions = {
  useFilteredFoodsByName: (searchedName: string) => FoodItem[];
  updateSelectedByFoodId: (id: string) => void;
  clearSelection: () => void;
  setFoodsState: (state: FoodsState) => void;
};

export const useFoodsStore = create<FoodState & FoodsActions>((set, get) => ({
  state: "none",
  items,
  useFilteredFoodsByName,
  setFoodsState: (state) => set(() => ({ state })),
  updateSelectedByFoodId: (id) => {
    set(() => ({
      items: get().items.map((item) => ({
        ...item,
        selected: item.id === id ? !item.selected : item.selected,
      })),
    }));
  },
  clearSelection: () => {
    set(() => ({
      state: "none",
      items: get().items.map((item) => ({ ...item, selected: false })),
    }));
  },
}));

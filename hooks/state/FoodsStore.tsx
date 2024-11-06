import { create } from "zustand";
import type { FoodItem } from "@/types/FoodItem";
import type { FoodsState } from "@/types/FoodsState";
import type { SelectedFoodsReturn } from "@/types/SelectedFoodsReturn";
import type { Meal } from "@/types/Meal";
import { foodItems as items } from "@/data/food-items";
import { useFilteredFoodsByName as filteredFoodsByName } from "../use-filtered-foods";
import { useSelectedFoods as selectedFoods } from "../use-selected-foods";

type FoodState = {
  items: FoodItem[];
  state: FoodsState;
  meals: Meal[];
};
type FoodsActions = {
  filteredFoodsByName: (searchedName: string) => FoodItem[];
  setFoodsState: (state: FoodsState) => void;
  selectedFoods: () => SelectedFoodsReturn;
  updateSelectedByFoodId: (id: string) => void;
  clearSelection: () => void;
  addMeal: (meal: Meal) => void;
  addFood: (food: FoodItem) => void;
};

export const useFoodsStore = create<FoodState & FoodsActions>((set, get) => ({
  items,
  state: "none",
  meals: [],
  filteredFoodsByName,
  selectedFoods,
  setFoodsState: (state) => set(() => ({ state })),
  addMeal: (meal) => {
    set(() => ({
      meals: [...get().meals, meal],
    }));
  },
  addFood: (food) => {
    set(() => ({
      items: [...get().items, food],
    }));
  },
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

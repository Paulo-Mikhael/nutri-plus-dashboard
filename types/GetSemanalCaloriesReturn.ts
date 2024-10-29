export type GetSemanalCaloriesReturn = {
  semanalCalories: number;
  dailyCalories: DailyCalories;
};

export type DailyCalories = number | { strongDay: number; lightDay: number };

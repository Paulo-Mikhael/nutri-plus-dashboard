export type GetWeeklyCaloriesReturn = {
  weeklyCalories: number;
  dailyCalories: DailyCalories;
};

export type DailyCalories = number | { strongDay: number; lightDay: number };

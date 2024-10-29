import { useUserBMRData } from "@/hooks/use-user-bmr-data";
import { useUserLevel } from "@/hooks/use-user-level";
import { useUserObjective } from "@/hooks/use-user-objective";
import type { GetSemanalCaloriesReturn } from "@/types/GetSemanalCaloriesReturn";

export function getUserSemanalCalories(): GetSemanalCaloriesReturn | null {
  let userGET = 0;
  const userBMRReturn = useUserBMRData();
  const userBMR = userBMRReturn.getBMR();
  const userLevel = useUserLevel();
  const userObjective = useUserObjective();

  if (!userBMR || !userLevel || !userObjective) return null;

  userGET = userBMR;

  switch (userLevel) {
    case "sedentario":
      userGET *= 1.2;
      break;
    case "leve":
      userGET *= 1.375;
      break;
    case "moderado":
      userGET *= 1.55;
      break;
    case "forte":
      userGET *= 1.725;
      break;
    case "extremo":
      userGET *= 1.9;
      break;
  }

  switch (userObjective) {
    case "emagracer":
      userGET *= 0.8;
      break;
    case "hipertrofia":
      userGET *= 1.15;
      break;
    case "definicao":
      userGET *= 0.85;
      break;
    case "hipertrofia e definicao":
      return {
        dailyCalories: {
          strongDay: userGET * 1.1,
          lightDay: userGET * 0.8,
        },
        semanalCalories: userGET * 1.1 * 4 * (userGET * 0.8 * 3), // 4 days of hard trainings and 3 days of light trainings
      };
  }

  return {
    dailyCalories: userGET,
    semanalCalories: userGET * 7,
  };
}

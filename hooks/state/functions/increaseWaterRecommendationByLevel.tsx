import type { UserLevel } from "@/types/UserLevel";

export function increaseWaterRecommendationByLevel(
  userLevel: UserLevel,
  waterPerWeightCalculation: number
): number {
  if (userLevel === "sedentario") {
    return waterPerWeightCalculation;
  } else if (userLevel === "leve") {
    return waterPerWeightCalculation + 0.4;
  } else if (userLevel === "moderado") {
    return waterPerWeightCalculation + 0.8;
  } else if (userLevel === "forte") {
    return waterPerWeightCalculation + 1.2;
  } else {
    return waterPerWeightCalculation + 1.5;
  }
}

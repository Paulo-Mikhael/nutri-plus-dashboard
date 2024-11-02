import { useUserStore } from "./state/UserStore";

export function useGetUserWaterRecommendation(): () => number {
  const userLevel = useUserStore((state) => state.level);
  const userWeight = useUserStore((state) => state.weight);
  const userWaterRecommendation = useUserStore((state) => state.getUserWaterRecommendation);

  return () => {
    userLevel?.includes("");
    userWeight?.includes("");

    return Number(userWaterRecommendation().toFixed(1));
  };
}

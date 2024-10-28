import type { UserImcStatus } from "@/types/UserImcStatus";
import { takeImcStatus } from "@/utils/takeImcStatus";
import { formatHeight } from "./formatHeight";
import { formatWeight } from "./formatWeight";

type SubmitHeightWeightReturn = {
  values?: {
    imc: number;
    imcStatus: UserImcStatus;
    height: number;
    weight: number;
    formatedHeight: string;
    formatedWeight: string;
  };
  status: "invalid-height" | "invalid-weight" | "high-height" | "success";
};

export function submitHeightWeight(height: string, weight: string): SubmitHeightWeightReturn {
  const normalizedWeight = weight
    .replace(",", ".")
    .replace("kg", "")
    .replace("KG", "")
    .replace(" ", "");
  const normalizedHeight = height
    .replace(",", ".")
    .replace("m", "")
    .replace("M", "")
    .replace(" ", "");

  if (!Number(normalizedHeight)) {
    return { status: "invalid-height" };
  }
  if (!Number(normalizedWeight)) {
    return { status: "invalid-weight" };
  }

  const numWeight = Number(normalizedWeight);
  const numHeight = Number(normalizedHeight);

  if (numHeight > 3) {
    return { status: "high-height" };
  }

  const formatedWeight = formatWeight(numWeight);
  const formatedHeight = formatHeight(numHeight);
  const imc = parseFloat((numWeight / (numHeight * numHeight)).toFixed(2));
  const imcStatus = takeImcStatus(imc);

  return {
    values: {
      imc,
      imcStatus,
      formatedHeight,
      formatedWeight,
      height: numHeight,
      weight: numWeight,
    },
    status: "success",
  };
}

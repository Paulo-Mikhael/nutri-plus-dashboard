import { CaloriesChart } from "./CaloriesChart";
import { SelectiveObjectiveCard } from "./SelectObjectiveCard";

export function ChartCard() {
  return (
    <div className="flex flex-col gap-4">
      <SelectiveObjectiveCard />
      <CaloriesChart />
    </div>
  );
}

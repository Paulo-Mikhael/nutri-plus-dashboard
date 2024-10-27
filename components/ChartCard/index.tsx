import { CaloriesChart } from "./CaloriesChart";
import { SelectiveObjectiveCard } from "./SelectObjectiveCard";

export function ChartCard() {
  return (
    <div className="h-full flex flex-col gap-10">
      <SelectiveObjectiveCard />
      <CaloriesChart />
    </div>
  );
}

import { CaloriesChart } from "./CaloriesChart";
import { ChartCardHeader } from "./ChartCardHeader";

export function ChartCard() {
  return (
    <div className="h-full flex flex-col gap-10">
      <ChartCardHeader />
      <CaloriesChart />
    </div>
  );
}

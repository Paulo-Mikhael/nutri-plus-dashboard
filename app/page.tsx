import { ChartCard } from "@/components/ChartCard";
import { ImcCard } from "@/components/ImcCard";
import { RecomendationsCard } from "@/components/RecomendationsCard";
import { Separator } from "@/components/Separator";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Card className="h-[220px] p-6 flex justify-between gap-10 items-center max-lg:flex-wrap max-lg:h-full overflow-y-scroll scrollbar-none">
        <ImcCard />
        <Separator />
        <RecomendationsCard />
      </Card>
      <Card className="h-auto mt-4 p-6 overflow-y-scroll scrollbar-none">
        <ChartCard />
      </Card>
    </>
  );
}

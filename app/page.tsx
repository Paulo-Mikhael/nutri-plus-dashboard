import { ImcCard } from "@/components/ImcCard";
import { InitialToasts } from "@/components/InitialToasts";
import { RecomendationsCard } from "@/components/RecomendationsCard";
import { Separator } from "@/components/Separator";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <InitialToasts />
      <Card className="h-[220px] p-6 flex justify-between gap-10 items-center max-lg:flex-wrap max-lg:h-full overflow-y-scroll">
        <ImcCard />
        <Separator />
        <RecomendationsCard />
      </Card>
    </>
  );
}

import { ImcCard } from "@/components/ImcCard";
import { Separator } from "@/components/Separator";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="p-6 flex justify-between gap-4 items-center max-lg:flex-wrap">
      <ImcCard />
      <Separator />
    </Card>
  );
}

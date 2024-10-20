import { ImcCard } from "@/components/ImcCard";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="p-6 flex justify-between gap-4 items-center max-lg:flex-wrap">
      <ImcCard />
      <div className="h-[90px]">
        <div className="w-[2px] h-full bg-slate-300 rounded-full" />
      </div>
    </Card>
  );
}

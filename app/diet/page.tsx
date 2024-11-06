import { FoodsCard } from "@/components/FoodsCard";
import { MealsCard } from "@/components/MealsCard";
import { Card } from "@/components/ui/card";

export default function Diet() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="h-auto p-6 flex justify-between gap-10 items-center max-lg:flex-wrap max-lg:h-full overflow-scroll scrollbar-none">
        <FoodsCard />
      </Card>
      <Card className="h-auto p-6">
        <MealsCard />
      </Card>
    </div>
  );
}

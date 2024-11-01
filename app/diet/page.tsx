import { FoodsCard } from "@/components/FoodsCard";
import { Card } from "@/components/ui/card";

export default function Diet() {
  return (
    <Card className="h-auto p-6 flex justify-between gap-10 items-center max-lg:flex-wrap max-lg:h-full overflow-scroll scrollbar-none">
      <FoodsCard />
    </Card>
  );
}

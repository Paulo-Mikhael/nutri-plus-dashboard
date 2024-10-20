import Header from "@/components/Header";
import Tooltip from "@/components/Tooltip";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Backpack, ClipboardList, User } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-slate-200 dark:bg-slate-900 p-4">
      <Header />
      <Card
        role="navigation"
        className="border-t-0 rounded-t-none w-16 h-full p-4 gap-4 flex flex-col items-center text-slate-700 dark:text-slate-100"
      >
        <Tooltip tipText="Meu Relatório">
          <Button size="icon" variant="outline" className="p-0">
            <ClipboardList className="cursor-pointer" />
          </Button>
        </Tooltip>
        <Tooltip tipText="Minha Dieta">
          <Button size="icon" variant="outline" className="p-0">
            <Backpack className="cursor-pointer" />
          </Button>
        </Tooltip>
        <Tooltip tipText="Meu Perfil">
          <Button size="icon" variant="outline" className="p-0">
            <User className="cursor-pointer" />
          </Button>
        </Tooltip>
      </Card>
    </div>
  );
}

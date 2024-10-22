import { Backpack, ClipboardList, User } from "lucide-react";
import { Tooltip } from "../Tooltip";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function Aside() {
  return (
    <Card
      role="navigation"
      className="border-t-0 rounded-none w-16 h-full p-4 gap-4 flex flex-col items-center text-slate-700 dark:text-slate-100"
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
  );
}

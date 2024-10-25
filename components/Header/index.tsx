import { Bell } from "lucide-react";
import { Card } from "../ui/card";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { Tooltip } from "../Tooltip";
import { ThemeButton } from "../ThemeButton";
import { SelectUserActivity } from "./SelectUserActivity";
import { UserPerfilButton } from "./UserPerfilButton";

export function Header() {
  return (
    <header className="w-full">
      <Card className="h-16 flex items-center justify-between pr-6 rounded-none">
        <div className="h-full w-16 bg-slate-400 dark:bg-slate-800 cursor-pointer flex items-center justify-center rounded-none">
          <Logo size={36} />
        </div>
        <div className="flex items-center gap-2">
          <ThemeButton />
          <Tooltip tipText="Minhas Notificações">
            <Button variant="outline" size="icon">
              <Bell className="h-[1.2rem] w-[1.2rem] cursor-pointer text-slate-800 dark:text-slate-100" />
            </Button>
          </Tooltip>
          <span>
            <SelectUserActivity />
          </span>
          <UserPerfilButton />
        </div>
      </Card>
    </header>
  );
}

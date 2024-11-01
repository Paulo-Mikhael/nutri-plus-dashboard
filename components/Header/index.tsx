import { Card } from "../ui/card";
import Logo from "../Logo";
import { ThemeButton } from "../ThemeButton";
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
          <UserPerfilButton />
        </div>
      </Card>
    </header>
  );
}

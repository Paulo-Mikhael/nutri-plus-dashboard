import { Bell } from "lucide-react";
import user from "@/assets/user.png";
import { Card } from "../ui/card";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="w-full">
      <Card className="h-16 flex items-center justify-between pr-6">
        <div className="h-full w-16 bg-slate-800 dark:bg-slate-600 cursor-pointer flex items-center justify-center rounded-lg">
          <Logo size={36} />
        </div>
        <NavigationMenu>
          <Bell className="mr-4 cursor-pointer text-slate-800 dark:text-slate-600" />
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Image className="size-8" src={user} alt="imagem do usuário" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="p-4">Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Card>
    </header>
  );
}
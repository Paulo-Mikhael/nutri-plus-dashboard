import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center bg-slate-400 gap-10">
      <Button variant="outline">
        Botão Shadcn
      </Button>
      <Logo />
    </div>
  );
}

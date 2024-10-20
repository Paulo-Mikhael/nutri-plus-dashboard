import type { ReactNode } from "react";
import { Header } from "../Header";
import { Aside } from "../Aside";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-slate-200 dark:bg-slate-900">
      <Header />
      <div className="h-full flex">
        <Aside />
        <main className="h-full flex-grow p-4">{children}</main>
      </div>
    </div>
  );
}

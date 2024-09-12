import { useState } from "react";
import { SideNav } from "@/components/layout/navigation/side-nav.tsx";
import { NavItems } from "@/components/constants/side-nav.tsx";

import { cn } from "@/lib/utils.ts";
import { useSidebar } from "@/hooks/use-sidebar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {SecondaryNavItems} from "@/components/constants/side-nav-secondary.tsx";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const { isOpen, toggle } = useSidebar();

  return (
      <aside
          className={cn(
              "hidden border-r bg-zinc-100 lg:block relative z-20 shrink-0",
              isOpen ? "w-[17.5rem]" : "w-16",
              className
          )}
      >
          <div className="flex flex-col h-dvh fixed  py-8">
            <SideNav
                items={NavItems}
            />

            <SideNav
                className="mt-auto"
                items={SecondaryNavItems}
            />

            <Button
                className={cn(
                    "absolute -right-5 bottom-5 cursor-pointer rounded-full border bg-background text-3xl text-foreground text-muted-foreground w-10",
                    !isOpen && "rotate-180"
                )}
                onClick={toggle}
            />
          </div>
      </aside>
);
}

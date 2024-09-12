import { useState } from "react";
import { SideNav } from "@/components/layout/side-nav";
import { NavItems } from "@/components/constants/side-nav";

import { cn } from "@/lib/utils.ts";
import { useSidebar } from "@/hooks/use-sidebar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {SecondaryNavItems} from "@/components/constants/side-nav-secondary.tsx";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  return (
    <nav
      className={cn(
        "fixed inset-y-0 left-0 z-10 hidden flex flex-col border-r bg-background sm:flex py-4 duration-500",
        isOpen ? "w-48" : "w-14",
        className
      )}
    >
      <Button
        className={cn(
          "absolute -right-5 bottom-5 cursor-pointer rounded-full border bg-background text-3xl text-foreground w-10",
          !isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
        <SideNav
          items={NavItems}
        />

        <SideNav
            className="mt-auto"
            items={SecondaryNavItems}
        />
    </nav>
  );
}

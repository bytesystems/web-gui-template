"use client";

import {type NavItem} from "@/types";
import {cn} from "@/lib/utils.ts";
import {useSidebar} from "@/hooks/use-sidebar.tsx";
import {useLocation} from "react-router-dom";
import SidebarNavButton from "@/components/layout/navigation/sidebar-nav-button.tsx";

interface SideNavProps {
    items: NavItem[];
    setOpen?: (open: boolean) => void;
    className?: string;
}

export function SideNav({items, setOpen, className}: SideNavProps) {
    const location = useLocation();
    const path = location.pathname;
    const {isOpen} = useSidebar();
    return (
        <div className={cn(isOpen ? "w-[17.5rem]" : "w-16",className)}>
            <nav className={cn("grid gap-2 items-start px-3 text-sm font-medium")}>
            {items.map((item, index) => (
                <SidebarNavButton item={item} key={index} path={path} isOpen={isOpen} />
                ),
            )}
        </nav>
        </div>
    );
}

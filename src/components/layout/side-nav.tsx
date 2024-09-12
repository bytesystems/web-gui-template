"use client";

import {type NavItem} from "@/types";
import {cn} from "@/lib/utils.ts";
import {useSidebar} from "@/hooks/use-sidebar.tsx";
import {buttonVariants} from "@/components/ui/button.tsx";


import {useEffect, useState} from "react";
import {useLocation, Link} from "react-router-dom";

interface SideNavProps {
    items: NavItem[];
    setOpen?: (open: boolean) => void;
    className?: string;
}

export function SideNav({items, setOpen, className}: SideNavProps) {
    const location = useLocation();
    const path = location.pathname;

    const {isOpen} = useSidebar();
    const [openItem, setOpenItem] = useState("");
    const [lastOpenItem, setLastOpenItem] = useState("");

    useEffect(() => {
        if (isOpen) {
            setOpenItem(lastOpenItem);
        } else {
            setLastOpenItem(openItem);
            setOpenItem("");
        }
    }, [isOpen]);

    return (
        <nav className={cn("flex flex-col items-center gap-4 px-2 pt-20",className)}>
            {items.map((item) => (
                    <div className={
                        cn("w-full overflow-hidden flex px-1")
                    }>
                        <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => {
                                if (setOpen) setOpen(false)
                            }}
                            className={cn('flex h-8 rounded-lg items-center justify-start text-muted-foreground transition-all bg-transparent hover:text-foreground grow',
                                {'bg-accent text-accent-foreground': path === item.href && isOpen},
                                item.color,
                            )}
                        >
                            <div className={cn(
                                'h-8 w-8 rounded-lg flex items-center justify-center',
                                {'bg-accent text-accent-foreground': path === item.href},
                            )}>


                                <item.icon className={cn(
                                    'h-5 w-5',
                                )}/>
                            </div>
                            <span
                                className={cn("whitespace-nowrap transition-all opacity-0",
                                    isOpen && 'opacity-100'
                                )}
                            >
                                    {item.title}
                                  </span>
                            <span className="sr-only">{item.title}</span>
                        </Link>

                    </div>
                ),
            )}
        </nav>
    );
}

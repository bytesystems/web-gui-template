import {NavItem} from "@/types";
import {cn} from "@/lib/utils.ts";
import {Link} from "react-router-dom";
import {Collapsible, CollapsibleTrigger} from "@/components/ui/collapsible.tsx";
import {ChevronRightIcon} from "lucide-react";
import {CollapsibleContent} from "@radix-ui/react-collapsible";
import {useState} from "react";
import * as HoverCard from "@radix-ui/react-hover-card"
import SubNavButton from "@/components/layout/navigation/sub-nav-button.tsx";

interface NavItemProps {
    item: NavItem;
    path: string;
    isOpen: boolean;
    key?: any;
}

const SidebarNavButton: React.FC<NavItemProps> = ({item, path, isOpen}) => {
    const hasChildren = item.children && item.children.length > 0;

    if(hasChildren) {
        return (

                <HoverCard.Root openDelay={0} closeDelay={100}>
                    <HoverCard.Trigger asChild>
                        <Collapsible className={cn("grid overflow-hidden")}>
                            <CollapsibleTrigger
                                className={cn(
                                    'flex h-9 items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-zinc-200',
                                    {'bg-zinc-200 text-accent-foreground': path === item.href },
                                    '[&[data-state=open]>svg.ml-auto]:rotate-90'
                                )}
                            >
                                <item.icon className="h-4 w-4"/>
                                {isOpen && <span
                                  className={cn("whitespace-nowrap animate-slide-in")}
                                >
                                {item.title}
                            </span>}
                                {hasChildren && isOpen && (
                                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all"/>
                                )}
                                <span className="sr-only">{item.title}</span>
                            </CollapsibleTrigger>
                            {isOpen && <CollapsibleContent>
                              <div className="grid pl-7">
                                  {item.children?.map((item, index) => (
                                      <SubNavButton item={item} path={path} isOpen={isOpen} key={index} />
                                  ))}
                              </div>
                            </CollapsibleContent>}
                        </Collapsible>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                        {!isOpen && <HoverCard.Content
                          className="bg-zinc-300 rounded-r-md text-sm text-muted-foreground font-medium whitespace-nowrap shadow-lg animate-slide-in z-10 min-w-40 flex flex-col overflow-hidden"
                          side="right"
                          sideOffset={12}
                          align="start"
                        >
                          <div className="px-4 py-2 border-b border-zinc-400">{item.title}</div>
                            {item.children?.map((item, index) => (
                                <Link to={item.href} className="px-4 py-2 hover:bg-zinc-200">{item.title}</Link>
                            ))}
                        </HoverCard.Content>}
                    </HoverCard.Portal>
                </HoverCard.Root>
        )

    }


    return (
            <HoverCard.Root openDelay={0} closeDelay={100}>
                <HoverCard.Trigger asChild className={cn("grid overflow-hidden")}>
                    <div>
                    <Link
                        to={hasChildren ? '#' : item.href}
                        className={cn(
                            'flex h-9 items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-zinc-200',
                            {'bg-zinc-200 text-accent-foreground': path === item.href},
                        )}
                    >
                        <item.icon className="h-4 w-4"/>
                        {isOpen && <span
                          className={cn("whitespace-nowrap animate-slide-in")}
                        >
                            {item.title}
                        </span>}
                        {hasChildren && isOpen && (
                            <ChevronRightIcon className="ml-auto h-5 w-5 transition-all"/>
                        )}
                        <span className="sr-only">{item.title}</span>
                    </Link>
                    </div>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                    {!isOpen && <HoverCard.Content
                      className="bg-zinc-300 rounded-r-md text-sm text-muted-foreground font-medium whitespace-nowrap shadow-lg animate-slide-in z-10 min-w-40"
                      side="right"
                      sideOffset={12}
                      align="start"
                    >
                      <Link to={item.title} className="block px-4 py-2">{item.title}</Link>
                    </HoverCard.Content>}
                </HoverCard.Portal>
            </HoverCard.Root>
    );
};

export default SidebarNavButton;
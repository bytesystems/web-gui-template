import { Cog } from "lucide-react";
import { type NavItem } from "@/types";

export const SecondaryNavItems: NavItem[] = [
  {
    title: "Settings",
    icon: Cog, // Documents icon
    href: "/settings",
    color: "text-yellow-500",
  },
];
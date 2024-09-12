import { LayoutDashboard, Users, Calendar, Package, FileText, BarChart2, FolderOpen } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard, // Dashboard icon
    href: "/",
    color: "text-sky-500",
  },
  {
    title: "Customers",
    icon: Users, // Customers icon
    href: "/customers",
    color: "text-red-500",
  },
  {
    title: "Appointments",
    icon: Calendar, // Appointments icon
    href: "/appointments",
    color: "text-green-500",
  },
  {
    title: "Orders",
    icon: Package, // Orders icon
    href: "/orders",
    color: "text-orange-500",
  },
  {
    title: "Products",
    icon: FileText, // Products icon
    href: "/products",
    color: "text-blue-500",
  },
  {
    title: "Reports",
    icon: BarChart2, // Reports icon
    href: "/reports",
    color: "text-purple-500",
    children: [
      {
        title: "Report1",
        icon: BarChart2, // Reports icon
        href: "/reports/1",
        color: "text-purple-500",
        isChild: true,
      },
      {
        title: "Report2",
        icon: BarChart2, // Reports icon
        href: "/reports/2",
        color: "text-purple-500",
        isChild: true,
      },
      {
        title: "Report3",
        icon: BarChart2, // Reports icon
        href: "/reports/3",
        color: "text-purple-500",
        isChild: true,
      },
      {
        title: "Report4",
        icon: BarChart2, // Reports icon
        href: "/reports/4",
        color: "text-purple-500",
        isChild: true,
      }
    ]
  },
  {
    title: "Documents",
    icon: FolderOpen, // Documents icon
    href: "/documents",
    color: "text-yellow-500",
  },
];
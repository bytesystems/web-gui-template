import {NavItem} from "@/types";
import {Link} from "react-router-dom";
import {cn} from "@/lib/utils.ts";

interface NavItemProps {
    item: NavItem;
    path: string;
    isOpen: boolean;
    key?: any;
}

const SubNavButton: React.FC<NavItemProps> = ({item, path, isOpen}) => {
    return (
        <Link
            to={item.href}
            className={cn("items-center rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted",
                {'bg-muted text-accent-foreground': path === item.href && isOpen},)}
        >
            {item.title}
        </Link>
    )
}

export default SubNavButton
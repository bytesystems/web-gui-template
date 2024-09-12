
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils.ts";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { Boxes } from "lucide-react";
import { UserNav } from "@/components/layout/user-nav";
import { Button } from "@/components/ui/button.tsx";

export default function HeaderFixed() {
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-16 items-center justify-between px-4">
                <a
                    href={"/"}
                    className="hidden items-center justify-between gap-2 md:flex"
                >
                    <Boxes className="h-6 w-6" />
                    <h1 className="text-lg font-semibold">T3 app template</h1>
                </a>
                <div className={cn("block md:!hidden")}>
                    <MobileSidebar />
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button>Sign In</Button>
                    {/*{sessionData?.user ? (*/}
                    {/*    <UserNav user={sessionData.user} />*/}
                    {/*) : (*/}
                    {/*    <Button size="sm"*/}
                    {/*        onClick={() => {*/}
                    {/*            void signIn();*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        Sign In*/}
                    {/*    </Button>*/}
                    {/*)}*/}
                </div>
            </nav>
        </div>
    );
}
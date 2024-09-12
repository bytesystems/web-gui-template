/**
 * v0 by Vercel.
 * @see https://v0.dev/t/niufIQiNYFV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function TestPage() {
    return (
        <div className="flex min-h-screen w-full overflow-hidden">
            <div className="hidden border-r bg-muted/40 lg:block min-w-[280px]">
                <div className="flex flex-col gap-2">
                    <div className="flex h-[60px] items-center px-6">
                        <a href="#" className="flex items-center gap-2 font-semibold" >
                            <Package2Icon className="h-6 w-6" />
                            <span className="">Acme Inc</span>
                        </a>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Collapsible className="grid gap-2 border">
                                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg border px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                    <HomeIcon className="h-4 w-4" />
                                    Dashboard
                                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="-mx-4 grid gap-2 px-4">
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Overview
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Analytics
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Reporting
                                        </a>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="grid gap-2">
                                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                    <ShoppingCartIcon className="h-4 w-4" />
                                    Orders
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge>
                                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="-mx-4 grid gap-2 px-4">
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            All Orders
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Pending
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Shipped
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Cancelled
                                        </a>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="grid gap-2">
                                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                    <PackageIcon className="h-4 w-4" />
                                    Products
                                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="-mx-4 grid gap-2 px-4">
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            All Products
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Categories
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Inventory
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Reviews
                                        </a>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="grid gap-2">
                                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                    <UsersIcon className="h-4 w-4" />
                                    Customers
                                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="-mx-4 grid gap-2 px-4">
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            All Customers
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            New Customers
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Repeat Customers
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Abandoned Carts
                                        </a>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="grid gap-2">
                                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                    <LineChartIcon className="h-4 w-4" />
                                    Analytics
                                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="-mx-4 grid gap-2 px-4">
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Dashboard
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Reports
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Insights
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                            
                                        >
                                            Integrations
                                        </a>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
                    <a href="#" className="lg:hidden" >
                        <Package2Icon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </a>
                    <div className="flex-1">
                        <h1 className="font-semibold text-lg">Recent Orders</h1>
                    </div>
                    <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                        <form className="ml-auto flex-1 sm:flex-initial">
                            <div className="relative">
                                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search orders..."
                                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                />
                            </div>
                        </form>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <img
                                        src="/placeholder.svg"
                                        width="32"
                                        height="32"
                                        className="rounded-full"
                                        alt="Avatar"
                                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                                    />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <LanguagesIcon className="h-5 w-5" />
                                    <span className="sr-only">Toggle language menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Language</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>English</DropdownMenuItem>
                                <DropdownMenuItem>Español</DropdownMenuItem>
                                <DropdownMenuItem>Français</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <BellIcon className="h-5 w-5" />
                                    <span className="sr-only">Toggle notifications</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-2 w-2 items-center justify-center rounded-full bg-blue-500" />
                                        <div>
                                            <p className="text-sm font-medium">Your order has been shipped</p>
                                            <p className="text-sm text-muted-foreground">5 minutes ago</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-2 w-2 items-center justify-center rounded-full bg-green-500" />
                                        <div>
                                            <p className="text-sm font-medium">Your subscription has been renewed</p>
                                            <p className="text-sm text-muted-foreground">1 hour ago</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500" />
                                        <div>
                                            <p className="text-sm font-medium">Your payment has failed</p>
                                            <p className="text-sm text-muted-foreground">2 days ago</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="border shadow-sm rounded-lg p-2">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Order</TableHead>
                                    <TableHead className="min-w-[150px]">Customer</TableHead>
                                    <TableHead className="hidden md:table-cell">Channel</TableHead>
                                    <TableHead className="hidden md:table-cell">Date</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">#3210</TableCell>
                                    <TableCell>Olivia Martin</TableCell>
                                    <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                    <TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
                                    <TableCell className="text-right">$42.25</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>
    )
}

function BellIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LanguagesIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
        </svg>
    )
}


function LineChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    )
}


function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}


function PackageIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}


function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
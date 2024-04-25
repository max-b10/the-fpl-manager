import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '../UI/organisms/Sheet';
import { Button } from '../UI/molecules/Button/Button';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../UI/organisms/DropdownMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export default function Navbar() {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const location = useLocation();
  const navigation = [
    {
      name: 'Profile',
      href: '/dashboard',
      current: location.pathname === '/dashboard',
    },
    {
      name: 'History',
      href: '/managerHistory',
      current: location.pathname === '/managerHistory',
    },
    {
      name: 'Compare',
      href: '/managerComparison',
      current: location.pathname === '/managerComparison',
    },
    {
      name: 'About',
      href: '/about',
      current: location.pathname === '/about',
    },
  ];
  const isLandingPage = location.pathname === '/';
  return (
    <>
      <div className="flex w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
          {!isLandingPage && (
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    item.current
                      ? 'rounded-md px-3 py-2 text-sm font-medium text-foreground'
                      : 'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground'
                  }
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={
                        item.current
                          ? 'rounded-md px-3 py-2 text-sm font-medium text-foreground'
                          : 'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground'
                      }
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className="mr-1 rounded-full border border-primary p-1"
              >
                {/* <CircleUser className="h-5 w-5" /> */}
                <p className="p-2 text-xs text-primary">Id: {fplIdString}</p>
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
        </header>
      </div>
    </>
  );
}

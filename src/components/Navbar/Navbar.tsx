import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '../../UI/organisms/Sheet';
import { Button } from '../../UI/molecules/Button/Button';
import { Menu } from 'lucide-react';
import { IFormData } from '../../types/FormData';
import IdForm from '../IdForm';
import { useState } from 'react';
import { motion } from 'framer-motion';
interface NavbarProps {
  handleSubmit: (data: IFormData) => void;
  showIdForm?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ handleSubmit, showIdForm = true }) => {
  const location = useLocation();
  const navigation = [
    {
      name: 'Dashboard',
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
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { y: '-100%' },
  };
  return (
    <>
      <div data-cy="navbar" className="flex w-full flex-col justify-between">
        <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex items-center">
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
                    data-cy={`navbar-link-${item.name.toLowerCase()}`}
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
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <motion.div
                  initial="closed"
                  animate={isOpen ? 'open' : 'closed'}
                  variants={sidebarVariants}
                >
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
                </motion.div>
              </Sheet>
            </div>
          </div>
          <div className="flex w-full items-center md:w-auto">
            {showIdForm && <IdForm onSubmit={handleSubmit} />}
          </div>
        </header>
      </div>
    </>
  );
};
export default Navbar;

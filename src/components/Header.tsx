import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { Menu, Moon, Sun, Target, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const { setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 flex h-12 items-center bg-orange-200 p-2 dark:bg-orange-950">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/">
          <Target />
        </Link>
        <nav>
          <div
            className="cursor-pointer sm:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-expanded={navbarOpen}
            aria-controls="menu"
          >
            {navbarOpen ? <X /> : <Menu />}
          </div>
          <div
            className={clsx(
              "fixed left-0 right-0 mt-3 transform bg-orange-200 transition duration-200 dark:bg-orange-950 sm:relative sm:mt-0 sm:translate-x-0",
              navbarOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <ul className="container mx-auto flex flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:px-0 sm:py-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "active rounded bg-red-300 px-2 hover:bg-orange-600 hover:text-white dark:bg-red-800 dark:hover:bg-red-600"
                    : "rounded px-2 hover:bg-orange-600 hover:text-white dark:hover:bg-red-600"
                }
                onClick={() => setNavbarOpen(false)}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive
                    ? "active rounded bg-red-300 px-2 hover:bg-orange-600 hover:text-white dark:bg-red-800 dark:hover:bg-red-600"
                    : "rounded px-2 hover:bg-orange-600 hover:text-white dark:hover:bg-red-600"
                }
                onClick={() => setNavbarOpen(false)}
              >
                <li>Posts</li>
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "active rounded bg-red-300 px-2 hover:bg-orange-600 hover:text-white dark:bg-red-800 dark:hover:bg-red-600"
                    : "rounded px-2 hover:bg-orange-600 hover:text-white dark:hover:bg-red-600"
                }
                onClick={() => setNavbarOpen(false)}
              >
                <li>Register</li>
              </NavLink>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

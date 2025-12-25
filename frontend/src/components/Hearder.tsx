import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { Menu, X } from "lucide-react";

const Header = ({ header }: any) => {
  const { isDark, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavigationMenu
      className={`relative   justify-between border transition-all ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl shadow-sm z-50 fixed top-0 left-0 w-full"
          : ""
      } ${open ? "border-b-0" : ""}`}
    >
      <div className="flex justify-between items-center app-container">
        <NavigationMenuList>
          {/* LEFT: Logo + Name */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a className="flex flex-row items-center gap-3" href="/">
                <img
                  src="/mkc.png"
                  alt="Logo"
                  className="size-14 rounded-full object-fill"
                />
                <span className="hidden md:block font-medium text-md ">
                  {header?.name}
                </span>
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        {/* RIGHT: Nav links */}
        <NavigationMenuList className="hidden sm:flex">
          {header?.sections?.map((section: any) => (
            <NavigationMenuItem key={section.text}>
              <NavigationMenuLink asChild>
                <a href={section.url} className="font-light text-md">
                  {section.text}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <button
            onClick={toggleTheme}
            className="relative size-10 cursor-pointer"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </NavigationMenuList>

        {/* MOBILE HAMBURGER */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="size-10 flex items-center justify-center"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className={`sm:hidden absolute top-full left-0 w-full  border z-50 transition-all ${
            open ? "border-t-0" : ""
          } ${isDark ? "bg-background/80" : "bg-white/80"}`}
        >
          <div className="flex flex-col items-center gap-6 pt-2">
            {header?.sections?.map((section: any) => (
              <a
                key={section.text}
                href={section.url}
                className="text-md font-light cursor-pointer"
              >
                {section.text}
              </a>
            ))}

            <button onClick={toggleTheme} className="size-10">
              {isDark ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      )}
    </NavigationMenu>
  );
};

export default Header;

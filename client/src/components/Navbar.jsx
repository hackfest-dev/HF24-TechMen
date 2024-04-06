"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const NavLinks = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'Demo', path: '/demonstration' },
	{ id: 3, name: 'Contact Us', path:'/#team' },
  {id:4,name:'Docs',path:'/documentation'},
];


export default function Navbar() {


  const [isOpen, setOpen] = React.useState(false);
  const openMenu = () => {
    setOpen(!isOpen);
  };
  const { setTheme } = useTheme();
  const pathname = usePathname();
	const isActive = (path) => path === pathname;


  return (
    <div className="">
      <div className={`  flex justify-center w-full`}>
        <nav
          className={`md:flex  items-center justify-between px-5 py-3 max-w-[1100px] w-full rounded-md m-5`}
        >
          <h1 className="text-xl cursor-pointer">TechMen</h1>
          <div className="flex">
            <ul
              className={`md:flex items-center md:space-x-2 m-auto max-md:space-y-2
            ${isOpen ? "text-center mt-10" : "hidden"}
            `}
            >
              {NavLinks.map((link) => {
					return (
						<li key={link.id} className="px-2 max-md:py-1 cursor-pointer text-center">
							<Link
								href={link.path}
								className={isActive(link.path) ? 'text-[rgb(225,29,73)]' : ''}
							>
								{link.name}
							</Link>
						</li>
					);
				})}
            </ul>
            <div className="max-md:absolute max-md:right-20 max-md:top-6 md:ml-2">
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
            </div>
          </div>
          <div className="md:hidden absolute top-5 right-6">
            <Hamburger onToggle={openMenu} />
          </div>
        </nav>
      </div>
    </div>
  );
}

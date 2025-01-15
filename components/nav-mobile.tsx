"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";
import { FaUsers, FaEnvelope } from "react-icons/fa";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const links = [
  { icon: RiHomeFill, path: "home", name: "home", offset: 0 },
  { icon: BiSolidFoodMenu, path: "menu", name: "menu", offset: 0 },
  { icon: FaUsers, path: "about", name: "about", offset: -50 },
  { icon: FaEnvelope, path: "contact", name: "contact", offset: 0 },
];

interface NavMobileProps {
  containerStyles?: string;
  linkStyles?: string;
  iconStyles?: string;
}

export const NavMobile = ({
  containerStyles,
  linkStyles,
  iconStyles,
}: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={containerStyles}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line
          size={30}
          className="text-white transition-all duration-200"
        />
      </div>
      <aside
        className={cn(
          "fixed top-0 bottom-0 z-20 w-full p-10 transition-all duration-500 bg-black",
          isOpen ? "right-0" : "-right-full"
        )}
      >
        <div className="flex flex-col items-center justify-between h-full">
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute left-8 top-8 bg-green flex justify-center items-center"
          >
            <IoCloseOutline size={40} className="text-white" />
          </div>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={90} height={36} />
          </Link>
          <ul className="space-y-8">
            {links.map(({ icon: Icon, path, name, offset }) => (
              <li key={name}>
                <ScrollLink
                  to={path}
                  offset={offset}
                  smooth={false}
                  className="flex items-center gap-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={30} className={iconStyles} />
                  <span className={linkStyles}>{name}</span>
                </ScrollLink>
              </li>
            ))}
          </ul>
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button variant="orange" size="sm" onClick={() => setIsOpen(false)}>
              Book a Table
            </Button>
          </ScrollLink>
        </div>
      </aside>
    </nav>
  );
};

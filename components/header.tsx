"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { NavMobile } from "@/components/nav-mobile";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        active ? "bg-black-heavy py-4" : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={75} height={30} />
          </Link>
          <Nav containerStyles="hidden xl:flex" linkStyles="capitalize" />
          <ScrollLink to="reservation" smooth>
            <Button variant="orange" size="sm">
              Book a Table
            </Button>
          </ScrollLink>
          <NavMobile containerStyles="xl:hidden" linkStyles="uppercase" />
        </div>
      </div>
    </header>
  );
};

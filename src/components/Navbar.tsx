"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  console.log(cn);

  return (
    //  top-10  mx-auto
    <div className={cn("fixed inset-x-0 w-full z-50 ", className)}>
      <Menu setActive={setActive}>
        {/* <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Srishti Gautam'
          ></MenuItem>
        </Link> */}

        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Home'
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='About'
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Projects'
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Blogs'
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;

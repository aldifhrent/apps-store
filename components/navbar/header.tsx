"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import MenuItems from "./menu-items";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
const Header = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="w-full h-18 p-4 items-center border-b-4">
      <div className="flex items-center gap-x-4 justify-between">
        <Image src="./logo.svg" alt="Logo Apps Store" width={50} height={50} />
        <MenuItems />
        <div className="flex gap-x-8 items-center px-2">
          <Link href="/sign-in">
            <Button variant="outline" className="rounded-md" size="sm">
              Login
            </Button>
          </Link>
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;

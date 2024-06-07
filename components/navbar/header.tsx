"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import MenuItems from "./menu-items";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import CartIcon from "../cart-icon";

const Header = () => {
  const [nav, setNav] = useState<boolean>(false);
  const session = useSession();
  console.log(session);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="w-full h-18 p-4 items-center border-b-1">
      <div className="flex items-center gap-x-4 justify-between">
        <Image src="./logo.svg" alt="Logo Apps Store" width={50} height={50} />
        <Input placeholder="Search Product..." className="max-w-[600px] hidden md:block" />
        <div className="flex gap-x-8 items-center px-2">
          {session.status === "authenticated" ? (
            <Image src={session.data.user?.image || ""} alt={session.data.user?.name || "None"} width={50} height={50} className="rounded-full"/>
          ) : (
            <Link href="/sign-in">
              <Button variant="outline" className="rounded-md" size="sm">
                Login
              </Button>
            </Link>
          )}
          <CartIcon/>
        </div>
      </div>
    </header>
  );
};

export default Header;

'use client'

import React, { useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const [nav, setNav] = useState<boolean>(false);
  return (
    <header className="max-w-screen w-full h-16 p-4 items-center">
      <div className="flex items-center gap-x-4 justify-between">
        <h1 className="text-">Shoppy.</h1>
        <ul className="flex gap-x-4 items-center">
          <li className="text-md">About</li>
          <li>Support</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex gap-x-1 items-center">
          <Button variant="destructive">Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

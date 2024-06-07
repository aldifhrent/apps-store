import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline"><ShoppingCart/></Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col">
            <Button>Check Out</Button>
          </div>
        </SheetContent>
      </Sheet>
  );
};

export default CartIcon;

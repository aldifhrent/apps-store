import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const StoreCard = () => {
  return (
    <Card className="flex w-[250px] mt-4">
      <CardContent>
        Images
        <CardTitle className="text-center">Red Shirt</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <Button>Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default StoreCard;

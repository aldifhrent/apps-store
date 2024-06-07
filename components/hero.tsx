import React from "react";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <Wrapper>
      <div className="grid grid-rows sm:grid-cols-2 justify-between mt-12 h-4/5">
        <div className="max-w-xl">
          <h1 className="text-7xl font-bold">Discover the Latest Fashion for Your Lifestyle.</h1>
          <p className="text-md mt-4">Explore our newest arrivals and elevate your wardrobe with pieces that reflect your unique style. From casual wear to elegant attire, we have everything you need to make a statement.</p>

          <Button className="p-2 mt-2 w-1/4">Explorer.</Button>


        </div>
        < Image src="/hero.svg" width={600} height={400} alt="Hero Website" className="mt-4 md:mt-0"/>
      </div>
    </Wrapper>
  );
};

export default Hero;

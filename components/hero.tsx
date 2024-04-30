import React from "react";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold">Fastest dark delivery</h1>
          <p className="text-lg mt-2">Millions of product has never been so convenient.</p>
          <div className="w-4">
          <Button className="bg-orange-400 mt-2">
            Get Started
          </Button>
          </div>

        </div>
        <p className="bg-red-100">Images</p>
      </div>
    </Wrapper>
  );
};

export default Hero;

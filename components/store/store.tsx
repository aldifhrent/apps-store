import React from "react";
import Wrapper from "@/components/wrapper";
import StoreCard from "./store-card";

const Store = () => {
  return (
    <Wrapper className="mt-16">
      <h1 className="text-center text-4xl font-bold">Store</h1>
      <div className="flex flex-col items-center justify-center gap-x-12 mt-4 md:flex-row ">
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    </Wrapper>
  );
};

export default Store;

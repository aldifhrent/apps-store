import Wrapper from "@/components/wrapper";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper className="h-full flex items-center justify-center">
      {children}
    </Wrapper>
  );
};

export default AuthLayout;

import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={`p-12 w-full mx-auto md:p-8 ${className || ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;

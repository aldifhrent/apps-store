"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import React from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}
const NextAuthProvider = ({ children}: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;

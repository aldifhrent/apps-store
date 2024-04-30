"use client";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: "/settings"
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
      >
        Github
      </Button>
    </div>
  );
};

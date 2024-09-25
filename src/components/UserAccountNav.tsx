"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
// import { redirect } from "next/navigation";

const UserAccountNav = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      variant="destructive"
    >
      Sign Out
    </Button>
  );
};

export default UserAccountNav;

"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const UserAccountNav = () => {
  return (
    <Button onClick={() => signOut()} variant="destructive">
      Sign Out
    </Button>
  );
};

export default UserAccountNav;

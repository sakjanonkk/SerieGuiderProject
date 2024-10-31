"use client";
import React, { FC, useState } from "react";
import { Button } from "./ui/button";
import { ReactNode } from "react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { boolean } from "zod";

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={loginWithGoogle}
      className="flex items-center justify-center w-full px-6 py-4 text-lg font-medium text-gray-600 border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
    >
      {isLoading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 mr-2 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (
        <FaGoogle className="h-6 w-6 mr-3 text-gray-600" />
      )}
      <span>{children}</span>
    </button>
  );
};

export default GoogleSignInButton;

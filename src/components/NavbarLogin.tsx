"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavbarLogin: React.FC = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/blacklogo(SVG).svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </Link>

        {/* Sidebar for Documentation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/docs1"
            className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm"
          >
            Documentation1
          </Link>
          <Link
            href="/docs2"
            className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm"
          >
            Documentation2
          </Link>
          <Link
            href="/docs3"
            className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm"
          >
            Documentation3
          </Link>
        </div>

        {/* Dropdown Menu for Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-10 h-10 sm:w-10 sm:h-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-white shadow-md rounded-md w-48">
            <DropdownMenuItem className="flex items-center gap-2">
              My Account
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2">
              <span className="material-symbols-outlined">support</span>
              Support
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2">
              <span className="material-symbols-outlined">logout</span>
              ออกจากระบบ
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center mt-4 space-x-4">
        <Link href="/docs1" className="hover:bg-zinc-200 text-gray-800 p-2">
          Documentation1
        </Link>
        <Link href="/docs2" className="hover:bg-zinc-200 text-gray-800 p-2">
          Documentation2
        </Link>
        <Link href="/docs3" className="hover:bg-zinc-200 text-gray-800 p-2">
          Documentation3
        </Link>
      </div>
    </div>
  );
};

export default NavbarLogin;

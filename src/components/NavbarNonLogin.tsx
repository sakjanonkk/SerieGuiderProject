import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

const NavbarNonLogin: React.FC = () => {
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

        <Link href="/sign-in" className={buttonVariants()}>
          Sign in
         </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center mt-4 space-x-4">
        <Link href="/docs1" className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm">
          Documentation1
        </Link>
        <Link href="/docs2" className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm">
          Documentation2
        </Link>
        <Link href="/docs3" className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm">
          Documentation3
        </Link>
      </div>
    </div>
  );
};
export default NavbarNonLogin;

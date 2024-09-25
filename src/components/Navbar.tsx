import React from "react";
import Link from "next/link";
import Image from "next/image";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import UserAccountNav from "./UserAccountNav";
import { buttonVariants } from "./ui/button";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          {/* Use direct path to image in public folder */}
          <Image
            src="/blacklogo(SVG).svg"
            alt="Logo"
            className=""
            width={80}
            height={80}
          />
        </Link>
        {session?.user ? (
          <UserAccountNav />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

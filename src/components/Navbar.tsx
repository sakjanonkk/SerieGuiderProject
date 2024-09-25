import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          {/* Use direct path to image in public folder */}
          <Image src="/blacklogo.png" alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex justify-around gap-x-10">
          <div className="Hover:">
            <Link href="/">หน้าหลัก</Link>
          </div>
          <div>
            <Link href="/serie">วิชาเสรี</Link>
          </div>
          <div>
            <Link href="/">แนะนำวิชาเสรี</Link>
          </div>
          <div>
            <Link href="/">เกี่ยวกับเรา</Link>
          </div>
        </div>

        {session?.user ? (
          <Button variant="destructive">Sign Out</Button>
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

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import User from "@/components/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export default async function Home() {
  // Fetching the session
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Main Section */}
      <section className="bg-white shadow-md rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/SerieGuideLogo/blacklogo(SVG).svg" // ใส่ path ของโลโก้คุณ
            alt="Logo"
            width={200} // กำหนดความกว้างให้กับภาพ
            height={200} // กำหนดความสูงให้กับภาพ
            className="mx-auto h-16 w-auto sm:h-24"
          />
        </div>

        {/* Title */}
        <p className="text-base sm:text-xl text-gray-700 mb-6">
          ยินดีต้อนรับสู่เว็บไซต์แนะนำวิชาเสรีสำหรับนักศึกษามหาวิทยาลัยขอนแก่น!
          แพลตฟอร์มนี้ถูกสร้างขึ้นเพื่อช่วยนักศึกษาในการแลกเปลี่ยนความคิดเห็นเกี่ยวกับวิชาเสรีที่สนใจและเหมาะสมกับตน
          ที่นี่คุณสามารถค้นหาข้อมูล รีวิวจากนักศึกษารุ่นพี่
          และคำแนะนำเพื่อการตัดสินใจที่ดีที่สุด
        </p>

        {/* Image */}
        <div className="mb-6">
          <Image
            src="/home-page/sharing-articles-animate.svg" // ใส่ path ของรูปภาพที่คุณต้องการ
            alt="Illustration"
            width={500} // กำหนดความกว้าง
            height={400} // กำหนดความสูง
            className="mx-auto h-48 sm:h-64 md:h-72 lg:h-80 w-auto"
          />
        </div>
      </section>

      {/* Sign In Section */}
      {/* Conditionally render GoogleSignInButton if the user is not logged in */}
      {!session && (
        <section className="py-6 sm:py-8 w-full flex justify-center">
          <div className="text-center space-y-4 max-w-md w-full">
            <GoogleSignInButton> SIGN IN WITH GOOGLE </GoogleSignInButton>
          </div>
        </section>
      )}

      {/* User Info Section */}
      {/* Show user information if the user is logged in */}
      {/* {session && (
        <section className="py-6 sm:py-8 w-full flex justify-center">
          <div className="text-center space-y-4 max-w-md w-full">
            <p className="text-xl font-semibold">
              Welcome, {session.user?.name} !
            </p>
          </div>
        </section>
      )} */}
    </div>
  );
}

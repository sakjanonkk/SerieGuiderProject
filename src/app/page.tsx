import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import User from "@/components/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mx-16 my-16 mt-20">
      {/* Main Section */}
      <section className="bg-white shadow-md rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/blacklogo(SVG).svg" // ใส่ path ของโลโก้คุณ
            alt="Logo"
            width={200} // กำหนดความกว้างให้กับภาพ
            height={200} // กำหนดความสูงให้กับภาพ
            className="mx-auto h-16 w-auto sm:h-24"
          />
        </div>

        {/* Title */}
        <p className="text-base sm:text-xl text-gray-700 mb-6 ">
          ยินดีต้อนรับสู่เว็บไซต์แนะนำวิชาเสรีสำหรับนักศึกษามหาวิทยาลัยขอนแก่น!
          แพลตฟอร์มนี้ถูกสร้างขึ้นเพื่อช่วยนักศึกษาในการแลกเปลี่ยนความคิดเห็นเกี่ยวกับวิชาเสรีที่สนใจและเหมาะสมกับตน
          ที่นี่คุณสามารถค้นหาข้อมูล รีวิวจากนักศึกษารุ่นพี่
          และคำแนะนำเพื่อการตัดสินใจที่ดีที่สุด
        </p>

        {/* Image */}
        <div className="mb-6">
          <Image
            src="/sharing-articles-animate.svg" // ใส่ path ของรูปภาพที่คุณต้องการ
            alt="Illustration"
            width={500} // กำหนดความกว้าง
            height={400} // กำหนดความสูง
            className="mx-auto h-48 sm:h-64 md:h-72 lg:h-80 w-auto"
          />
        </div>
      </section>
      <Link className={buttonVariants()} href="/admin">
        Open My Admin
      </Link>
      {/* Sign In Section */}
      <section className="py-6 sm:py-8 w-full flex justify-center">
        <div className="text-center space-y-4 max-w-md w-full">
          <p className="text-base sm:text-xl text-gray-700 pb-2">
            ลงชื่อเข้าใช้ เพื่อเริ่มต้นค้นหาวิชาที่เหมาะกับคุณ!
          </p>
          <Link href="/sign-in">
            <Button className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 flex items-center justify-center w-full px-4 py-3 rounded-full">
              <Image
                src="/google-logo-icon-.svg" // ใส่ไอคอน Google ที่ต้องการ
                alt="Google Icon"
                width={24} // ขนาดไอคอน
                height={24} // ขนาดไอคอน
                className="mr-2"
              />
              SIGN IN WITH GOOGLE
            </Button>
          </Link>
        </div>
      </section>
      <div>
        <h2>Client Session</h2>
        <User />
        <h2>Server Session</h2>
        {JSON.stringify(session)}
      </div>
    </div>
  );
}
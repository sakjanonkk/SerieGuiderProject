import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Import button from shadcn/ui

const LandingPage: React.FC = () => {
  return (
    // Main Container
    <div className=" flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-[140px] sm:mt-[150px] lg:mt-[120px] xl:mt-[120px] mx-4 sm:mx-8 lg:mx-12 xl:mx-16">

      {/* Main Section */}
      <section
        className="bg-white rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full"
        style={{ boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)" }} // เงาด้านบน
      >
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/blacklogo(SVG).svg"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto h-16 w-auto sm:h-24"
          />
        </div>

        {/* Title */}
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          ยินดีต้อนรับสู่เว็บไซต์แนะนำวิชาเสรีสำหรับนักศึกษามหาวิทยาลัยขอนแก่น!
          แพลตฟอร์มนี้ถูกสร้างขึ้นเพื่อช่วยนักศึกษาในการแลกเปลี่ยนความคิดเห็นเกี่ยวกับวิชาเสรีที่สนใจและเหมาะสมกับตน
          ที่นี่คุณสามารถค้นหาข้อมูล รีวิวจากนักศึกษารุ่นพี่
          และคำแนะนำเพื่อการตัดสินใจที่ดีที่สุด
        </p>
        {/* Image */}
        <div className="mb-6">
          <Image
            src="/sharing-articles-animate.svg"
            alt="Illustration"
            width={500}
            height={400}
            className="mx-auto h-48 sm:h-64 md:h-72 lg:h-80 w-auto"
          />
        </div>
      </section>

      {/* Sign In Section */}
      <section className="py-6 sm:py-8 w-full flex justify-center">
        <div className="text-center space-y-4 max-w-md w-full">
          <p className="text-base sm:text-lg text-gray-700">
            ลงชื่อเข้าใช้ เพื่อเริ่มต้นค้นหาวิชาที่เหมาะกับคุณ!
          </p>
          <Link href="/sign-in">
            <Button className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 flex items-center justify-center w-full px-4 py-3 rounded-full shadow-md">
              <Image
                src="/google-logo-icon.svg"
                alt="Google Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              SIGN IN WITH GOOGLE
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
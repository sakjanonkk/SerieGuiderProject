import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import button from shadcn/ui


const LandingPage = () => {
  return (
    // Main Container
    <div className=" flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-[140px] sm:mt-[150px] lg:mt-[120px] xl:mt-[120px] mx-4 sm:mx-8 lg:mx-12 xl:mx-16">

      {/* Main Section */}
      <section className=" bg-white shadow-md rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/blacklogo(SVG).svg" // ใส่ path ของโลโก้คุณ
            alt="Logo"
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
  <img
    src="/rootPage/sharing-articles-animate.svg" // ใส่ path ของรูปภาพที่คุณต้องการ
    alt="Illustration"
    className="mx-auto h-48 sm:h-64 md:h-72 lg:h-80 w-auto"
  />
</div>

      </section>

      {/* Sign In Section */}
      <section className=" py-6 sm:py-8 w-full flex justify-center">
        <div className="text-center space-y-4 max-w-md w-full">
          <p className="text-base sm:text-lg text-gray-700">
            ลงชื่อเข้าใช้ เพื่อเริ่มต้นค้นหาวิชาที่เหมาะกับคุณ!
          </p>
          <Link href="/sign-in">
            <Button className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 flex items-center justify-center w-full px- py-3 rounded-full">
              <img
                src="\rootPage\google-logo-icon-.svg" // ใส่ไอคอน Google ที่ต้องการ
                alt="Google Icon"
                className="h-5 sm:h-6 w-5 sm:w-6 mr-2"
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
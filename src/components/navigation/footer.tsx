import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white-100 py-6 px-4 md:px-6 border-zinc-200">
      <hr className="border-t border-gray-300 my-8" />
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Image
            src="/SerieGuideLogo/blacklogo(SVG).svg"
            alt="Logo"
            width={100}
            height={50}
            className="mb-2"
          />
          <p className="text-xs text-gray-600">© 2024 All Rights Reserved</p>
        </div>
        <div className="text-sm md:text-right">
          <p className="mb-2 font-semibold">
            &quot;การหาความรู้
            คือความพยายามที่ก่อให้เกิดผลลัพธ์ที่ดีที่สุด&quot;
          </p>
          <p className="mb-2 italic">Eraldo Banovac</p>
          <p className="mb-1">
            เสริมด์ เว็บไซต์แนะนำวิชาเสรีสำหรับนักศึกษามหาวิทยาลัยขอนแก่น
          </p>
          <p>สร้างขึ้นเพื่อช่วยนักศึกษาในการศึกษาและค้นหารายวิชาเสรี</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

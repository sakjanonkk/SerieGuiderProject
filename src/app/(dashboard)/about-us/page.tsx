// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button"; // Import button from shadcn/ui
// import Icon from "@/components/icon/icon-lucide";
// import ProfileCard from "@/components/ui-card/cardAboutUs-page";
// import Image from "next/image";

// const teamMembers = [
//   {
//     name: "Nathachai Charoenchai",
//     githubUrl: "https://github.com/Trainght",
//     githubUsername: "Trainght",
//     instagramUrl: "https://www.instagram.com/ntc_chtr/",
//     instagramUsername: "ntc_chtr",
//     profileImage: "/aboutUs-page/profile-01.png",
//   },
//   {
//     name: "Teerapong Kunasit",
//     githubUrl: "https://github.com/TeerapongKunasitTK",
//     githubUsername: "TeerapongKunasitTK",
//     instagramUrl: "https://www.instagram.com/noxtee_/",
//     instagramUsername: "noxtee_",
//     profileImage: "/aboutUs-page/profile-02.png",
//   },
//   {
//     name: "Sakjanon Kamoldung",
//     githubUrl: "https://github.com/sakjanonkk",
//     githubUsername: "sakjanonkk",
//     instagramUrl: "https://www.instagram.com/beers.sk/",
//     instagramUsername: "beers.sk",
//     profileImage: "/aboutUs-page/profile-03.png",
//   },
// ];

// const pageAbout_us = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4">
//       {/* Main Section */}
//       <section
//         className="bg-white rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full"
//         style={{
//           boxShadow:
//             "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//         }}
//       >
//         {/* Logo */}
//         {/* <div className="mb-7">
//           <Image
//             src="/SerieGuideLogo/blacklogo(SVG).svg"
//             alt="Logo"
//             className="mx-auto h-16 w-auto sm:h-24"
//           />
//         </div> */}
//         <div className="mb-7">
//           <Image
//             src="/SerieGuideLogo/blacklogo(SVG).svg" // เส้นทางของไฟล์ SVG
//             alt="Logo" // คำบรรยายของรูปภาพ (เพื่อการเข้าถึง)
//             width={80} // กำหนดความกว้าง
//             height={80} // กำหนดความสูง
//             className="mx-auto h-16 w-auto sm:h-24" // ใช้ Tailwind เพื่อทำให้ responsive
//           />
//         </div>

//         {/* Title */}
//         <p className="text-[#000] text-left text-[24px] font-bold">
//           Motivation
//         </p>
//         <p className="text-base sm:text-lg text-gray-700 mb-6 pt-1 pl-1">
//           เว็บไซต์แนะนำวิชาเสรีสำหรับนักศึกษามหาวิทยาลัยขอนแก่น
//           ถูกสร้างขึ้นเพื่อช่วยให้นักศึกษา
//           ค้นหาวิชาที่เหมาะสมกับตัวเองได้ง่ายขึ้น
//           ผ่านคำแนะนำจากรุ่นพี่และผู้ที่เคยเรียนมาก่อน
//           นักศึกษาจะได้รับข้อมูลที่เป็นประโยชน์ในการตัดสินใจเลือกวิชาที่ตรงกับความสนใจ
//           และเป้าหมายของตนเอง
//           นอกจากนี้ยังช่วยวางแผนการเรียนให้สอดคล้องกับแนวทางการเรียนรู้
//           เพื่อให้การเรียนในมหาวิทยาลัยเป็นไปอย่างราบรื่น
//           พร้อมทั้งช่วยให้นักศึกษาได้เรียนรู้ และสร้างสรรค์ความรู้ใหม่ ๆ
//           ที่ตอบโจทย์ความสนใจและเป้าหมายของตนเอง
//         </p>
//         <p className=" text-center text-[24px] font-bold">Team Developer </p>

//         {/* Group of CARD */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mx-auto">
//           {/* CARD */}
//           {teamMembers.map((member, index) => (
//             <ProfileCard
//               key={index}
//               name={member.name}
//               githubUrl={member.githubUrl}
//               githubUsername={member.githubUsername}
//               instagramUrl={member.instagramUrl}
//               instagramUsername={member.instagramUsername}
//               profileImage={member.profileImage}
//             />
//           ))}
//         </div>
//       </section>
//       <section
//         className="bg-white rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full mt-4"
//         style={{
//           boxShadow:
//             "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//         }}
//       >
//         {/* Title */}
//         <p className="text-[#000] text-left text-[24px] font-bold">
//           Credit & License
//         </p>
//         <p className="text-base sm:text-lg text-gray-700 mb-6 pt-1 pl-1">
//           เราเป็นเว็บไซต์ที่ไม่แสวงหาผลกำไร สร้างขึ้นเพื่อประโยชน์ของนักศึกษา
//           เรามุ่งเน้นในการให้ข้อมูลและทรัพยากรที่เป็นประโยชน์
//           เพื่อสนับสนุนการเรียนรู้และการตัดสินใจอย่างมีประสิทธิภาพ
//           โดยไม่มีการเรียกเก็บค่าใช้จ่ายใด ๆ
//         </p>
//         <p className=" text-center text-[1.5rem] font-bold">ใส่อะไรดี
//           dddddddddddddddddddddddงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง</p>

//         {/* Group of IMG */}
//         <div className="flex flex-col items-center">
//         <Image
//             src="/aboutUs-page/Google-Fonts-New-Logo.png"
//             alt="Illustration"
//             width={300}
//             height={300}
//           />
//            <Image
//             src="/aboutUs-page/Story-Set-Logo.png"
//             alt="Illustration"
//             width={300}
//             height={300}
//           />
//            <Image
//             src="/aboutUs-page/unDraw-Logo.svg"
//             alt="Illustration"
//             width={200}
//             height={200}
//           />
//         </div>
//       </section>
//     </div>
//   );
// };
// export default pageAbout_us;

"use client";
import React, { useState, useEffect } from "react"; // นำเข้า useState และ useEffect
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Icon from "@/components/icon/icon-lucide";
import ProfileCard from "@/components/ui-card/cardAboutUs-page";
import Image from "next/image";

import { LoaderCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Nathachai Charoenchai",
    githubUrl: "https://github.com/Trainght",
    githubUsername: "Trainght",
    instagramUrl: "https://www.instagram.com/ntc_chtr/",
    instagramUsername: "ntc_chtr",
    profileImage: "/aboutUs-page/profile-01.png",
  },
  {
    name: "Teerapong Kunasit",
    githubUrl: "https://github.com/TeerapongKunasitTK",
    githubUsername: "TeerapongKunasitTK",
    instagramUrl: "https://www.instagram.com/noxtee_/",
    instagramUsername: "noxtee_",
    profileImage: "/aboutUs-page/profile-02.png",
  },
  {
    name: "Sakjanon Kamoldung",
    githubUrl: "https://github.com/sakjanonkk",
    githubUsername: "sakjanonkk",
    instagramUrl: "https://www.instagram.com/beers.sk/",
    instagramUsername: "beers.sk",
    profileImage: "/aboutUs-page/profile-03.png",
  },
];

const PageAboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // จำลองการโหลดข้อมูล (เช่นจาก API)
    const loadData = async () => {
      // ทำการโหลดข้อมูลที่นี่
      await new Promise((resolve) => setTimeout(resolve, 2000)); // รอ 2 วินาที
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    // แสดงสถานะการโหลดข้อมูล
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoaderCircle className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4">
      {/* Main Section */}
      <section
        className="bg-white rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="mb-7">
          <Image
            src="/SerieGuideLogo/blacklogo(SVG).svg"
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto h-16 w-auto sm:h-24"
          />
        </div>

        {/* Title */}
        <p className="text-[#000] text-left text-[24px] font-bold">
          Motivation
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-6 pt-1 pl-1">
          เว็บไซต์แนะนำวิชาเสรีสำหรับนักศึกษามหาวิทยาลัยขอนแก่น
          ถูกสร้างขึ้นเพื่อช่วยให้นักศึกษา
          ค้นหาวิชาที่เหมาะสมกับตัวเองได้ง่ายขึ้น
          ผ่านคำแนะนำจากรุ่นพี่และผู้ที่เคยเรียนมาก่อน
          นักศึกษาจะได้รับข้อมูลที่เป็นประโยชน์ในการตัดสินใจเลือกวิชาที่ตรงกับความสนใจ
          และเป้าหมายของตนเอง
          นอกจากนี้ยังช่วยวางแผนการเรียนให้สอดคล้องกับแนวทางการเรียนรู้
          เพื่อให้การเรียนในมหาวิทยาลัยเป็นไปอย่างราบรื่น
          พร้อมทั้งช่วยให้นักศึกษาได้เรียนรู้ และสร้างสรรค์ความรู้ใหม่ ๆ
          ที่ตอบโจทย์ความสนใจและเป้าหมายของตนเอง
        </p>
        <p className="text-center text-[24px] font-bold">Team Developer</p>

        {/* Group of CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mx-auto">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              githubUrl={member.githubUrl}
              githubUsername={member.githubUsername}
              instagramUrl={member.instagramUrl}
              instagramUsername={member.instagramUsername}
              profileImage={member.profileImage}
            />
          ))}
        </div>
      </section>

      {/* Credit & License Section */}
      <section
        className="bg-white rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full mt-4"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <p className="text-[#000] text-left text-[24px] font-bold">
          Credit & License
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-6 pt-1 pl-1">
          เราเป็นเว็บไซต์ที่ไม่แสวงหาผลกำไร สร้างขึ้นเพื่อประโยชน์ของนักศึกษา
          เรามุ่งเน้นในการให้ข้อมูลและทรัพยากรที่เป็นประโยชน์
          เพื่อสนับสนุนการเรียนรู้และการตัดสินใจอย่างมีประสิทธิภาพ
          โดยไม่มีการเรียกเก็บค่าใช้จ่ายใด ๆ
        </p>
        {/* <p className="text-center text-[1.5rem] font-bold">ใส่อะไรดี</p> */}

        {/* Group of IMG */}
        <div className="flex flex-col items-center">
          <Image
            src="/aboutUs-page/Google-Fonts-New-Logo.png"
            alt="Illustration"
            width={300}
            height={300}
          />
          <Image
            src="/aboutUs-page/Story-Set-Logo.png"
            alt="Illustration"
            width={300}
            height={300}
          />
          <Image
            src="/aboutUs-page/unDraw-Logo.svg"
            alt="Illustration"
            width={200}
            height={200}
          />
        </div>
      </section>
    </div>
  );
};

export default PageAboutUs;

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import button from shadcn/ui


const pageAbout_us = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8  mt-28">
      {/* Main Section */}
      <section className="bg-white shadow-md rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full">
        {/* Logo */}
        <div className="mb-7">
          <img
            src="/blacklogo(SVG).svg" 
            alt="Logo"
            className="mx-auto h-16 w-auto sm:h-24"
          />
        </div>

        {/* Title */}
        <p className="text-[#000] text-left text-[24px] font-bold">Introduction</p>
        <p className="text-base sm:text-lg text-gray-700 mb-6 pt-1 pl-1">
          ยินดีต้อนรับสู่เว็บไซต์แนะนำวิชาเสรีสำหรับนักศึกษามหาวิทยาลัยขอนแก่น!
          แพลตฟอร์มนี้ถูกสร้างขึ้นเพื่อช่วยนักศึกษาในการแลกเปลี่ยนความคิดเห็นเกี่ยวกับวิชาเสรีที่สนใจและเหมาะสมกับตน
          ที่นี่คุณสามารถค้นหาข้อมูล รีวิวจากนักศึกษารุ่นพี่
          และคำแนะนำเพื่อการตัดสินใจที่ดีที่สุด
        </p>
        <p className=" text-center text-[24px] font-bold">Team Members</p>
        
        {/* Group of CARD */}
        <div className="flex justify-between ">
          {/* CARD */}
          <div className=" w-[250px] h-auto rounded-3xl shadow-md m-4">
            <div className="w-auto h-[260px] flex-shrink-0  ">
              <img
              src="/profile-01.png"
              alt="picture of profile"
              className="w-full h-full object-contain rounded-tr-3xl rounded-tl-3xl"/>
            </div>
            <p className="mt-2">Nathachai Charoenchai</p>
            <p className="mt-2 underline underline-offset-2 font-bold">Contact</p>
            <div className="grid grid-cols-1 gap-4 p-4">
              <Link href={"https://github.com/Trainght"}> 
                <div className="flex items-center">
                  <img  
                    src="/icon_github.svg"
                    alt="icon of github"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* github-url */}
                  <p className="text-[14px]" >Trainght</p> 
                </div>
              </Link>
              <Link href={"https://www.instagram.com/ntc_chtr/"}>
                <div className="flex items-center">
                  <img 
                    src="/icon_instargram.svg"
                    alt="icon of instagram"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* IG-name */}
                  <p className="text-[14px]">ntc_chtr</p>
                </div>  
              </Link>
            </div>
          </div>

          {/* CARD */}
          <div className=" w-[250px] h-auto rounded-3xl shadow-md m-4">
            <div className="w-auto h-[260px] flex-shrink-0  ">
              <img
              src="/profile-02.png"
              alt="picture of profile"
              className="w-full h-full object-contain rounded-tr-3xl rounded-tl-3xl"/>
            </div>
            <p className="mt-2">Teerapong Kunasit</p>
            <p className="mt-2 underline underline-offset-2 font-bold">Contact</p>
            <div className="grid grid-cols-1 gap-4 p-4">
              <Link href={"https://github.com/TeerapongKunasitTK"}> 
                <div className="flex items-center">
                  <img  
                    src="/icon_github.svg"
                    alt="icon of github"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* github-url */}
                  <p className="text-[14px]" >TeerapongKunasitTK</p> 
                </div>
              </Link>
              <Link href={"https://www.instagram.com/noxtee_/"}>
                <div className="flex items-center">
                  <img 
                    src="/icon_instargram.svg"
                    alt="icon of instagram"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* IG-name */}
                  <p className="text-[14px]">noxtee_</p>
                </div>  
              </Link>
            </div>
          </div>

          {/* CARD */}
          <div className=" w-[250px] h-auto rounded-3xl shadow-md m-4">
            <div className="w-auto h-[260px] flex-shrink-0  ">
              <img
              src="/profile-03.png"
              alt="picture of profile"
              className="w-full h-full object-contain rounded-tr-3xl rounded-tl-3xl"/>
            </div>
            <p className="mt-2">Sakjanon Kamoldung</p>
            <p className="mt-2 underline underline-offset-2 font-bold">Contact</p>
            <div className="grid grid-cols-1 gap-4 p-4">
              <Link href={"https://github.com/sakjanonkk"}> 
                <div className="flex items-center">
                  <img  
                    src="/icon_github.svg"
                    alt="icon of github"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* github-url */}
                  <p className="text-[14px]" >sakjanonkk</p> 
                </div>
              </Link>
              <Link href={"https://www.instagram.com/beers.sk/"}>
                <div className="flex items-center">
                  <img 
                    src="/icon_instargram.svg"
                    alt="icon of instagram"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* IG-name */}
                  <p className="text-[14px]">beers.sk</p>
                </div>  
              </Link>
            </div>
          </div>

        </div>


        </section>
      </div>
  )

};
export default pageAbout_us;

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import button from shadcn/ui


const pageAbout_us = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8  mt-28">
      {/* Main Section */}
      <section className="bg-white shadow-md rounded-lg p-6 sm:p-10 text-center max-w-4xl w-full">
        {/* Logo */}
        <div className="mb-7">
          <img
            src="/blacklogo(SVG).svg" 
            alt="Logo"
            className="mx-auto h-16 w-auto sm:h-24"
          />
        </div>

        {/* Title */}
        <p className="text-[#000] text-left text-[24px] font-bold">Introduction</p>
        <p className="text-base sm:text-lg text-gray-700 mb-6 pt-1 pl-1">
          ยินดีต้อนรับสู่เว็บไซต์แนะนำวิชาเสรีสำหรับนักศึกษามหาวิทยาลัยขอนแก่น!
          แพลตฟอร์มนี้ถูกสร้างขึ้นเพื่อช่วยนักศึกษาในการแลกเปลี่ยนความคิดเห็นเกี่ยวกับวิชาเสรีที่สนใจและเหมาะสมกับตน
          ที่นี่คุณสามารถค้นหาข้อมูล รีวิวจากนักศึกษารุ่นพี่
          และคำแนะนำเพื่อการตัดสินใจที่ดีที่สุด
        </p>
        <p className=" text-center text-[24px] font-bold">Team Members</p>
        
        {/* Group of CARD */}
        <div className="flex justify-between ">
          {/* CARD */}
          <div className=" w-[250px] h-auto rounded-3xl shadow-md m-4">
            <div className="w-auto h-[260px] flex-shrink-0  ">
              <img
              src="/profile-01.png"
              alt="picture of profile"
              className="w-full h-full object-contain rounded-tr-3xl rounded-tl-3xl"/>
            </div>
            <p className="mt-2">Nathachai Charoenchai</p>
            <p className="mt-2 underline underline-offset-2 font-bold">Contact</p>
            <div className="grid grid-cols-1 gap-4 p-4">
              <Link href={"https://github.com/Trainght"}> 
                <div className="flex items-center">
                  <img  
                    src="/icon_github.svg"
                    alt="icon of github"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* github-url */}
                  <p className="text-[14px]" >Trainght</p> 
                </div>
              </Link>
              <Link href={"https://www.instagram.com/ntc_chtr/"}>
                <div className="flex items-center">
                  <img 
                    src="/icon_instargram.svg"
                    alt="icon of instagram"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* IG-name */}
                  <p className="text-[14px]">ntc_chtr</p>
                </div>  
              </Link>
            </div>
          </div>

          {/* CARD */}
          <div className=" w-[250px] h-auto rounded-3xl shadow-md m-4">
            <div className="w-auto h-[260px] flex-shrink-0  ">
              <img
              src="/profile-02.png"
              alt="picture of profile"
              className="w-full h-full object-contain rounded-tr-3xl rounded-tl-3xl"/>
            </div>
            <p className="mt-2">Teerapong Kunasit</p>
            <p className="mt-2 underline underline-offset-2 font-bold">Contact</p>
            <div className="grid grid-cols-1 gap-4 p-4">
              <Link href={"https://github.com/TeerapongKunasitTK"}> 
                <div className="flex items-center">
                  <img  
                    src="/icon_github.svg"
                    alt="icon of github"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* github-url */}
                  <p className="text-[14px]" >TeerapongKunasitTK</p> 
                </div>
              </Link>
              <Link href={"https://www.instagram.com/noxtee_/"}>
                <div className="flex items-center">
                  <img 
                    src="/icon_instargram.svg"
                    alt="icon of instagram"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* IG-name */}
                  <p className="text-[14px]">noxtee_</p>
                </div>  
              </Link>
            </div>
          </div>

          {/* CARD */}
          <div className=" w-[250px] h-auto rounded-3xl shadow-md m-4">
            <div className="w-auto h-[260px] flex-shrink-0  ">
              <img
              src="/profile-03.png"
              alt="picture of profile"
              className="w-full h-full object-contain rounded-tr-3xl rounded-tl-3xl"/>
            </div>
            <p className="mt-2">Sakjanon Kamoldung</p>
            <p className="mt-2 underline underline-offset-2 font-bold">Contact</p>
            <div className="grid grid-cols-1 gap-4 p-4">
              <Link href={"https://github.com/sakjanonkk"}> 
                <div className="flex items-center">
                  <img  
                    src="/icon_github.svg"
                    alt="icon of github"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* github-url */}
                  <p className="text-[14px]" >sakjanonkk</p> 
                </div>
              </Link>
              <Link href={"https://www.instagram.com/beers.sk/"}>
                <div className="flex items-center">
                  <img 
                    src="/icon_instargram.svg"
                    alt="icon of instagram"
                    className="w-[30px] h-[30px] mr-1"/>
                  {/* IG-name */}
                  <p className="text-[14px]">beers.sk</p>
                </div>  
              </Link>
            </div>
          </div>

        </div>


        </section>
      </div>
  )

};
export default pageAbout_us;

"use client";

import React from "react";
import { motion } from "framer-motion";
import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  GraduationCap,
  Code,
  FlaskConical,
  Users,
} from "lucide-react";
import Link from "next/link";
import FacultyCard from "@/components/CourseCard/FacultyCard";
import CourseCard from "@/components/CourseCard/CourseCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FACULTY_DATA = [
  {
    name: "คณะศึกษาศาสตร์",
    nameEn: "Faculty of Education",
    id: "ED",
    icon: GraduationCap,
    accent: "from-blue-50 to-indigo-50",
    borderAccent: "group-hover:border-blue-200",
    description: "นวัตกรรมการศึกษาและการพัฒนาการเรียนรู้",
  },
  {
    name: "คณะวิศวกรรมศาสตร์",
    nameEn: "Faculty of Engineering",
    id: "EN",
    icon: Code,
    accent: "from-emerald-50 to-green-50",
    borderAccent: "group-hover:border-emerald-200",
    description: "วิศวกรรมดิจิทัลและนวัตกรรม",
  },
  {
    name: "คณะวิทยาศาสตร์",
    nameEn: "Faculty of Science",
    id: "SC",
    icon: FlaskConical,
    accent: "from-purple-50 to-pink-50",
    borderAccent: "group-hover:border-purple-200",
    description: "วิทยาศาสตร์และเทคโนโลยีสมัยใหม่",
  },
  {
    name: "คณะมนุษยศาสตร์",
    nameEn: "Faculty of Humanities",
    id: "HU",
    icon: Users,
    accent: "from-orange-50 to-red-50",
    borderAccent: "group-hover:border-orange-200",
    description: "ภาษาและวัฒนธรรมร่วมสมัย",
  },
] as const;

// ข้อมูลคอร์สที่ปรับปรุงแล้ว
const coursesData = {
  ED: [
    {
      image: "https://m1r.ai/3YbL.svg",
      courseName: "นวัตกรรมการศึกษา",
      description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
      courseID: "ED813001",
      category: "Innovation",
      date: "2024",
      faculty: "คณะศึกษาศาสตร์",
      facultyAKA: "ED",
    },{
      image: "https://m1r.ai/5KDKN.svg",
      courseName: "นวัตกรรมการศึกษา",
      description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
      courseID: "ED813001",
      category: "Innovation",
      date: "2024",
      faculty: "คณะศึกษาศาสตร์",
    },{
      image: "https://m1r.ai/KSTcJ.svg",
      courseName: "นวัตกรรมการศึกษา",
      description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
      courseID: "ED813001",
      category: "Innovation",
      date: "2024",
      faculty: "คณะศึกษาศาสตร์",
    },{
      image: "https://m1r.ai/53CdY.svg",
      courseName: "นวัตกรรมการศึกษา",
      description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
      courseID: "ED813001",
      category: "Innovation",
      date: "2024",
      faculty: "คณะศึกษาศาสตร์",
    },  
  ],
  EN: [
    {
      image: "/animate/warning-animate.svg",
      courseName: "Digital Engineering",
      description: "พื้นฐานการออกแบบระบบดิจิทัล",
      courseID: "EN813001",
      category: "Digital",
      date: "2024",
      faculty: "คณะวิศวกรรมศาสตร์",
    },
    // เพิ่มคอร์สเพิ่มเติม...
  ],
  SC: [
    {
      image: "/animate/warning-animate.svg",
      courseName: "Data Science Fundamentals",
      description: "พื้นฐานวิทยาศาสตร์ข้อมูล",
      courseID: "SC813001",
      category: "Data Science",
      date: "2024",
      faculty: "คณะวิทยาศาสตร์",
    },
    // เพิ่มคอร์สเพิ่มเติม...
  ],
  HU: [
    
    // เพิ่มคอร์สเพิ่มเติม...
  ],
};

interface Faculty {
  name: string;
  nameEn: string;
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  borderAccent: string;
  description: string;
}
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white max-w-[86rem] ">
      <div className="max-w-[100vw] mx-auto px-8 sm:px-12 lg:px-8 md:max-w-[90rem] ">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-2  sm:py-4 lg:py-4  "
        >
          <div className="max-w-full ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              เลือกรายวิชาเสรีที่คุณสนใจ
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-500">
              เริ่มต้นการเรียนรู้ของคุณที่นี่
              ค้นพบรายวิชาเสรีที่น่าสนใจจากคณะชั้นนำ
            </p>
          </div>
        </motion.section>

        {/* Faculty Grid */}
        <section className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY_DATA.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </section>

        {/* Course Sections */}
        {FACULTY_DATA.map((faculty) => (
          <section key={faculty.id} className="py-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
                  {faculty.name}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  ดูรายวิชาเสรีทั้งหมดจาก {faculty.name}
                </p>
              </div>

              <Button
                variant="ghost"
                className="mt-4 sm:mt-0 group hover:bg-gray-50"
                asChild
              >
                <Link href={`/faculty/${faculty.id}/courses`}>
                  <span>ดูทั้งหมด</span>
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="w-full  ">
                {coursesData[faculty.id]?.length > 0 ? (
                  <div className=" w-11/12 mx-auto">
                    <CourseCarousel courses={coursesData[faculty.id]} />

                  </div>
              ) : (
                <div className="rounded-lg bg-gray-50 p-8 ">
                  <p className="text-gray-500 text-center">
                    ขออภัย ขณะนี้ยังไม่สำหรับ {faculty.name}
                  </p>
                </div>
              )}
                
              </div>
        
          </section>
        ))}
      </div>
    </div>
  );
}

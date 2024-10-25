// app/(main)/faculties/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FACULTIES = [
  {
    id: "ED",
    name: "คณะศึกษาศาสตร์",
    nameEn: "education",
    description: "เรียนรู้ศาสตร์แห่งการศึกษา พัฒนาบุคลากรทางการศึกษา",
    courseCount: 12, // ตัวอย่างจำนวนรายวิชา
    image: "/images/faculties/education.jpg" // ต้องเพิ่มรูปจริง
  },
  {
    id: "EN",
    name: "คณะวิศวกรรมศาสตร์",
    nameEn: "engineering",
    description: "พัฒนาเทคโนโลยีและนวัตกรรมทางวิศวกรรม",
    courseCount: 15,
    image: "/images/faculties/engineering.jpg"
  },
  // เพิ่มคณะอื่นๆ ตามต้องการ
];

export default function FacultiesPage() {
  return (
    <div className="py-8 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          คณะทั้งหมด
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          เลือกดูรายวิชาเสรีจากคณะที่คุณสนใจ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FACULTIES.map((faculty) => (
          <Link
            key={faculty.id}
            href={`/faculties/${faculty.nameEn}/free-courses`}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl 
                     transition-all duration-300 overflow-hidden"
          >
            {/* รูปภาพคณะ */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </div>

            {/* ข้อมูลคณะ */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {faculty.name}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {faculty.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {faculty.courseCount} รายวิชาเสรี
                </span>
                <div className="flex items-center text-primary gap-1 group-hover:gap-2 transition-all">
                  <span>ดูรายวิชา</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Section สำหรับการค้นหาหรือ filter */}
      <div className="mt-12 bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">ค้นหารายวิชาเสรี</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="ค้นหาตามชื่อรายวิชา หรือ รหัสวิชา"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            ค้นหา
          </button>
        </div>
      </div>
    </div>
  );
}
// app/(main)/faculties/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Cog,
  GraduationCap,
  Code,
  FlaskConical,
  Users,
  Stethoscope,
  BookOpen,
  Microscope,
  Leaf,
  Pill,
  Shield,
  Building,
  Paintbrush,
  Globe,
  DollarSign,
  Calculator,
  Laptop,
  Languages,
  Scale,
  TestTubeDiagonal,
  Binary,
  Clipboard,
} from "lucide-react";
import FacultyCard from "@/components/CourseCard/FacultyCard";

const FACULTY_DATA = [
  {
    id: "ED",
    name: "คณะศึกษาศาสตร์",
    nameEn: "Faculty of Education",
    description: "เรียนรู้ศาสตร์แห่งการศึกษา พัฒนาบุคลากรทางการศึกษา",
    courseCount: 12,
    image: "/images/faculties/education.jpg",
    icon: GraduationCap,
    accent: "from-orange-100 to-yellow-100",
    borderAccent: "group-hover:border-orange-300",
  },
  {
    id: "EN",
    name: "คณะวิศวกรรมศาสตร์",
    nameEn: "engineering",
    description: "พัฒนาเทคโนโลยีและนวัตกรรมทางวิศวกรรม",
    courseCount: 15,
    image: "/images/faculties/engineering.jpg",
    icon: Cog,
    accent: "from-red-100 to-red-200",
    borderAccent: "group-hover:border-red-300",
  },
  {
    id: "SC",
    name: "คณะวิทยาศาสตร์",
    nameEn: "sciences",
    description: "เรียนรู้และวิจัยด้านวิทยาศาสตร์เพื่อพัฒนาสังคม",
    courseCount: 20,
    image: "/images/faculties/science.jpg",
    icon: FlaskConical,
    accent: "from-yellow-50 to-yellow-100",
    borderAccent: "group-hover:border-yellow-200",
  },
  {
    id: "AG",
    name: "คณะเกษตรศาสตร์",
    nameEn: "agriculture",
    description: "ศึกษาวิธีการเกษตรสมัยใหม่ พัฒนาอุตสาหกรรมเกษตร",
    courseCount: 18,
    image: "/images/faculties/agriculture.jpg",
    icon: Leaf,
    accent: "from-green-50 to-green-100",
    borderAccent: "group-hover:border-green-200",
  },
  {
    id: "NU",
    name: "คณะพยาบาลศาสตร์",
    nameEn: "nursing",
    description: "พัฒนาบุคลากรการพยาบาลอย่างมีคุณภาพ",
    courseCount: 10,
    image: "/images/faculties/nursing.jpg",
    icon: Stethoscope,
    accent: "from-blue-50 to-cyan-100",
    borderAccent: "group-hover:border-cyan-200",
  },
  {
    id: "MD",
    name: "คณะแพทยศาสตร์",
    nameEn: "medicine",
    description: "มุ่งเน้นการศึกษาด้านการแพทย์และการรักษา",
    courseCount: 25,
    image: "/images/faculties/medicine.jpg",
    icon: Users,
    accent: "from-green-50 to-green-100",
    borderAccent: "group-hover:border-green-200",
  },
  {
    id: "HS",
    name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
    nameEn: "humanities",
    description: "ศึกษาและพัฒนาทางด้านมนุษยศาสตร์และสังคม",
    courseCount: 30,
    image: "/images/faculties/humanities.jpg",
    icon: BookOpen,
    accent: "from-gray-50 to-gray-100",
    borderAccent: "group-hover:border-gray-200",
  },
  {
    id: "MT",
    name: "คณะเทคนิคการแพทย์",
    nameEn: "medical_tech",
    description: "เน้นการศึกษาวิทยาศาสตร์การแพทย์และเทคนิคที่ทันสมัย",
    courseCount: 15,
    image: "/images/faculties/medical_technology.jpg",
    icon: Microscope,
    accent: "from-blue-50 to-blue-100",
    borderAccent: "group-hover:border-blue-200",
  },
  {
    id: "GS",
    name: "บัณฑิตวิทยาลัย",
    nameEn: "graduate_studies",
    description: "ส่งเสริมการศึกษาระดับบัณฑิตศึกษา",
    courseCount: 5,
    image: "/images/faculties/graduate_school.jpg",
    icon: Building,
    accent: "from-gray-50 to-gray-100",
    borderAccent: "group-hover:border-gray-200",
  },
  {
    id: "PH",
    name: "คณะสาธารณสุขศาสตร์",
    nameEn: "public_health",
    description: "พัฒนาบุคลากรด้านสาธารณสุขเพื่อบริการสังคม",
    courseCount: 22,
    image: "/images/faculties/public_health.jpg",
    icon: Clipboard,
    accent: "from-pink-50 to-pink-100",
    borderAccent: "group-hover:border-pink-200",
  },
  {
    id: "DE",
    name: "คณะทันตแพทยศาสตร์",
    nameEn: "dentistry",
    description: "ศึกษาและฝึกฝนด้านทันตแพทยศาสตร์",
    courseCount: 12,
    image: "/images/faculties/dentistry.jpg",
    icon: Shield,
    accent: "from-purple-50 to-purple-100",
    borderAccent: "group-hover:border-purple-200",
  },
  {
    id: "PHM",
    name: "คณะเภสัชศาสตร์",
    nameEn: "pharmacy",
    description: "ศึกษาด้านเภสัชศาสตร์เพื่อพัฒนาการรักษา",
    courseCount: 18,
    image: "/images/faculties/pharmacy.jpg",
    icon: Pill,
    accent: "from-green-50 to-green-100",
    borderAccent: "group-hover:border-green-200",
  },
  {
    id: "TC",
    name: "คณะเทคโนโลยี",
    nameEn: "technology",
    description: "พัฒนาเทคโนโลยีสมัยใหม่สู่การใช้งานในหลากหลายสาขา",
    courseCount: 16,
    image: "/images/faculties/technology.jpg",
    icon: Laptop,
    accent: "from-red-50 to-red-100",
    borderAccent: "group-hover:border-red-200",
  },
  {
    id: "VM",
    name: "คณะสัตวแพทยศาสตร์",
    nameEn: "veterinary_science",
    description: "ศึกษาวิทยาศาสตร์สัตวแพทย์และสุขภาพสัตว์",
    courseCount: 14,
    image: "/images/faculties/veterinary_medicine.jpg",
    icon: Stethoscope,
    accent: "from-blue-50 to-blue-100",
    borderAccent: "group-hover:border-blue-200",
  },
  {
    id: "AR",
    name: "คณะสถาปัตยกรรมศาสตร์",
    nameEn: "architecture",
    description: "สร้างสรรค์ศิลปะและวิชาชีพด้านสถาปัตยกรรม",
    courseCount: 17,
    image: "/images/faculties/architecture.jpg",
    icon: Building,
    accent: "from-brown-50 to-brown-100",
    borderAccent: "group-hover:border-brown-200",
  },
  {
    id: "BA",
    name: "คณะบริหารธุรกิจและการบัญชี",
    nameEn: "business_admin",
    description: "พัฒนาธุรกิจและการจัดการบัญชี",
    courseCount: 20,
    image: "/images/faculties/business.jpg",
    icon: DollarSign,
    accent: "from-teal-50 to-teal-100",
    borderAccent: "group-hover:border-teal-200",
  },
  {
    id: "FA",
    name: "คณะศิลปกรรมศาสตร์",
    nameEn: "fine_arts",
    description: "มุ่งเน้นการสร้างสรรค์ด้านศิลปกรรม",
    courseCount: 13,
    image: "/images/faculties/fine_arts.jpg",
    icon: Paintbrush,
    accent: "from-gray-200 to-gray-400",
    borderAccent: "group-hover:border-gray-700",
  },
  {
    id: "LA",
    name: "คณะนิติศาสตร์",
    nameEn: "law",
    description: "ศึกษาและพัฒนากฎหมายเพื่อสังคม",
    courseCount: 19,
    image: "/images/faculties/law.jpg",
    icon: Scale,
    accent: "from-yellow-50 to-yellow-100",
    borderAccent: "group-hover:border-yellow-200",
  },
  {
    id: "EC",
    name: "คณะเศรษฐศาสตร์",
    nameEn: "economics",
    description: "ศึกษาและวิจัยด้านเศรษฐศาสตร์",
    courseCount: 14,
    image: "/images/faculties/economics.jpg",
    icon: Calculator,
    accent: "from-yellow-50 to-yellow-100",
    borderAccent: "group-hover:border-yellow-200",
  },
  {
    id: "ID",
    name: "คณะสหวิทยาการ",
    nameEn: "interdisciplinary",
    description: "ศึกษาและบูรณาการศาสตร์ต่าง ๆ เข้าด้วยกัน",
    courseCount: 11,
    image: "/images/faculties/interdisciplinary.jpg",
    icon: TestTubeDiagonal,
    accent: "from-indigo-50 to-indigo-100",
    borderAccent: "group-hover:border-indigo-200",
  },
];

export default function FacultiesPage() {
  return (
    <div className="py-8 max-w-[86rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section สำหรับการค้นหาหรือ filter
       <div className="mb-12 bg-gray-50 rounded-xl p-6">
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
      </div> */}

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          คณะทั้งหมด
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          เลือกดูรายวิชาเสรีจากคณะที่คุณสนใจ
        </p>
      </div>

      <section className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY_DATA.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </section>
    </div>
  );
}

// // app/(main)/faculties/page.tsx
// "use client";
// import React from "react";
// import Link from "next/link";
// import { ArrowRight, Briefcase } from "lucide-react";
// import {
//   Cog,
//   GraduationCap,
//   Code,
//   FlaskConical,
//   Users,
//   Stethoscope,
//   BookOpen,
//   Microscope,
//   Leaf,
//   Pill,
//   Shield,
//   Building,
//   Paintbrush,
//   Globe,
//   DollarSign,
//   Calculator,
//   Laptop,
//   Languages,
//   Scale,
//   TestTubeDiagonal,
//   Binary,
//   Clipboard,
// } from "lucide-react";
// import FacultyCard from "@/components/CourseCard/FacultyCard";

// const FACULTY_DATA = [
//   {
//     id: "ED",
//     name: "คณะศึกษาศาสตร์",
//     nameEn: "Faculty of Education",
//     description: "เรียนรู้ศาสตร์แห่งการศึกษา พัฒนาบุคลากรทางการศึกษา",
//     courseCount: 12,
//     image: "/images/faculties/education.jpg",
//     icon: GraduationCap,
//     accent: "from-orange-100 to-yellow-100",
//     borderAccent: "group-hover:border-orange-300",
//   },
//   {
//     id: "EN",
//     name: "คณะวิศวกรรมศาสตร์",
//     nameEn: "Faculty of Engineering",
//     description: "พัฒนาเทคโนโลยีและนวัตกรรมทางวิศวกรรม",
//     courseCount: 15,
//     image: "/images/faculties/engineering.jpg",
//     icon: Cog,
//     accent: "from-red-100 to-red-200",
//     borderAccent: "group-hover:border-red-300",
//   },
//   {
//     id: "SC",
//     name: "คณะวิทยาศาสตร์",
//     nameEn: "Faculty of Science",
//     description: "เรียนรู้และวิจัยด้านวิทยาศาสตร์เพื่อพัฒนาสังคม",
//     courseCount: 20,
//     image: "/images/faculties/science.jpg",
//     icon: FlaskConical,
//     accent: "from-yellow-50 to-yellow-100",
//     borderAccent: "group-hover:border-yellow-200",
//   },
//   {
//     id: "AG",
//     name: "คณะเกษตรศาสตร์",
//     nameEn: "Faculty of Agriculture",
//     description: "ศึกษาวิธีการเกษตรสมัยใหม่ พัฒนาอุตสาหกรรมเกษตร",
//     courseCount: 18,
//     image: "/images/faculties/agriculture.jpg",
//     icon: Leaf,
//     accent: "from-green-50 to-green-100",
//     borderAccent: "group-hover:border-green-200",
//   },
//   {
//     id: "LI",
//     name: "สถาบันภาษา",
//     nameEn: "Language Institute",
//     description: "พัฒนาทักษะภาษาสำหรับการศึกษาและการทำงาน",
//     image: "/images/faculties/interdisciplinary.jpg",
//     icon: Languages,
//     accent: "from-orange-50 to-orange-100",
//     borderAccent: "group-hover:border-orange-200",
//   },
//   {
//     id: "CM",
//     name: "วิทยาลัยบัณฑิตศึกษาการจัดการ",
//     nameEn: "College of Management",
//     description: "เสริมทักษะการจัดการและการเป็นผู้นำ",
//     image: "/images/faculties/management.jpg",
//     icon: Briefcase, // ไอคอนเกี่ยวกับการจัดการและธุรกิจ
//     accent: "from-blue-50 to-blue-100",
//     borderAccent: "group-hover:border-blue-200",
//   },
//   {
//     id: "GE",
//     name: "สถาบันการสอนวิชาศึกษาทั่วไป",
//     nameEn: "General Education Institute",
//     description: "พัฒนาทักษะความรู้รอบตัวและการคิดเชิงวิพากษ์",
//     image: "/images/faculties/general_education.jpg",
//     icon: BookOpen, // ไอคอนเกี่ยวกับการศึกษาและความรู้
//     accent: "from-yellow-50 to-yellow-100",
//     borderAccent: "group-hover:border-yellow-200",
//   },
//   {
//     id: "CP",
//     name: "วิทยาลัยการคอมพิวเตอร์",
//     nameEn: "College of Computer Science",
//     description: "ศึกษาเทคโนโลยีและนวัตกรรมด้านคอมพิวเตอร์",
//     image: "/images/faculties/computer_science.jpg",
//     icon: Code, // ไอคอนที่เกี่ยวข้องกับคอมพิวเตอร์และการเขียนโปรแกรม
//     accent: "from-purple-50 to-purple-100",
//     borderAccent: "group-hover:border-purple-200",
//   }
// ,
//   {
//     id: "NU",
//     name: "คณะพยาบาลศาสตร์",
//     nameEn: "Faculty of Nursing",
//     description: "พัฒนาบุคลากรการพยาบาลอย่างมีคุณภาพ",
//     courseCount: 10,
//     image: "/images/faculties/nursing.jpg",
//     icon: Stethoscope,
//     accent: "from-blue-50 to-cyan-100",
//     borderAccent: "group-hover:border-cyan-200",
//   },
//   {
//     id: "MD",
//     name: "คณะแพทยศาสตร์",
//     nameEn: "Faculty of Medicine",
//     description: "มุ่งเน้นการศึกษาด้านการแพทย์และการรักษา",
//     courseCount: 25,
//     image: "/images/faculties/medicine.jpg",
//     icon: Users,
//     accent: "from-green-50 to-green-100",
//     borderAccent: "group-hover:border-green-200",
//   },
//   {
//     id: "HS",
//     name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
//     nameEn: "Faculty of Humanities and Social Sciences",
//     description: "ศึกษาและพัฒนาทางด้านมนุษยศาสตร์และสังคม",
//     courseCount: 30,
//     image: "/images/faculties/humanities.jpg",
//     icon: BookOpen,
//     accent: "from-gray-50 to-gray-100",
//     borderAccent: "group-hover:border-gray-200",
//   },
//   {
//     id: "MT",
//     name: "คณะเทคนิคการแพทย์",
//     nameEn: "Faculty of Medical Technology",
//     description: "เน้นการศึกษาวิทยาศาสตร์การแพทย์และเทคนิคที่ทันสมัย",
//     courseCount: 15,
//     image: "/images/faculties/medical_technology.jpg",
//     icon: Microscope,
//     accent: "from-blue-50 to-blue-100",
//     borderAccent: "group-hover:border-blue-200",
//   },
//   {
//     id: "GS",
//     name: "บัณฑิตวิทยาลัย",
//     nameEn: "Graduate School",
//     description: "ส่งเสริมการศึกษาระดับบัณฑิตศึกษา",
//     courseCount: 5,
//     image: "/images/faculties/graduate_school.jpg",
//     icon: Building,
//     accent: "from-gray-50 to-gray-100",
//     borderAccent: "group-hover:border-gray-200",
//   },
//   {
//     id: "PH",
//     name: "คณะสาธารณสุขศาสตร์",
//     nameEn: "Faculty of Public Health",
//     description: "พัฒนาบุคลากรด้านสาธารณสุขเพื่อบริการสังคม",
//     courseCount: 22,
//     image: "/images/faculties/public_health.jpg",
//     icon: Clipboard,
//     accent: "from-pink-50 to-pink-100",
//     borderAccent: "group-hover:border-pink-200",
//   },
//   {
//     id: "DE",
//     name: "คณะทันตแพทยศาสตร์",
//     nameEn: "Faculty of Dentistry",
//     description: "ศึกษาและฝึกฝนด้านทันตแพทยศาสตร์",
//     courseCount: 12,
//     image: "/images/faculties/dentistry.jpg",
//     icon: Shield,
//     accent: "from-purple-50 to-purple-100",
//     borderAccent: "group-hover:border-purple-200",
//   },
//   {
//     id: "PHM",
//     name: "คณะเภสัชศาสตร์",
//     nameEn: "Faculty of Pharmacy",
//     description: "ศึกษาด้านเภสัชศาสตร์เพื่อพัฒนาการรักษา",
//     courseCount: 18,
//     image: "/images/faculties/pharmacy.jpg",
//     icon: Pill,
//     accent: "from-green-50 to-green-100",
//     borderAccent: "group-hover:border-green-200",
//   },
//   {
//     id: "TC",
//     name: "คณะเทคโนโลยี",
//     nameEn: "Faculty of Technology",
//     description: "พัฒนาเทคโนโลยีสมัยใหม่สู่การใช้งานในหลากหลายสาขา",
//     courseCount: 16,
//     image: "/images/faculties/technology.jpg",
//     icon: Laptop,
//     accent: "from-red-50 to-red-100",
//     borderAccent: "group-hover:border-red-200",
//   },
//   {
//     id: "VM",
//     name: "คณะสัตวแพทยศาสตร์",
//     nameEn: "Faculty of Veterinary Science",
//     description: "ศึกษาวิทยาศาสตร์สัตวแพทย์และสุขภาพสัตว์",
//     courseCount: 14,
//     image: "/images/faculties/veterinary_medicine.jpg",
//     icon: Stethoscope,
//     accent: "from-blue-50 to-blue-100",
//     borderAccent: "group-hover:border-blue-200",
//   },
//   {
//     id: "AR",
//     name: "คณะสถาปัตยกรรมศาสตร์",
//     nameEn: "Faculty of Architecture",
//     description: "สร้างสรรค์ศิลปะและวิชาชีพด้านสถาปัตยกรรม",
//     courseCount: 17,
//     image: "/images/faculties/architecture.jpg",
//     icon: Building,
//     accent: "from-brown-50 to-brown-100",
//     borderAccent: "group-hover:border-brown-200",
//   },
//   {
//     id: "BA",
//     name: "คณะบริหารธุรกิจและการบัญชี",
//     nameEn: "Faculty of Business Administration and Accounting",
//     description: "พัฒนาธุรกิจและการจัดการบัญชี",
//     courseCount: 20,
//     image: "/images/faculties/business.jpg",
//     icon: DollarSign,
//     accent: "from-teal-50 to-teal-100",
//     borderAccent: "group-hover:border-teal-200",
//   },
//   {
//     id: "FA",
//     name: "คณะศิลปกรรมศาสตร์",
//     nameEn: "Faculty of Fine Arts",
//     description: "มุ่งเน้นการสร้างสรรค์ด้านศิลปกรรม",
//     courseCount: 13,
//     image: "/images/faculties/fine_arts.jpg",
//     icon: Paintbrush,
//     accent: "from-gray-200 to-gray-400",
//     borderAccent: "group-hover:border-gray-700",
//   },
//   {
//     id: "LA",
//     name: "คณะนิติศาสตร์",
//     nameEn: "Faculty of Law",
//     description: "ศึกษาและพัฒนากฎหมายเพื่อสังคม",
//     courseCount: 19,
//     image: "/images/faculties/law.jpg",
//     icon: Scale,
//     accent: "from-yellow-50 to-yellow-100",
//     borderAccent: "group-hover:border-yellow-200",
//   },
//   {
//     id: "EC",
//     name: "คณะเศรษฐศาสตร์",
//     nameEn: "Faculty of Economics",
//     description: "ศึกษาและวิจัยด้านเศรษฐศาสตร์",
//     courseCount: 14,
//     image: "/images/faculties/economics.jpg",
//     icon: Calculator,
//     accent: "from-yellow-50 to-yellow-100",
//     borderAccent: "group-hover:border-yellow-200",
//   },
//   {
//     id: "ID",
//     name: "คณะสหวิทยาการ",
//     nameEn: "Faculty of Interdisciplinary Studies",
//     description: "ศึกษาและบูรณาการศาสตร์ต่าง ๆ เข้าด้วยกัน",
//     courseCount: 11,
//     image: "/images/faculties/interdisciplinary.jpg",
//     icon: TestTubeDiagonal,
//     accent: "from-indigo-50 to-indigo-100",
//     borderAccent: "group-hover:border-indigo-200",
//   },
// ];

// export default function FacultiesPage() {
//   return (
//     <div className="py-8 max-w-[86rem] mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="mb-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//           คณะทั้งหมด
//         </h1>
//         <p className="mt-4 text-gray-600 text-lg">
//           เลือกดูรายวิชาเสรีจากคณะที่คุณสนใจ
//         </p>
//       </div>

//       <section className="py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {FACULTY_DATA.map((faculty) => (
//             <FacultyCard key={faculty.id} faculty={faculty} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useMemo } from "react";
// import { Search } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import FacultyCard from "@/components/CourseCard/FacultyCard";
// import { FACULTY_DATA } from "./data";

// export default function FacultiesPage() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredFaculties = useMemo(() => {
//     return FACULTY_DATA.filter(
//       (faculty) =>
//         faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         faculty.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         faculty.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [searchTerm]);

//   return (
//     <div className="py-8 max-w-[86rem] mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="mb-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//           คณะทั้งหมด
//         </h1>
//         <p className="mt-4 text-gray-600 text-lg">
//           เลือกดูรายวิชาเสรีจากคณะที่คุณสนใจ
//         </p>

//         {/* Search Section */}
//         <div className="mt-6 max-w-2xl relative">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//             <Input
//               type="text"
//               placeholder="ค้นหาคณะที่สนใจ..."
//               className="w-full pl-10 pr-4 py-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       <section className="py-8  min-w-[86rem] mx-auto ">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredFaculties.length > 0 ? (
//             filteredFaculties.map((faculty) => (
//               <FacultyCard key={faculty.id} faculty={faculty} />
//             ))
//           ) : (
//             <div className=" col-span-full text-center py-8">
//               <p className="text-gray-500 text-lg  ">
//                 ไม่พบคณะที่ค้นหา กรุณาลองใหม่อีกครั้ง
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useMemo } from "react";
// import { Search } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import FacultyCard from "@/components/CourseCard/FacultyCard";
// import { FACULTY_DATA } from "./data";

// export default function FacultiesPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("nameAsc");

//   const sortedFaculties = useMemo(() => {
//     return [...FACULTY_DATA].sort((a, b) => {
//       const nameA = a.name.toLowerCase();
//       const nameB = b.name.toLowerCase();
//       const nameEnA = a.nameEn.toLowerCase();
//       const nameEnB = b.nameEn.toLowerCase();

//       switch (sortOrder) {
//         case "nameAsc":
//           return nameA.localeCompare(nameB);
//         case "nameDesc":
//           return nameB.localeCompare(nameA);
//         case "nameEnAsc":
//           return nameEnA.localeCompare(nameEnB);
//         case "nameEnDesc":
//           return nameEnB.localeCompare(nameEnA);
//         default:
//           return 0;
//       }
//     });
//   }, [sortOrder]);

//   const filteredFaculties = useMemo(() => {
//     return sortedFaculties.filter(
//       (faculty) =>
//         faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         faculty.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         faculty.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [searchTerm, sortedFaculties]);

//   return (
//     <div className="py-8 max-w-[86rem] mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="mb-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//           คณะทั้งหมด / All Faculties
//         </h1>
//         <p className="mt-4 text-gray-600 text-lg">
//           เลือกดูรายวิชาเสรีจากคณะที่คุณสนใจ / Browse elective courses from the faculty you are interested in.
//         </p>

//         {/* Search Section */}
//         <div className="mt-6 max-w-2xl relative">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//             <Input
//               type="text"
//               placeholder="ค้นหาคณะที่สนใจ... / Search for a faculty..."
//               className="w-full pl-10 pr-4 py-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Sort Section */}
//         <div className="mt-6 flex items-center space-x-4">
//           <label className="text-gray-600 font-medium">เรียงลำดับ / Sort by:</label>
//           <select
//             className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option value="nameAsc">ชื่อคณะ (ก-ฮ)</option>
//             <option value="nameDesc">ชื่อคณะ (ฮ-ก)</option>
//             <option value="nameEnAsc">Faculty Name (A-Z)</option>
//             <option value="nameEnDesc">Faculty Name (Z-A)</option>
//           </select>
//         </div>
//       </div>

//       <section className="py-8 min-w-[86rem] mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filteredFaculties.length > 0 ? (
//             filteredFaculties.map((faculty) => (
//               <FacultyCard key={faculty.id} faculty={faculty} />
//             ))
//           ) : (
//             <div className="col-span-full text-center py-8">
//               <p className="text-gray-500 text-lg">
//                 ไม่พบคณะที่ค้นหา กรุณาลองใหม่อีกครั้ง / No faculties found. Please try again.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
import React, { useState, useMemo } from "react";
import { Search, GraduationCap, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FacultyCard from "@/components/CourseCard/FacultyCard";
import { FACULTY_DATA } from "./data";
import { motion } from "framer-motion";

export default function FacultiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("nameAsc");

  const sortedFaculties = useMemo(() => {
    return [...FACULTY_DATA].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      const nameEnA = a.nameEn.toLowerCase();
      const nameEnB = b.nameEn.toLowerCase();

      switch (sortOrder) {
        case "nameAsc":
          return nameA.localeCompare(nameB);
        case "nameDesc":
          return nameB.localeCompare(nameA);
        case "nameEnAsc":
          return nameEnA.localeCompare(nameEnB);
        case "nameEnDesc":
          return nameEnB.localeCompare(nameEnA);
        default:
          return 0;
      }
    });
  }, [sortOrder]);

  const filteredFaculties = useMemo(() => {
    return sortedFaculties.filter(
      (faculty) =>
        faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, sortedFaculties]);

  return (
    <div className="min-h-screen ">
      <div className="container  mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-2 sm:py-4 lg:py-4">
        <Card className="mb-8 bg-gradient-to-r from-blue-200/10 to-purple-200/10 border-none">
          <CardHeader className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-gray-600" />
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl text-slate-700  bg-white  bg-clip-text ">
                คณะทั้งหมด / All Faculties
              </CardTitle>
            </div>
            <CardDescription className="text-lg text-gray-600">
              เลือกดูรายวิชาเสรีจากคณะที่คุณสนใจ / Browse elective courses from
              the faculty you are interested in.
            </CardDescription>
          </CardHeader>
        </Card>
        </motion.section>

        {/* Search and Filter Section */}
        <div className="grid md:grid-cols-[1fr,auto] gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="ค้นหาคณะที่สนใจ... / Search for a faculty..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle>Filter Options</SheetTitle>
                  <SheetDescription>
                    Adjust your faculty viewing preferences
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4">
                  <Select value={sortOrder} onValueChange={setSortOrder}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nameAsc">ชื่อคณะ (ก-ฮ)</SelectItem>
                      <SelectItem value="nameDesc">ชื่อคณะ (ฮ-ก)</SelectItem>
                      <SelectItem value="nameEnAsc">
                        Faculty Name (A-Z)
                      </SelectItem>
                      <SelectItem value="nameEnDesc">
                        Faculty Name (Z-A)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Filter */}
          <div className="hidden md:block">
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[200px] h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nameAsc">ชื่อคณะ (ก-ฮ)</SelectItem>
                <SelectItem value="nameDesc">ชื่อคณะ (ฮ-ก)</SelectItem>
                <SelectItem value="nameEnAsc">Faculty Name (A-Z)</SelectItem>
                <SelectItem value="nameEnDesc">Faculty Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFaculties.length > 0 ? (
            filteredFaculties.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))
          ) : (
            <div className="col-span-full flex justify-center">
              <Card className="bg-gray-50 border-dashed max-w-md sm:max-w-lg lg:min-w-[86rem] text-center">
                <CardHeader className="space-y-4 items-center text-center">
                  <Search className="h-12 w-12 text-gray-400" />
                  <CardTitle>ไม่พบคณะที่ค้นหา / No Results Found</CardTitle>
                  <CardDescription>
                    กรุณาลองใช้คำค้นหาอื่น / Try adjusting your search terms
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import { notFound } from 'next/navigation';
// import CourseCard from '@/components/CourseCard/CourseCard';
// import { type CourseInfo } from '@/types/courseType';

// // สร้าง type สำหรับ params
// interface PageProps {
//   params: {
//     facultyId: string;
//   };
// }

// const FACULTY_MAP = {
//   ED: {
//     name: "คณะศึกษาศาสตร์",
//   },
//   EN: {
//     name: "คณะวิศวกรรมศาสตร์",
//   },
//   SC: {
//     name: "คณะวิทยาศาสตร์",
//   },
//   AG: {
//     name: "คณะเกษตรศาสตร์",
//   },
//   NU: {
//     name: "คณะพยาบาลศาสตร์",
//   },
//   MD: {
//     name: "คณะแพทยศาสตร์",
//   },
//   HU: {
//     name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
//   },
//   MT: {
//     name: "คณะเทคนิคการแพทย์",
//   },
//   GS: {
//     name: "บัณฑิตวิทยาลัย",
//   },
//   PH: {
//     name: "คณะสาธารณสุขศาสตร์",
//   },
//   DE: {
//     name: "คณะทันตแพทยศาสตร์",
//   },
//   PHM: {
//     name: "คณะเภสัชศาสตร์",
//   },
//   TC: {
//     name: "คณะเทคโนโลยี",
//   },
//   VM: {
//     name: "คณะสัตวแพทยศาสตร์",
//   },
//   AR: {
//     name: "คณะสถาปัตยกรรมศาสตร์",
//   },
//   BA: {
//     name: "คณะบริหารธุรกิจและการบัญชี",
//   },
//   FA: {
//     name: "คณะศิลปกรรมศาสตร์",
//   },
//   LA: {
//     name: "คณะนิติศาสตร์",
//   },
//   EC: {
//     name: "คณะเศรษฐศาสตร์",
//   },
//   ID: {
//     name: "คณะสหวิทยาการ",
//   },
// } as const;

// export default async function FacultyCoursesPage({ params }: PageProps) {
//   const faculty = FACULTY_MAP[params.facultyId as keyof typeof FACULTY_MAP];

//   if (!faculty) {
//     notFound();
//   }

//   // TODO: Fetch courses for this faculty
//   const courses: CourseInfo[] =
//   [
//   ]; // Replace with actual data fetching

//   return (
//     <div className="py-8 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="mb-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//           รายวิชาเสรีทั้งหมดจาก{faculty.name}
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {courses.map((course) => (
//           <CourseCard key={course.courseID} {...course} />
//         ))}
//       </div>

//       {courses.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-gray-500">ไม่พบรายวิชาเสรีในขณะนี้</p>
//         </div>
//       )}
//     </div>
//   );
// }

// ก่อนทำ filter กับค้นหา
// import React from 'react';
// import { notFound } from 'next/navigation';
// import CourseCard from '@/components/CourseCard/CourseCard';
// import { type CourseInfo } from '@/types/courseType';

// // กำหนด type สำหรับ params
// interface PageProps {
//   params: {
//     facultyId: string;
//   };
// }

// const FACULTY_MAP = {
//   ED: { name: "คณะศึกษาศาสตร์" },
//   EN: { name: "คณะวิศวกรรมศาสตร์" },
//   SC: { name: "คณะวิทยาศาสตร์" },
//   AG: { name: "คณะเกษตรศาสตร์" },
//   NU: { name: "คณะพยาบาลศาสตร์" },
//   MD: { name: "คณะแพทยศาสตร์" },
//   HU: { name: "คณะมนุษยศาสตร์และสังคมศาสตร์" },
//   MT: { name: "คณะเทคนิคการแพทย์" },
//   GS: { name: "บัณฑิตวิทยาลัย" },
//   PH: { name: "คณะสาธารณสุขศาสตร์" },
//   DE: { name: "คณะทันตแพทยศาสตร์" },
//   PHM: { name: "คณะเภสัชศาสตร์" },
//   TC: { name: "คณะเทคโนโลยี" },
//   VM: { name: "คณะสัตวแพทยศาสตร์" },
//   AR: { name: "คณะสถาปัตยกรรมศาสตร์" },
//   BA: { name: "คณะบริหารธุรกิจและการบัญชี" },
//   FA: { name: "คณะศิลปกรรมศาสตร์" },
//   LA: { name: "คณะนิติศาสตร์" },
//   EC: { name: "คณะเศรษฐศาสตร์" },
//   ID: { name: "คณะสหวิทยาการ" },
// } as const;

// // ข้อมูลรายวิชาแยกตามคณะ
// const coursesData: Record<string, CourseInfo[]> = {
//   ED: [{
//     image: "https://m1r.ai/53CdY.svg",
//     courseName: "นวัตกรรมการศึกษา",
//     description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//     courseID: "ED813001",
//     category: "Innovation",
//     date: "2024",
//     faculty: "คณะศึกษาศาสตร์",
//   },  {
//     image: "https://m1r.ai/53CdY.svg",
//     courseName: "นวัตกรรมการศึกษา",
//     description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//     courseID: "ED813001",
//     category: "Innovation",
//     date: "2024",
//     faculty: "คณะศึกษาศาสตร์",
//   },
//     {
//       image: "https://m1r.ai/3YbL.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },{
//       image: "https://m1r.ai/5KDKN.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },{
//       image: "https://m1r.ai/KSTcJ.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },{
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },
//   ],
//   EN: [
//     {
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: "Digital Engineering",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN813001",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     },{
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: "Digital Engineering",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN813001",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     },{
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: "Digital Engineering",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN813001",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     },{
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: "Digital Engineering",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN813001",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     }
//     // เพิ่มคอร์สเพิ่มเติม...
//   ],
//   SC: [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "Data Science Fundamentals",
//       description: "พื้นฐานวิทยาศาสตร์ข้อมูล",
//       courseID: "SC813001",
//       category: "Data Science",
//       date: "2024",
//       faculty: "คณะวิทยาศาสตร์",
//     },
//     // เพิ่มคอร์สเพิ่มเติม...
//   ],
//   HU: [

//     // เพิ่มคอร์สเพิ่มเติม...
//   ],
// };

// export default async function FacultyCoursesPage({ params }: PageProps) {
//   const faculty = FACULTY_MAP[params.facultyId as keyof typeof FACULTY_MAP];

//   if (!faculty) {
//     notFound();
//   }

//   // ดึงข้อมูลรายวิชาสำหรับคณะที่ระบุ
//   const courses = coursesData[params.facultyId] || [];

//   return (

//     <div className="py-8 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 lg:w-[80rem]">
//       <div className="mb-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//           รายวิชาเสรีทั้งหมดจาก{faculty.name}
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {courses.map((course) => (
//           <CourseCard key={course.courseID} {...course} />
//         ))}
//       </div>

//       {courses.length === 0 && (
//         <div className="rounded-lg bg-gray-50 p-8">
//           <p className="text-gray-500 text-center"
//           >ไม่พบรายวิชาเสรีในขณะนี้</p>
//         </div>
//       )}
//     </div>
//   );
// }

// ค้นหาและ filter รายวิชาเสรี แบบ client
// 'use client';
// import React, { useState } from 'react';
// import { notFound } from 'next/navigation';
// import CourseCard from '@/components/CourseCard/CourseCard';
// import { type CourseInfo } from '@/types/courseType';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';

// // กำหนด type สำหรับ params
// interface PageProps {
//   params: {
//     facultyId: string;
//   };
// }

// const FACULTY_MAP = {
//   ED: { name: "คณะศึกษาศาสตร์" },
//   EN: { name: "คณะวิศวกรรมศาสตร์" },
//   SC: { name: "คณะวิทยาศาสตร์" },
//   AG: { name: "คณะเกษตรศาสตร์" },
//   NU: { name: "คณะพยาบาลศาสตร์" },
//   MD: { name: "คณะแพทยศาสตร์" },
//   HU: { name: "คณะมนุษยศาสตร์และสังคมศาสตร์" },
//   MT: { name: "คณะเทคนิคการแพทย์" },
//   GS: { name: "บัณฑิตวิทยาลัย" },
//   PH: { name: "คณะสาธารณสุขศาสตร์" },
//   DE: { name: "คณะทันตแพทยศาสตร์" },
//   PHM: { name: "คณะเภสัชศาสตร์" },
//   TC: { name: "คณะเทคโนโลยี" },
//   VM: { name: "คณะสัตวแพทยศาสตร์" },
//   AR: { name: "คณะสถาปัตยกรรมศาสตร์" },
//   BA: { name: "คณะบริหารธุรกิจและการบัญชี" },
//   FA: { name: "คณะศิลปกรรมศาสตร์" },
//   LA: { name: "คณะนิติศาสตร์" },
//   EC: { name: "คณะเศรษฐศาสตร์" },
//   ID: { name: "คณะสหวิทยาการ" },
// } as const;

// // ข้อมูลรายวิชาแยกตามคณะ
// const coursesData: Record<string, CourseInfo[]> = {
//   ED: [{
//     image: "https://m1r.ai/53CdY.svg",
//     courseName: "นวัตกรรมการศึกษา",
//     description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//     courseID: "ED813001",
//     category: "Innovation",
//     date: "2024",
//     faculty: "คณะศึกษาศาสตร์",
//   },  {
//     image: "https://m1r.ai/53CdY.svg",
//     courseName: "นวัตกรรมการศึกษา",
//     description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//     courseID: "ED813001",
//     category: "Innovation",
//     date: "2024",
//     faculty: "คณะศึกษาศาสตร์",
//   },
//     {
//       image: "https://m1r.ai/3YbL.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },{
//       image: "https://m1r.ai/5KDKN.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },{
//       image: "https://m1r.ai/KSTcJ.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },{
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },
//   ],
//   EN: [
//     {
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: "Digital Engineering",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN813001",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     },{
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: "Digital Engineering",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN813001",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     },{
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: "Digital Engineering",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN813001",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     },{
//       image: "https://m1r.ai/53CdY.svg",
//       courseName: " Sera",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN814",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     }
//     // เพิ่มคอร์สเพิ่มเติม...
//   ],
//   SC: [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "Data Science Fundamentals",
//       description: "พื้นฐานวิทยาศาสตร์ข้อมูล",
//       courseID: "SC813001",
//       category: "Data Science",
//       date: "2024",
//       faculty: "คณะวิทยาศาสตร์",
//     },
//     // เพิ่มคอร์สเพิ่มเติม...
//   ],
//   HU: [

//     // เพิ่มคอร์สเพิ่มเติม...
//   ],
// };

// export default function FacultyCoursesPage({ params }: PageProps) {
//   const faculty = FACULTY_MAP[params.facultyId as keyof typeof FACULTY_MAP];
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [selectedYear, setSelectedYear] = useState<string>('all');

//   if (!faculty) {
//     notFound();
//   }

//   const courses = coursesData[params.facultyId] || [];

//   // Get unique categories and years from courses
//   const categories = ['all', ...new Set(courses.map(course => course.category))];
//   const years = ['all', ...new Set(courses.map(course => course.date))];

//   // Filter courses based on search query and filters
//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          course.courseID.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
//     const matchesYear = selectedYear === 'all' || course.date === selectedYear;

//     return matchesSearch && matchesCategory && matchesYear;
//   });

//   return (
//     <div className="min-h-screen  py-8">
// <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
//   {/* Header Section */}
//   <Card className="mb-8">
//     <CardHeader>
//       <div className="flex items-center gap-3 mb-2">
//         <BookOpen className="w-8 h-8 text-primary" />
//         <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//           รายวิชาเสรีทั้งหมดจาก{faculty.name}
//         </CardTitle>
//       </div>
//       <div className="text-gray-500">
//         พบทั้งหมด {filteredCourses.length} รายวิชา
//       </div>
//     </CardHeader>

//     <CardContent>
//       {/* Search and Filters Section */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
//         <div className="md:col-span-5 relative">
//           <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//           <Input
//             placeholder="ค้นหารายวิชา, รหัสวิชา..."
//             className="pl-9"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         <div className="md:col-span-3">
//           <Select
//             value={selectedCategory}
//             onValueChange={setSelectedCategory}
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="หมวดหมู่" />
//             </SelectTrigger>
//             <SelectContent>
//               {categories.map((category) => (
//                 <SelectItem key={category} value={category}>
//                   {category === 'all' ? 'ทุกหมวดหมู่' : category}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="md:col-span-3">
//           <Select
//             value={selectedYear}
//             onValueChange={setSelectedYear}
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="ปีการศึกษา" />
//             </SelectTrigger>
//             <SelectContent>
//               {years.map((year) => (
//                 <SelectItem key={year} value={year}>
//                   {year === 'all' ? 'ทุกปีการศึกษา' : year}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="md:col-span-1">
//           <Button
//             variant="outline"
//             className="w-full"
//             onClick={() => {
//               setSearchQuery('');
//               setSelectedCategory('all');
//               setSelectedYear('all');
//             }}
//           >
//             <SlidersHorizontal className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//             {/* Active Filters */}
//             {(selectedCategory !== 'all' || selectedYear !== 'all' || searchQuery) && (
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {selectedCategory !== 'all' && (
//                   <Badge variant="secondary">
//                     หมวดหมู่: {selectedCategory}
//                   </Badge>
//                 )}
//                 {selectedYear !== 'all' && (
//                   <Badge variant="secondary">
//                     ปีการศึกษา: {selectedYear}
//                   </Badge>
//                 )}
//                 {searchQuery && (
//                   <Badge variant="secondary">
//                     ค้นหา: {searchQuery}
//                   </Badge>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {/* Courses Grid */}
//         {filteredCourses.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredCourses.map((course) => (
//               <CourseCard key={course.courseID} {...course} />
//             ))}
//           </div>
//         ) : (
//           <Card>
//             <CardContent className="flex flex-col items-center justify-center py-12">
//               <BookOpen className="w-12 h-12 text-gray-400 mb-4" />
//               <p className="text-gray-500 text-center mb-2">ไม่พบรายวิชาที่ตรงกับเงื่อนไขการค้นหา</p>
//               <Button
//                 variant="outline"
//                 onClick={() => {
//                   setSearchQuery('');
//                   setSelectedCategory('all');
//                   setSelectedYear('all');
//                 }}
//               >
//                 ล้างตัวกรองทั้งหมด
//               </Button>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }


import { getCoursesByFacultyId } from "@/lib/db/courses";
import { CoursesContent } from "@/app/(faculties)/faculties/[facultyId]/courses/CoursesContent";


export default async function FacultyCoursesPage({
  params,
}: {
  params: { facultyId: string };
}) {
  // ดึงข้อมูลที่ server
  const courses = await getCoursesByFacultyId(params.facultyId);

  return (
    <CoursesContent facultyId={params.facultyId} initialCourses={courses} />
  );
}


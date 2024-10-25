// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   ChevronRight,
//   GraduationCap,
//   BookOpen,
//   Code,
//   FlaskConical,
//   Users,
// } from "lucide-react";

// const FACULTY_DATA = [
//   {
//     name: "คณะศึกษาศาสตร์",
//     nameEn: "Faculty of Education",
//     id: "ED",
//     icon: GraduationCap,
//     accent: "from-blue-50 to-indigo-50",
//     borderAccent: "group-hover:border-blue-200",
//     description: "นวัตกรรมการศึกษาและการพัฒนาการเรียนรู้",
//   },
//   {
//     name: "คณะวิศวกรรมศาสตร์",
//     nameEn: "Faculty of Engineering",
//     id: "EN",
//     icon: Code,
//     accent: "from-emerald-50 to-green-50",
//     borderAccent: "group-hover:border-emerald-200",
//     description: "วิศวกรรมดิจิทัลและนวัตกรรม",
//   },
//   {
//     name: "คณะวิทยาศาสตร์",
//     nameEn: "Faculty of Science",
//     id: "SC",
//     icon: FlaskConical,
//     accent: "from-purple-50 to-pink-50",
//     borderAccent: "group-hover:border-purple-200",
//     description: "วิทยาศาสตร์และเทคโนโลยีสมัยใหม่",
//   },
//   {
//     name: "คณะมนุษยศาสตร์",
//     nameEn: "Faculty of Humanities",
//     id: "HU",
//     icon: Users,
//     accent: "from-orange-50 to-red-50",
//     borderAccent: "group-hover:border-orange-200",
//     description: "ภาษาและวัฒนธรรมร่วมสมัย",
//   },
// ] as const;

// // Extended course data
// const coursesData = {
//   ED: [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },{
//         image: "/animate/warning-animate.svg",
//         courseName: "นวัตกรรมการศึกษา",
//         description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//         courseID: "ED813001",
//         category: "Innovation",
//         date: "2024",
//         faculty: "คณะศึกษาศาสตร์",
//       }
//     // Add more courses...
//   ],
//   EN: [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "Digital Engineering",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN813001",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     },{
//         image: "/animate/warning-animate.svg",
//         courseName: "Digital Engineering",
//         description: "พื้นฐานการออกแบบระบบดิจิทัล",
//         courseID: "EN813001",
//         category: "Digital",
//         date: "2024",
//         faculty: "คณะวิศวกรรมศาสตร์",
//       },{
//         image: "/animate/warning-animate.svg",
//         courseName: "Digital Engineering",
//         description: "พื้นฐานการออกแบบระบบดิจิทัล",
//         courseID: "EN813001",
//         category: "Digital",
//         date: "2024",
//         faculty: "คณะวิศวกรรมศาสตร์",
//       },{
//         image: "/animate/warning-animate.svg",
//         courseName: "Digital Engineering",
//         description: "พื้นฐานการออกแบบระบบดิจิทัล",
//         courseID: "EN813001",
//         category: "Digital",
//         date: "2024",
//         faculty: "คณะวิศวกรรมศาสตร์",
//       },{
//         image: "/animate/warning-animate.svg",
//         courseName: "Digital Engineering",
//         description: "พื้นฐานการออกแบบระบบดิจิทัล",
//         courseID: "EN813001",
//         category: "Digital",
//         date: "2024",
//         faculty: "คณะวิศวกรรมศาสตร์",
//       }
//     // Add more courses...
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
//     // Add more courses...
//   ],
//   HU: [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "ภาษาและการสื่อสารข้ามวัฒนธรรม",
//       description: "การสื่อสารในบริบทระหว่างวัฒนธรรม",
//       courseID: "HU813001",
//       category: "Communication",
//       date: "2024",
//       faculty: "คณะมนุษยศาสตร์",
//     }, {
//         image: "/animate/warning-animate.svg",
//         courseName: "ภาษาและการสื่อสารข้ามวัฒนธรรม",
//         description: "การสื่อสารในบริบทระหว่างวัฒนธรรม",
//         courseID: "HU813001",
//         category: "Communication",
//         date: "2024",
//         faculty: "คณะมนุษยศาสตร์",
//       }
//     // Add more courses...
//   ],
// };

// interface Faculty {
//   name: string;
//   nameEn: string;
//   id: string;
//   icon: React.ComponentType<{ className?: string }>;
//   accent: string;
//   borderAccent: string;
//   description: string;
// }

// const FacultyCard: React.FC<{ faculty: Faculty }> = ({ faculty }) => {
//   const IconComponent = faculty.icon;

//   return (
//     <Card
//       className={`
//         group relative overflow-hidden
//         border border-gray-100 hover:border-transparent
//         transition-all duration-300
//         cursor-pointer
//         h-full
//       `}
//     >
//       <motion.div
//         className={`
//           absolute inset-0 opacity-0 group-hover:opacity-100
//           bg-gradient-to-br ${faculty.accent}
//           transition-opacity duration-300
//         `}
//         initial={false}
//       />

//       <div className="relative p-6 flex flex-col md:flex-row items-start gap-4">
//         <div
//           className={`
//             p-3 rounded-lg bg-white shadow-sm
//             ${faculty.borderAccent}
//             transition-colors duration-300
//             shrink-0
//           `}
//         >
//           <IconComponent className="w-6 h-6" />
//         </div>

//         <div className="space-y-2 flex-grow">
//           <h2 className="text-xl font-medium text-gray-900">{faculty.name}</h2>
//           <p className="text-sm text-gray-500">{faculty.nameEn}</p>
//           <p className="text-sm text-gray-600">{faculty.description}</p>
//         </div>

//         <ChevronRight
//           className="
//             hidden md:block
//             absolute right-6 top-6
//             w-5 h-5 text-gray-400
//             group-hover:translate-x-1
//             transition-transform duration-300
//           "
//         />
//       </div>
//     </Card>
//   );
// };

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-8 sm:py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-3xl"
//         >
//           <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-4">
//             เลือกคณะที่คุณสนใจ
//           </h1>
//           <p className="text-base sm:text-lg text-gray-500">
//             เริ่มต้นการเรียนรู้ของคุณที่นี่ ค้นพบรายวิชาที่น่าสนใจจากคณะชั้นนำ
//           </p>
//         </motion.div>
//       </section>

//       {/* Faculty Grid */}
//       <section className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {FACULTY_DATA.map((faculty) => (
//             <FacultyCard key={faculty.id} faculty={faculty} />
//           ))}
//         </div>
//       </section>

//       {/* Course Sections */}
//       {FACULTY_DATA.map((faculty) => (
//         <section key={faculty.id} className="py-8 sm:py-12">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
//               <div>
//                 <h2 className="text-xl md:text-2xl font-medium text-gray-900">
//                   {faculty.name}
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1">
//                   ดูรายวิชาเสรีทั้งหมดจาก{faculty.name}
//                 </p>
//               </div>

//               <Button
//                 variant="ghost"
//                 className="group self-start md:self-auto"
//               >
//                 ดูทั้งหมด
//                 <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>

//             <div className="relative -mx-4">
//               <CourseCarousel courses={coursesData[faculty.id]} />
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }


// new ver
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   ChevronRight,
//   GraduationCap,
//   Code,
//   FlaskConical,
//   Users,
// } from "lucide-react";
// import Link from "next/link";

// const FACULTY_DATA = [
//       {
//         name: "คณะศึกษาศาสตร์",
//         nameEn: "Faculty of Education",
//         id: "ED",
//         icon: GraduationCap,
//         accent: "from-blue-50 to-indigo-50",
//         borderAccent: "group-hover:border-blue-200",
//         description: "นวัตกรรมการศึกษาและการพัฒนาการเรียนรู้",
//       },
//       {
//         name: "คณะวิศวกรรมศาสตร์",
//         nameEn: "Faculty of Engineering",
//         id: "EN",
//         icon: Code,
//         accent: "from-emerald-50 to-green-50",
//         borderAccent: "group-hover:border-emerald-200",
//         description: "วิศวกรรมดิจิทัลและนวัตกรรม",
//       },
//       {
//         name: "คณะวิทยาศาสตร์",
//         nameEn: "Faculty of Science",
//         id: "SC",
//         icon: FlaskConical,
//         accent: "from-purple-50 to-pink-50",
//         borderAccent: "group-hover:border-purple-200",
//         description: "วิทยาศาสตร์และเทคโนโลยีสมัยใหม่",
//       },
//       {
//         name: "คณะมนุษยศาสตร์",
//         nameEn: "Faculty of Humanities",
//         id: "HU",
//         icon: Users,
//         accent: "from-orange-50 to-red-50",
//         borderAccent: "group-hover:border-orange-200",
//         description: "ภาษาและวัฒนธรรมร่วมสมัย",
//       },
//     ] as const;
    
//     // Extended course data
//     const coursesData = {
//       ED: [
//         {
//           image: "/animate/warning-animate.svg",
//           courseName: "นวัตกรรมการศึกษา",
//           description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//           courseID: "ED813001",
//           category: "Innovation",
//           date: "2024",
//           faculty: "คณะศึกษาศาสตร์",
//         },{
//             image: "/animate/warning-animate.svg",
//             courseName: "นวัตกรรมการศึกษา",
//             description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//             courseID: "ED813001",
//             category: "Innovation",
//             date: "2024",
//             faculty: "คณะศึกษาศาสตร์",
//           }
//         // Add more courses...
//       ],
//       EN: [
//         {
//           image: "/animate/warning-animate.svg",
//           courseName: "Digital Engineering",
//           description: "พื้นฐานการออกแบบระบบดิจิทัล",
//           courseID: "EN813001",
//           category: "Digital",
//           date: "2024",
//           faculty: "คณะวิศวกรรมศาสตร์",
//         },{
//             image: "/animate/warning-animate.svg",
//             courseName: "Digital Engineering",
//             description: "พื้นฐานการออกแบบระบบดิจิทัล",
//             courseID: "EN813001",
//             category: "Digital",
//             date: "2024",
//             faculty: "คณะวิศวกรรมศาสตร์",
//           },{
//             image: "/animate/warning-animate.svg",
//             courseName: "Digital Engineering",
//             description: "พื้นฐานการออกแบบระบบดิจิทัล",
//             courseID: "EN813001",
//             category: "Digital",
//             date: "2024",
//             faculty: "คณะวิศวกรรมศาสตร์",
//           },{
//             image: "/animate/warning-animate.svg",
//             courseName: "Digital Engineering",
//             description: "พื้นฐานการออกแบบระบบดิจิทัล",
//             courseID: "EN813001",
//             category: "Digital",
//             date: "2024",
//             faculty: "คณะวิศวกรรมศาสตร์",
//           },{
//             image: "/animate/warning-animate.svg",
//             courseName: "Digital Engineering",
//             description: "พื้นฐานการออกแบบระบบดิจิทัล",
//             courseID: "EN813001",
//             category: "Digital",
//             date: "2024",
//             faculty: "คณะวิศวกรรมศาสตร์",
//           }
//         // Add more courses...
//       ],
//       SC: [
//         {
//           image: "/animate/warning-animate.svg",
//           courseName: "Data Science Fundamentals",
//           description: "พื้นฐานวิทยาศาสตร์ข้อมูล",
//           courseID: "SC813001",
//           category: "Data Science",
//           date: "2024",
//           faculty: "คณะวิทยาศาสตร์",
//         },
//         // Add more courses...
//       ],
//       HU: [
//         {
//           image: "/animate/warning-animate.svg",
//           courseName: "ภาษาและการสื่อสารข้ามวัฒนธรรม",
//           description: "การสื่อสารในบริบทระหว่างวัฒนธรรม",
//           courseID: "HU813001",
//           category: "Communication",
//           date: "2024",
//           faculty: "คณะมนุษยศาสตร์",
//         }, {
//             image: "/animate/warning-animate.svg",
//             courseName: "ภาษาและการสื่อสารข้ามวัฒนธรรม",
//             description: "การสื่อสารในบริบทระหว่างวัฒนธรรม",
//             courseID: "HU813001",
//             category: "Communication",
//             date: "2024",
//             faculty: "คณะมนุษยศาสตร์",
//           }

//       ],
//     };
    
    
// interface Faculty {
//   name: string;
//   nameEn: string;
//   id: string;
//   icon: React.ComponentType<{ className?: string }>;
//   accent: string;
//   borderAccent: string;
//   description: string;
// }

// const FacultyCard: React.FC<{ faculty: Faculty }> = ({ faculty }) => {
//   const IconComponent = faculty.icon;

//   return (
//     <Link href={`/faculty/${faculty.id}`} aria-label={`ดูรายละเอียดของ ${faculty.name}`}>
//       <motion.div
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         <Card className="group relative overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer h-full">
//           <motion.div
//             className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${faculty.accent} transition-opacity duration-300`}
//             initial={false}
//           />
//           <div className="relative p-6 flex flex-col md:flex-row items-start gap-4">
//             <div
//               className={`p-3 rounded-lg bg-white shadow-sm ${faculty.borderAccent} transition-colors duration-300 shrink-0`}
//             >
//               <IconComponent className="w-6 h-6" />
//             </div>
//             <div className="space-y-2 flex-grow">
//               <h2 className="text-xl font-medium text-gray-900">{faculty.name}</h2>
//               <p className="text-sm text-gray-500">{faculty.nameEn}</p>
//               <p className="text-sm text-gray-600">{faculty.description}</p>
//             </div>
//             <ChevronRight
//               className="hidden md:block absolute right-6 top-6 w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-300"
//             />
//           </div>
//         </Card>
//       </motion.div>
//     </Link>
//   );
// };

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-8 sm:py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-3xl"
//         >
//           <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-4">
//             เลือกคณะที่คุณสนใจ
//           </h1>
//           <p className="text-base sm:text-lg text-gray-500">
//             เริ่มต้นการเรียนรู้ของคุณที่นี่ ค้นพบรายวิชาที่น่าสนใจจากคณะชั้นนำ
//           </p>
//         </motion.div>
//       </section>

//       {/* Faculty Grid */}
//       <section className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {FACULTY_DATA.map((faculty) => (
//             <FacultyCard key={faculty.id} faculty={faculty} />
//           ))}
//         </div>
//       </section>

//       {/* Course Sections */}
//       {FACULTY_DATA.map((faculty) => (
//         <section key={faculty.id} className="py-8 sm:py-12">
//           <div className="container mx-auto px-4">
//             <header className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
//               <div>
//                 <h2 className="text-xl md:text-2xl font-medium text-gray-900">
//                   {faculty.name}
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1">
//                   ดูรายวิชาเสรีทั้งหมดจาก{faculty.name}
//                 </p>
//               </div>

//               <Button
//                 variant="ghost"
//                 className="group self-start md:self-auto"
//                 asChild
//               >
//                 <Link href={`/faculty/${faculty.id}/courses`} aria-label={`ดูคอร์สทั้งหมดของ ${faculty.name}`}>
//                   ดูทั้งหมด
//                   <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>
//             </header>

//             {coursesData[faculty.id] && coursesData[faculty.id].length > 0 ? (
//               <div className="relative -mx-4">
//                 <CourseCarousel courses={coursesData[faculty.id]} />
//               </div>
//             ) : (
//               <p className="text-gray-500">ขออภัย ขณะนี้ยังไม่มีคอร์สสำหรับ {faculty.name}</p>
//             )}
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   ChevronRight,
//   GraduationCap,
//   Code,
//   FlaskConical,
//   Users,
// } from "lucide-react";
// import Link from "next/link";

// const FACULTY_DATA = [
//   {
//     name: "คณะศึกษาศาสตร์",
//     nameEn: "Faculty of Education",
//     id: "ED",
//     icon: GraduationCap,
//     accent: "from-blue-50 to-indigo-50",
//     borderAccent: "group-hover:border-blue-200",
//     description: "นวัตกรรมการศึกษาและการพัฒนาการเรียนรู้",
//   },
//   {
//     name: "คณะวิศวกรรมศาสตร์",
//     nameEn: "Faculty of Engineering",
//     id: "EN",
//     icon: Code,
//     accent: "from-emerald-50 to-green-50",
//     borderAccent: "group-hover:border-emerald-200",
//     description: "วิศวกรรมดิจิทัลและนวัตกรรม",
//   },
//   {
//     name: "คณะวิทยาศาสตร์",
//     nameEn: "Faculty of Science",
//     id: "SC",
//     icon: FlaskConical,
//     accent: "from-purple-50 to-pink-50",
//     borderAccent: "group-hover:border-purple-200",
//     description: "วิทยาศาสตร์และเทคโนโลยีสมัยใหม่",
//   },
//   {
//     name: "คณะมนุษยศาสตร์",
//     nameEn: "Faculty of Humanities",
//     id: "HU",
//     icon: Users,
//     accent: "from-orange-50 to-red-50",
//     borderAccent: "group-hover:border-orange-200",
//     description: "ภาษาและวัฒนธรรมร่วมสมัย",
//   },
// ] as const;

// // Extended course data
// const coursesData = {
//   ED: [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "นวัตกรรมการศึกษา",
//       description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//       courseID: "ED813001",
//       category: "Innovation",
//       date: "2024",
//       faculty: "คณะศึกษาศาสตร์",
//     },{
//         image: "/animate/warning-animate.svg",
//         courseName: "นวัตกรรมการศึกษา",
//         description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
//         courseID: "ED813001",
//         category: "Innovation",
//         date: "2024",
//         faculty: "คณะศึกษาศาสตร์",
//       }
//     // Add more courses...
//   ],
//   EN: [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "Digital Engineering",
//       description: "พื้นฐานการออกแบบระบบดิจิทัล",
//       courseID: "EN813001",
//       category: "Digital",
//       date: "2024",
//       faculty: "คณะวิศวกรรมศาสตร์",
//     },{
//         image: "/animate/warning-animate.svg",
//         courseName: "Digital Engineering",
//         description: "พื้นฐานการออกแบบระบบดิจิทัล",
//         courseID: "EN813001",
//         category: "Digital",
//         date: "2024",
//         faculty: "คณะวิศวกรรมศาสตร์",
//       },{
//         image: "/animate/warning-animate.svg",
//         courseName: "Digital Engineering",
//         description: "พื้นฐานการออกแบบระบบดิจิทัล",
//         courseID: "EN813001",
//         category: "Digital",
//         date: "2024",
//         faculty: "คณะวิศวกรรมศาสตร์",
//       },{
//         image: "/animate/warning-animate.svg",
//         courseName: "Digital Engineering",
//         description: "พื้นฐานการออกแบบระบบดิจิทัล",
//         courseID: "EN813001",
//         category: "Digital",
//         date: "2024",
//         faculty: "คณะวิศวกรรมศาสตร์",
//       },{
//         image: "/animate/warning-animate.svg",
//         courseName: "Digital Engineering",
//         description: "พื้นฐานการออกแบบระบบดิจิทัล",
//         courseID: "EN813001",
//         category: "Digital",
//         date: "2024",
//         faculty: "คณะวิศวกรรมศาสตร์",
//       }
//     // Add more courses...
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
//     // Add more courses...
//   ],
//   HU: [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "ภาษาและการสื่อสารข้ามวัฒนธรรม",
//       description: "การสื่อสารในบริบทระหว่างวัฒนธรรม",
//       courseID: "HU813001",
//       category: "Communication",
//       date: "2024",
//       faculty: "คณะมนุษยศาสตร์",
//     }, {
//         image: "/animate/warning-animate.svg",
//         courseName: "ภาษาและการสื่อสารข้ามวัฒนธรรม",
//         description: "การสื่อสารในบริบทระหว่างวัฒนธรรม",
//         courseID: "HU813001",
//         category: "Communication",
//         date: "2024",
//         faculty: "คณะมนุษยศาสตร์",
//       }
//     // Add more courses...
//   ],
// };

// interface Faculty {
//   name: string;
//   nameEn: string;
//   id: string;
//   icon: React.ComponentType<{ className?: string }>;
//   accent: string;
//   borderAccent: string;
//   description: string;
// }

// const FacultyCard: React.FC<{ faculty: Faculty }> = ({ faculty }) => {
//   const IconComponent = faculty.icon;

//   return (
//     <Link href={`/faculty/${faculty.id}`} aria-label={`ดูรายละเอียดของ ${faculty.name}`}>
//       <motion.div
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className="h-full"
//       >
//         <Card className="group relative overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer h-full">
//           <motion.div
//             className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${faculty.accent} transition-opacity duration-300`}
//             initial={false}
//           />
//           <div className="relative p-4 sm:p-5 flex flex-col items-start gap-3 h-full">
//             <div
//               className={`p-2.5 rounded-lg bg-white shadow-sm ${faculty.borderAccent} transition-colors duration-300 shrink-0`}
//             >
//               <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
//             </div>
//             <div className="space-y-1 flex-grow">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900">{faculty.name}</h2>
//               <p className="text-sm text-gray-500">{faculty.nameEn}</p>
//               <p className="text-sm text-gray-600 line-clamp-2">{faculty.description}</p>
//             </div>
//             <ChevronRight
//               className="hidden md:block absolute right-4 sm:right-5 top-4 sm:top-5 w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-300"
//             />
//           </div>
//         </Card>
//       </motion.div>
//     </Link>
//   );
// };

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-6 sm:py-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-3xl"
//         >
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-3">
//             เลือกคณะที่คุณสนใจ
//           </h1>
//           <p className="text-base sm:text-lg text-gray-500">
//             เริ่มต้นการเรียนรู้ของคุณที่นี่ ค้นพบรายวิชาที่น่าสนใจจากคณะชั้นนำ
//           </p>
//         </motion.div>
//       </section>

//       {/* Faculty Grid */}
//       <section className="container mx-auto px-4 py-6 sm:py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//           {FACULTY_DATA.map((faculty) => (
//             <FacultyCard key={faculty.id} faculty={faculty} />
//           ))}
//         </div>
//       </section>

//       {/* Course Sections */}
//       {FACULTY_DATA.map((faculty) => (
//         <section key={faculty.id} className="py-6 sm:py-8">
//           <div className="container mx-auto px-4">
//             <header className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-2 sm:gap-4">
//               <div>
//                 <h2 className="text-lg sm:text-xl font-medium text-gray-900">
//                   {faculty.name}
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1">
//                   ดูรายวิชาเสรีทั้งหมดจาก {faculty.name}
//                 </p>
//               </div>

//               <Button
//                 variant="ghost"
//                 className="group self-start md:self-auto"
//                 asChild
//               >
//                 <Link href={`/faculty/${faculty.id}/courses`} aria-label={`ดูคอร์สทั้งหมดของ ${faculty.name}`}>
//                   ดูทั้งหมด
//                   <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>
//             </header>

//             {coursesData[faculty.id] && coursesData[faculty.id].length > 0 ? (
//               <div className="relative -mx-4">
//                 <CourseCarousel courses={coursesData[faculty.id]} />
//               </div>
//             ) : (
//               <p className="text-gray-500">ขออภัย ขณะนี้ยังไม่มีคอร์สสำหรับ {faculty.name}</p>
//             )}
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  GraduationCap,
  Code,
  FlaskConical,
  Users,
} from "lucide-react";
import Link from "next/link";

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
      image: "/animate/warning-animate.svg",
      courseName: "นวัตกรรมการศึกษา",
      description: "เรียนรู้เทคโนโลยีและวิธีการสอนสมัยใหม่",
      courseID: "ED813001",
      category: "Innovation",
      date: "2024",
      faculty: "คณะศึกษาศาสตร์",
    },
    {
      image: "/animate/warning-animate.svg",
      courseName: "การจัดการศึกษาแบบใหม่",
      description: "เทคนิคและวิธีการจัดการศึกษาสมัยใหม่",
      courseID: "ED813002",
      category: "Education",
      date: "2024",
      faculty: "คณะศึกษาศาสตร์",
    }
    // เพิ่มคอร์สเพิ่มเติม...
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
    {
      image: "/animate/warning-animate.svg",
      courseName: "ภาษาและการสื่อสารข้ามวัฒนธรรม",
      description: "การสื่อสารในบริบทระหว่างวัฒนธรรม",
      courseID: "HU813001",
      category: "Communication",
      date: "2024",
      faculty: "คณะมนุษยศาสตร์",
    },
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

const FacultyCard: React.FC<{ faculty: Faculty }> = ({ faculty }) => {
  const IconComponent = faculty.icon;

  return (
    <Link
      href={`/faculty/${faculty.id}`}
      aria-label={`ดูรายละเอียดของ ${faculty.name}`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-full"
      >
        <Card className="group relative overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer h-full">
          <motion.div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${faculty.accent} transition-opacity duration-300`}
            initial={false}
          />
          <div className="relative p-4 sm:p-5 flex flex-col items-start gap-3 h-full">
            <div
              className={`p-2.5 rounded-lg bg-white shadow-sm ${faculty.borderAccent} transition-colors duration-300 shrink-0`}
            >
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1 flex-grow">
              <h2 className="text-lg sm:text-xl font-medium text-gray-900">
                {faculty.name}
              </h2>
              <p className="text-sm text-gray-500">{faculty.nameEn}</p>
              <p className="text-sm text-gray-600 line-clamp-2">
                {faculty.description}
              </p>
            </div>
            <ChevronRight
              className="hidden md:block absolute right-4 sm:right-5 top-4 sm:top-5 w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-3">
            เลือกคณะที่คุณสนใจ
          </h1>
          <p className="text-base sm:text-lg text-gray-500">
            เริ่มต้นการเรียนรู้ของคุณที่นี่ ค้นพบรายวิชาที่น่าสนใจจากคณะชั้นนำ
          </p>
        </motion.div>
      </section>

      {/* Faculty Grid */}
      <section className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FACULTY_DATA.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </section>

      {/* Course Sections */}
      {FACULTY_DATA.map((faculty) => (
        <section key={faculty.id} className="py-6 sm:py-8">
          <div className="container mx-auto px-4">
            <header className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-2 sm:gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-medium text-gray-900">
                  {faculty.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  ดูรายวิชาเสรีทั้งหมดจาก {faculty.name}
                </p>
              </div>

              <Button
                variant="ghost"
                className="group self-start md:self-auto"
                asChild
              >
                <Link
                  href={`/faculty/${faculty.id}/courses`}
                  aria-label={`ดูคอร์สทั้งหมดของ ${faculty.name}`}
                >
                  ดูทั้งหมด
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </header>

            {coursesData[faculty.id] &&
            coursesData[faculty.id].length > 0 ? (
              <div className="relative">
                {/* ลบ -mx-4 เพื่อป้องกันการล้นของ Carousel */}
                <CourseCarousel courses={coursesData[faculty.id]} />
              </div>
            ) : (
              <p className="text-gray-500">
                ขออภัย ขณะนี้ยังไม่มีคอร์สสำหรับ {faculty.name}
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

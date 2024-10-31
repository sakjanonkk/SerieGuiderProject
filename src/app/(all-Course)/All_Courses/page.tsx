// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";


// interface CourseCardProps {
//   courseId: string;
//   image: string;
//   courseName: string;
//   description: string;
//   category: string;
//   date: string;
//   initialLikes: number;
//   facultyName: string;
// }

// export default function HomePage() {
//   const [facultyCourses, setFacultyCourses] = useState<{
//     [facultyName: string]: CourseCardProps[];
//   }>({});
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch courses from the backend API
//         const response = await fetch("/api/courses");
//         if (!response.ok) {
//           throw new Error("Failed to fetch courses");
//         }
//         const data = await response.json();
//         console.log("Fetched Courses Data:", data); // Log the fetched data to verify

//         // Group courses by facultyName
//         const groupedByFaculty = data.reduce(
//           (
//             acc: { [facultyName: string]: CourseCardProps[] },
//             course: CourseCardProps
//           ) => {
//             const facultyName = course.facultyName;

//             // Debugging output to verify the faculty name
//             console.log("Faculty Name for Course:", facultyName);

//             if (!facultyName) {
//               console.error("Faculty Name is undefined for course:", course);
//             }

//             if (!acc[facultyName]) {
//               acc[facultyName] = [];
//             }
//             acc[facultyName].push(course);
//             return acc;
//           },
//           {}
//         );

//         console.log("Grouped By Faculty:", groupedByFaculty); // Log grouped courses to verify
//         setFacultyCourses(groupedByFaculty); // Update state with grouped courses
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//         setError("Could not load courses. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white max-w-[86rem]">
//       <div className="max-w-[100vw] mx-auto px-8 sm:px-12 lg:px-8 md:max-w-[90rem]">
//         {/* Hero Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="py-2 sm:py-4 lg:py-4"
//         >
//           <div className="max-w-full">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//               เลือกรายวิชาเสรีที่คุณสนใจ
//             </h1>
//             <p className="mt-4 text-base sm:text-lg text-gray-500">
//               เริ่มต้นการเรียนรู้ของคุณที่นี่
//               ค้นพบรายวิชาเสรีที่น่าสนใจจากคณะชั้นนำ
//             </p>
//           </div>
//         </motion.section>

//         {/* Loading/Error State */}
//         {loading && (
//           <p className="text-gray-500 text-center">Loading courses...</p>
//         )}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {/* Course Sections */}
//         {Object.entries(facultyCourses).map(([facultyName, courses]) => (
//           <section key={facultyName} className="py-8 border-t border-gray-100">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//               <div>
//                 <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
//                   {facultyName}
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-500">
//                   ดูรายวิชาเสรีทั้งหมดจาก {facultyName}
//                 </p>
//               </div>

//               <Button
//                 variant="ghost"
//                 className="mt-4 sm:mt-0 group hover:bg-gray-50"
//                 asChild
//               >
//                 <Link href={`/faculty/${facultyName}/courses`}>
//                   <span>ดูทั้งหมด</span>
//                 </Link>
//               </Button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//               {courses.map((course) => (
//                 <CourseCard
//                   key={course.courseId}
//                   courseID={course.courseId}
//                   image={course.image}
//                   courseName={course.courseName}
//                   description={course.description}
//                   category={course.category}
//                   date={course.date}
//                   initialLikes={course.initialLikes}
//                   facultyName={course.facultyName}
//                 />
//               ))}
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// interface CourseCardProps {
//   courseId: string;
//   image: string;
//   courseName: string;
//   description: string;
//   category: string;
//   date: string;
//   initialLikes: number;
//   facultyName: string;
// }

// export default function HomePage() {
//   const [facultyCourses, setFacultyCourses] = useState<{
//     [facultyName: string]: CourseCardProps[];
//   }>({});
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch courses from the backend API
//         const response = await fetch("/api/courses");
//         if (!response.ok) {
//           throw new Error("Failed to fetch courses");
//         }
//         const data = await response.json();
//         console.log("Fetched Courses Data:", data); // Log the fetched data to verify

//         // Validate data format
//         if (!Array.isArray(data)) {
//           throw new Error("Fetched data is not an array");
//         }

//         // Group courses by facultyName
//         const groupedByFaculty = data.reduce(
//           (
//             acc: { [facultyName: string]: CourseCardProps[] },
//             course: CourseCardProps
//           ) => {
//             const facultyName = course.facultyName || "ไม่ระบุคณะ";

//             // Debugging output to verify the faculty name
//             console.log("Faculty Name for Course:", facultyName);

//             if (!acc[facultyName]) {
//               acc[facultyName] = [];
//             }
//             acc[facultyName].push(course);
//             return acc;
//           },
//           {}
//         );

//         console.log("Grouped By Faculty:", groupedByFaculty); // Log grouped courses to verify
//         setFacultyCourses(groupedByFaculty); // Update state with grouped courses
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//         setError("Could not load courses. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white max-w-[86rem]">
//       <div className="max-w-[100vw] mx-auto px-8 sm:px-12 lg:px-8 md:max-w-[90rem]">
//         {/* Hero Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="py-2 sm:py-4 lg:py-4"
//         >
//           <div className="max-w-full">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//               เลือกรายวิชาเสรีที่คุณสนใจ
//             </h1>
//             <p className="mt-4 text-base sm:text-lg text-gray-500">
//               เริ่มต้นการเรียนรู้ของคุณที่นี่
//               ค้นพบรายวิชาเสรีที่น่าสนใจจากคณะชั้นนำ
//             </p>
//           </div>
//         </motion.section>

//         {/* Loading/Error State */}
//         {loading && (
//           <p className="text-gray-500 text-center">Loading courses...</p>
//         )}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {/* Course Sections */}
//         {Object.entries(facultyCourses).length === 0 && !loading && !error ? (
//           <p className="text-gray-500 text-center">ไม่มีรายวิชาให้แสดงผล</p>
//         ) : (
//           Object.entries(facultyCourses).map(([facultyName, courses]) => (
//             <section
//               key={facultyName}
//               className="py-8 border-t border-gray-100"
//             >
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
//                     {facultyName}
//                   </h2>
//                   <p className="mt-2 text-sm text-gray-500">
//                     ดูรายวิชาเสรีทั้งหมดจาก {facultyName}
//                   </p>
//                 </div>

//                 <Button
//                   variant="ghost"
//                   className="mt-4 sm:mt-0 group hover:bg-gray-50"
//                   asChild
//                 >
//                   <Link
//                     href={`/faculty/${encodeURIComponent(facultyName)}/courses`}
//                   >
//                     <span>ดูทั้งหมด</span>
//                   </Link>
//                 </Button>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {courses.map((course) => (
//                   <CourseCard
//                     key={course.courseId}
//                     courseID={course.courseId}
//                     image={course.image}
//                     courseName={course.courseName}
//                     description={course.description}
//                     category={course.category}
//                     date={course.date}
//                     initialLikes={course.initialLikes}
//                     facultyName={course.facultyName}
//                   />
//                 ))}
//               </div>
//             </section>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronRight, GraduationCap, Code, FlaskConical, Users } from "lucide-react";
// import Link from "next/link";
// import FacultyCard from "@/components/CourseCard/FacultyCard";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// interface CourseCardProps {
//   courseId: string;
//   image: string;
//   courseName: string;
//   description: string;
//   category: string;
//   date: string;
//   initialLikes: number;
//   facultyName: string;
//   faculty: string; // Add this line
//   courseID: string; // Add this line
// }

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

// export default function HomePage() {
//   const [facultyCourses, setFacultyCourses] = useState<{
//     [facultyName: string]: CourseCardProps[];
//   }>({});
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch courses from the backend API
//         const response = await fetch("/api/courses");
//         if (!response.ok) {
//           throw new Error("Failed to fetch courses");
//         }
//         const data = await response.json();
//         console.log("Fetched Courses Data:", data); // Log the fetched data to verify

//         // Group courses by facultyName
//         const groupedByFaculty = data.reduce(
//           (
//             acc: { [facultyName: string]: CourseCardProps[] },
//             course: CourseCardProps
//           ) => {
//             const facultyName = course.facultyName;

//             // Debugging output to verify the faculty name
//             console.log("Faculty Name for Course:", facultyName);

//             if (!facultyName) {
//               console.error("Faculty Name is undefined for course:", course);
//             }

//             if (!acc[facultyName]) {
//               acc[facultyName] = [];
//             }
//             acc[facultyName].push(course);
//             return acc;
//           },
//           {}
//         );

//         console.log("Grouped By Faculty:", groupedByFaculty); // Log grouped courses to verify
//         setFacultyCourses(groupedByFaculty); // Update state with grouped courses
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//         setError("Could not load courses. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white max-w-[86rem]">
//       <div className="max-w-[100vw] mx-auto px-8 sm:px-12 lg:px-8 md:max-w-[90rem]">
//         {/* Hero Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="py-2 sm:py-4 lg:py-4"
//         >
//           <div className="max-w-full">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//               เลือกรายวิชาเสรีที่คุณสนใจ
//             </h1>
//             <p className="mt-4 text-base sm:text-lg text-gray-500">
//               เริ่มต้นการเรียนรู้ของคุณที่นี่ ค้นพบรายวิชาเสรีที่น่าสนใจจากคณะชั้นนำ
//             </p>
//           </div>
//         </motion.section>

//         {/* Loading/Error State */}
//         {loading && (
//           <p className="text-gray-500 text-center">Loading courses...</p>
//         )}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {/* Faculty Grid */}
//         <section className="py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {FACULTY_DATA.map((faculty) => (
//               <FacultyCard key={faculty.id} faculty={faculty} />
//             ))}
//           </div>
//         </section>

//         {/* Course Sections */}
//         {FACULTY_DATA.map((faculty) => (
//           <section key={faculty.id} className="py-8 border-t border-gray-100">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//               <div>
//                 <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
//                   {faculty.name}
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-500">
//                   ดูรายวิชาเสรีทั้งหมดจาก {faculty.name}
//                 </p>
//               </div>

//               <Button
//                 variant="ghost"
//                 className="mt-4 sm:mt-0 group hover:bg-gray-50"
//                 asChild
//               >
//                 <Link href={`/faculties/${faculty.id}/courses`}>
//                   <span>ดูทั้งหมด</span>
//                   <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>
//             </div>

//             <div className="w-full">
//               {facultyCourses[faculty.name]?.length > 0 ? (
//                 <div className="w-11/12 mx-auto">
//                   <CourseCarousel courses={facultyCourses[faculty.name]} />
//                 </div>
//               ) : (
//                 <div className="rounded-lg bg-gray-50 p-8">
//                   <p className="text-gray-500 text-center">
//                     ขออภัย ขณะนี้ยังไม่มีข้อมูลสำหรับ {faculty.name}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useState, useCallback } from "react";
// import { motion } from "framer-motion";
// import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ChevronRight, GraduationCap, Code, FlaskConical, Users, BookOpen } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Loader2 } from "lucide-react";
// import FacultyCard from "@/components/CourseCard/FacultyCard";
// import { CourseType } from "@/types/courseType";

// interface FacultyData {
//   name: string;
//   nameEn: string;
//   id: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   accent: string;
//   borderAccent: string;
//   description: string;
// }

// const FACULTY_DATA: FacultyData[] = [
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
//     id: "HS",
//     name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
//     nameEn: "humanities",
//     description: "ศึกษาและพัฒนาทางด้านมนุษยศาสตร์และสังคม",
//     icon: BookOpen,
//     accent: "from-gray-50 to-gray-100",
//     borderAccent: "group-hover:border-gray-200",
//   }
// ] as const;

// export default function HomePage() {
//   const [facultyCourses, setFacultyCourses] = useState<{
//     [facultyName: string]: CourseType[];
//   }>({});
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isDeleting, setIsDeleting] = useState<boolean>(false);
//   const [deleteError, setDeleteError] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [selectedFaculty, setSelectedFaculty] = useState<string>("all");
//   const [selectedYear, setSelectedYear] = useState<string>("all");

//   // ฟังก์ชันลบรายการทั้งหมด (ถ้ายังใช้)
//   const handleClearAll = useCallback(async () => {
//     const confirmDelete = window.confirm("คุณแน่ใจหรือไม่ที่จะลบรายการที่ถูกใจทั้งหมด?");
//     if (!confirmDelete) return;

//     setIsDeleting(true);
//     setDeleteError(null);
//     try {
//       const response = await fetch("/api/like", {
//         method: "DELETE",
//       });

//       const data = await response.json();
//       console.log("Delete all response:", response.status, data);

//       if (response.ok) {
//         setFacultyCourses({});
//         toast.success("ลบรายการที่ถูกใจทั้งหมดสำเร็จ");
//       } else if (response.status === 404) {
//         setDeleteError("ไม่มีรายการที่ถูกใจเพื่อทำการลบ");
//         toast.error("ไม่มีรายการที่ถูกใจเพื่อทำการลบ");
//       } else {
//         setDeleteError("ไม่สามารถลบรายการที่ถูกใจทั้งหมดได้");
//         toast.error("ไม่สามารถลบรายการที่ถูกใจทั้งหมดได้");
//       }
//     } catch (error) {
//       setDeleteError("เกิดข้อผิดพลาดในการลบรายการที่ถูกใจทั้งหมด");
//       toast.error("เกิดข้อผิดพลาดในการลบรายการที่ถูกใจทั้งหมด");
//       console.error("เกิดข้อผิดพลาดในการลบรายการที่ถูกใจทั้งหมด:", error);
//     } finally {
//       setIsDeleting(false);
//     }
//   }, []);

//   const clearFilter = useCallback(
//     (type: "search" | "faculty" | "year" | "all") => {
//       switch (type) {
//         case "search":
//           setSearchQuery("");
//           break;
//         case "faculty":
//           setSelectedFaculty("all");
//           break;
//         case "year":
//           setSelectedYear("all");
//           break;
//         case "all":
//           setSearchQuery("");
//           setSelectedFaculty("all");
//           setSelectedYear("all");
//           break;
//       }
//     },
//     []
//   );

//   const filteredFavorites = Object.entries(facultyCourses)
//     .flatMap(([faculty, courses]) => courses)
//     .filter((course) => {
//       const matchesSearch =
//         searchQuery === "" ||
//         course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.courseId.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesFaculty =
//         selectedFaculty === "all" || course.facultyName === selectedFaculty;
//       const matchesYear = selectedYear === "all" || course.date === selectedYear;

//       return matchesSearch && matchesFaculty && matchesYear;
//     });

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await fetch("/api/courses");
//         if (!response.ok) {
//           throw new Error("Failed to fetch courses");
//         }
//         const data: CourseType[] = await response.json();
//         console.log("Fetched Courses Data:", data);

//         const groupedByFaculty = data.reduce(
//           (
//             acc: { [facultyName: string]: CourseType[] },
//             course: CourseType
//           ) => {
//             const facultyName = course.facultyName;

//             console.log("Faculty Name for Course:", facultyName);

//             if (!facultyName) {
//               console.error("Faculty Name is undefined for course:", course);
//             }

//             if (!acc[facultyName]) {
//               acc[facultyName] = [];
//             }
//             acc[facultyName].push(course);
//             return acc;
//           },
//           {}
//         );

//         console.log("Grouped By Faculty:", groupedByFaculty);
//         setFacultyCourses(groupedByFaculty);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//         setError("Could not load courses. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader2 className="w-12 h-12 text-primary animate-spin" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <p className="text-red-500 text-lg">{error}</p>
//         <Button
//           variant="outline"
//           onClick={() => window.location.reload()}
//           className="mt-4"
//         >
//           ลองอีกครั้ง
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white max-w-[86rem]">
//       <ToastContainer />
//       <div className="max-w-[100vw] mx-auto px-8 sm:px-12 lg:px-8 md:max-w-[90rem]">
//         {/* Hero Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="py-2 sm:py-4 lg:py-4"
//         >
//           <div className="max-w-full">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//               เลือกรายวิชาเสรีที่คุณสนใจ
//             </h1>
//             <p className="mt-4 text-base sm:text-lg text-gray-500">
//               เริ่มต้นการเรียนรู้ของคุณที่นี่ ค้นพบรายวิชาเสรีที่น่าสนใจจากคณะชั้นนำ
//             </p>
//           </div>
//         </motion.section>

//         {/* Faculty Grid */}
//         <section className="py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {FACULTY_DATA.map((faculty) => (
//               <FacultyCard key={faculty.id} faculty={faculty} />
//             ))}
//           </div>
//         </section>

//         {/* Course Sections */}
//         {FACULTY_DATA.map((faculty) => (
//           <section key={faculty.id} className="py-8 border-t border-gray-100">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//               <div>
//                 <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
//                   {faculty.name}
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-500">
//                   ดูรายวิชาเสรีทั้งหมดจาก {faculty.name}
//                 </p>
//               </div>

//               <Button
//                 variant="ghost"
//                 className="mt-4 sm:mt-0 group hover:bg-gray-50"
//                 asChild
//               >
//                 <Link href={`/faculties/${faculty.id}/courses`}>
//                   <span>ดูทั้งหมด</span>
//                   <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>
//             </div>

//             <div className="w-full">
//               {facultyCourses[faculty.name]?.length > 0 ? (
//                 <CourseCarousel courses={facultyCourses[faculty.name]} />
//               ) : (
//                 <div className="rounded-lg bg-gray-50 p-8">
//                   <p className="text-gray-500 text-center">
//                     ขออภัย ขณะนี้ยังไม่มีข้อมูลสำหรับ {faculty.name}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CourseCard from "@/components/CourseCard/CourseCard";
import { 
  GraduationCap, 
  Code, 
  FlaskConical, 
  BookOpen, 
  ChevronRight 
} from "lucide-react";
import { CourseType } from "@/types/courseType";
import FacultyCard from "@/components/CourseCard/FacultyCard";


interface FacultyData {
  name: string;
  nameEn: string;
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accent: string;
  borderAccent: string;
  description: string;
}

const FACULTY_DATA: FacultyData[] = [
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
    id: "HS",
    name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
    nameEn: "Humanities",
    description: "ศึกษาและพัฒนาทางด้านมนุษยศาสตร์และสังคม",
    icon: BookOpen,
    accent: "from-gray-50 to-gray-100",
    borderAccent: "group-hover:border-gray-200",
  }
];

export default function HomePage() {
  const [facultyCourses, setFacultyCourses] = useState<{
    [facultyName: string]: CourseType[];
  }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/courses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();

        const groupedByFaculty = data.reduce(
          (
            acc: { [facultyName: string]: CourseType[] },
            course: CourseType
          ) => {
            const facultyName = course.facultyName;
            if (!acc[facultyName]) {
              acc[facultyName] = [];
            }
            acc[facultyName].push(course);
            return acc;
          },
          {}
        );

        setFacultyCourses(groupedByFaculty);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Could not load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-white max-w-[86rem]">
      <div className="max-w-[100vw] mx-auto px-8 sm:px-12 lg:px-8 md:max-w-[90rem]">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-2 sm:py-4 lg:py-4"
        >
          <div className="max-w-full">
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

        {/* Course Sections with Carousel */}
        {Object.entries(facultyCourses).map(([facultyName, courses]) => (
          <section key={facultyName} className="py-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
                  {facultyName}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  ดูรายวิชาเสรีทั้งหมดจาก {facultyName}
                </p>
              </div>

              <Button
                variant="ghost"
                className="mt-4 sm:mt-0 group hover:bg-gray-50"
                asChild
              >
                <Link href={`/faculty/${facultyName}/courses`}>
                  <span>ดูทั้งหมด</span>
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <CourseCarousel courses={courses} />
          </section>
        ))}

        {loading && (
          <p className="text-gray-500 text-center">กำลังโหลดคอร์ส...</p>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
}

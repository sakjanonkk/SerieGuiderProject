// "use client";

// import React, { useState, useCallback } from 'react';
// import { Heart, Trash2, Search, SlidersHorizontal, BookOpen, X } from 'lucide-react';
// import { CourseInfo } from '@/types/courseType';

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import CourseCard from '@/components/CourseCard/CourseCard';
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// interface FavoriteCoursesPageProps {
//   initialFavorites: CourseInfo[];
// }

// export default function FavoriteCoursesPage({ initialFavorites }: FavoriteCoursesPageProps) {
//   const [favorites, setFavorites] = useState(initialFavorites);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
//   const [selectedYear, setSelectedYear] = useState<string>('all');

//   // Get unique faculties and years from favorites
//   const faculties = ['all', ...new Set(favorites.map(course => course.faculty))];
//   const years = ['all', ...new Set(favorites.map(course => course.date))];

//   const handleRemoveFavorite = useCallback((courseId: string) => {
//     setFavorites(prev => prev.filter(course => course.courseID !== courseId));
//   }, []);

//   const handleClearAll = useCallback(() => {
//     setFavorites([]);
//   }, []);

//   const clearFilter = useCallback((type: 'search' | 'faculty' | 'year' | 'all') => {
//     switch (type) {
//       case 'search':
//         setSearchQuery('');
//         break;
//       case 'faculty':
//         setSelectedFaculty('all');
//         break;
//       case 'year':
//         setSelectedYear('all');
//         break;
//       case 'all':
//         setSearchQuery('');
//         setSelectedFaculty('all');
//         setSelectedYear('all');
//         break;
//     }
//   }, []);

//   const filteredFavorites = favorites.filter(course => {
//     const matchesSearch = searchQuery === '' ||
//       course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.courseID.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesFaculty = selectedFaculty === 'all' || course.faculty === selectedFaculty;
//     const matchesYear = selectedYear === 'all' || course.date === selectedYear;

//     return matchesSearch && matchesFaculty && matchesYear;
//   });

//   return (
//     <div className="min-h-screen py-8 max-w-[86rem] lg:w-[86rem]">
//       <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <Card className="mb-8 shadow-md">
//           <CardHeader className="space-y-4">
//             <div className="flex items-center gap-3">
//               <Heart className="w-8 h-8 text-primary" />
//               <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//                 รายวิชาที่ถูกใจ
//               </CardTitle>
//             </div>
//             <div className="flex justify-between items-center">
//               <div className="text-gray-500 text-lg">
//                 {filteredFavorites.length > 0
//                   ? `รายวิชาที่ถูกใจทั้งหมด ${filteredFavorites.length} รายวิชา`
//                   : 'ยังไม่มีรายวิชาที่ถูกใจ'
//                 }
//               </div>
//               {favorites.length > 0 && (
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <Button variant="outline" className="text-red-500 hover:text-red-600">
//                       <Trash2 className="w-4 h-4 mr-2" />
//                       ล้างรายการทั้งหมด
//                     </Button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent className="bg-white">
//                     <AlertDialogHeader>
//                       <AlertDialogTitle>ยืนยันการลบรายการที่ถูกใจทั้งหมด</AlertDialogTitle>
//                       <AlertDialogDescription>
//                         การกระทำนี้ไม่สามารถย้อนกลับได้ คุณแน่ใจหรือไม่ที่จะลบรายวิชาที่ถูกใจทั้งหมด?
//                       </AlertDialogDescription>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={handleClearAll}
//                         className="bg-red-500 hover:bg-red-600"
//                       >
//                         ลบทั้งหมด
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               )}
//             </div>
//           </CardHeader>

//           <CardContent className="space-y-6">
//             {/* Search and Filters */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
//               <div className="md:col-span-6 relative">
//                 <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 transform -translate-y-1/2" />
//                 <Input
//                   placeholder="ค้นหารายวิชา, รหัสวิชา..."
//                   className="pl-9 h-10 focus:ring-2 focus:ring-primary/20"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <Select
//                   value={selectedFaculty}
//                   onValueChange={setSelectedFaculty}
//                 >
//                   <SelectTrigger className="h-10">
//                     <SelectValue placeholder="คณะ" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {faculties.map((faculty) => (
//                       <SelectItem key={faculty} value={faculty}>
//                         {faculty === 'all' ? 'ทุกคณะ' : faculty}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="md:col-span-3">
//                 <Select
//                   value={selectedYear}
//                   onValueChange={setSelectedYear}
//                 >
//                   <SelectTrigger className="h-10">
//                     <SelectValue placeholder="ปีการศึกษา" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {years.map((year) => (
//                       <SelectItem key={year} value={year}>
//                         {year === 'all' ? 'ทุกปีการศึกษา' : year}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="md:col-span-1">
//                 <Button
//                   variant="outline"
//                   className="w-full h-10 hover:bg-gray-100"
//                   onClick={() => clearFilter('all')}
//                 >
//                   <SlidersHorizontal className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>

//             {/* Active Filters */}
//             {(selectedFaculty !== 'all' || selectedYear !== 'all' || searchQuery) && (
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {selectedFaculty !== 'all' && (
//                   <Badge variant="secondary" className="px-3 py-1 text-sm">
//                     คณะ: {selectedFaculty}
//                     <button
//                       onClick={() => clearFilter('faculty')}
//                       className="ml-2 hover:text-primary"
//                     >
//                       <X className="h-3 w-3 inline" />
//                     </button>
//                   </Badge>
//                 )}
//                 {selectedYear !== 'all' && (
//                   <Badge variant="secondary" className="px-3 py-1 text-sm">
//                     ปีการศึกษา: {selectedYear}
//                     <button
//                       onClick={() => clearFilter('year')}
//                       className="ml-2 hover:text-primary"
//                     >
//                       <X className="h-3 w-3 inline" />
//                     </button>
//                   </Badge>
//                 )}
//                 {searchQuery && (
//                   <Badge variant="secondary" className="px-3 py-1 text-sm">
//                     ค้นหา: {searchQuery}
//                     <button
//                       onClick={() => clearFilter('search')}
//                       className="ml-2 hover:text-primary"
//                     >
//                       <X className="h-3 w-3 inline" />
//                     </button>
//                   </Badge>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {/* Courses Grid */}
//         {filteredFavorites.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
//             {filteredFavorites.map((course) => (
//               <div key={course.courseID} className="h-full relative group">
//                 <CourseCard {...course} />
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className="absolute top-2 right-2 p-2 bg-white/90 hover:bg-red-50 border-none shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
//                     >
//                       <Trash2 className="h-4 w-4 text-red-500" />
//                     </Button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent className="bg-white">
//                     <AlertDialogHeader>
//                       <AlertDialogTitle>ยืนยันการลบรายวิชา</AlertDialogTitle>
//                       <AlertDialogDescription>
//                         คุณแน่ใจหรือไม่ที่ต้องการลบรายวิชา {course.courseID} - {course.courseName} ออกจากรายการที่ถูกใจ?
//                       </AlertDialogDescription>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() => handleRemoveFavorite(course.courseID)}
//                         className="bg-red-500 hover:bg-red-600"
//                       >
//                         ลบรายวิชา
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <Card className="shadow-md">
//             <CardContent className="flex flex-col items-center justify-center py-16">
//               <BookOpen className="w-16 h-16 text-gray-400 mb-6" />
//               <p className="text-gray-500 text-lg text-center mb-4">
//                 {favorites.length === 0
//                   ? 'คุณยังไม่มีรายวิชาที่ถูกใจ กดที่ไอคอนหัวใจบนรายวิชาที่สนใจเพื่อเพิ่มในรายการ'
//                   : 'ไม่พบรายวิชาที่ตรงกับเงื่อนไขการค้นหา'
//                 }
//               </p>
//               {favorites.length > 0 && (
//                 <Button
//                   variant="outline"
//                   onClick={() => clearFilter('all')}
//                   className="hover:bg-gray-100"
//                 >
//                   ล้างตัวกรองทั้งหมด
//                 </Button>
//               )}
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }

// ปัจจุบันใช้อันนี้
// "use client";

// import React, { useState, useCallback, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Heart,
//   Trash2,
//   Search,
//   SlidersHorizontal,
//   BookOpen,
//   CircleX,
//   ArrowLeft,
//   LoaderCircle,
// } from "lucide-react";
// import { CourseInfo } from "@/types/courseType";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// interface FavoriteCoursesContentProps {
//   initialFavorites: CourseInfo[];
// }

// export default function FavoriteCoursesContent({
//   initialFavorites,
// }: FavoriteCoursesContentProps) {
//   const [favorites, setFavorites] = useState(initialFavorites);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedFaculty, setSelectedFaculty] = useState<string>("all");
//   const [selectedYear, setSelectedYear] = useState<string>("all");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const router = useRouter();

//   // Simulate data fetching
//   useEffect(() => {
//     setIsLoading(true);
//     // Simulate a delay for fetching data
//     setTimeout(() => {
//       // You can replace this with actual data fetching logic
//       setFavorites(initialFavorites);
//       setIsLoading(false);
//     }, 1000);
//   }, [initialFavorites]);

//   // Get unique faculties and years from favorites
//   const faculties = [
//     "all",
//     ...new Set(favorites.map((course) => course.faculty)),
//   ];
//   const years = ["all", ...new Set(favorites.map((course) => course.date))];

//   const handleRemoveFavorite = useCallback((courseId: string) => {
//     setFavorites((prev) =>
//       prev.filter((course) => course.courseID !== courseId)
//     );
//   }, []);

//   const handleClearAll = useCallback(() => {
//     setFavorites([]);
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

//   const filteredFavorites = favorites.filter((course) => {
//     const matchesSearch =
//       searchQuery === "" ||
//       course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.courseID.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesFaculty =
//       selectedFaculty === "all" || course.faculty === selectedFaculty;
//     const matchesYear = selectedYear === "all" || course.date === selectedYear;

//     return matchesSearch && matchesFaculty && matchesYear;
//   });

//   if (isLoading) {
//     // แสดงสถานะการโหลดข้อมูล
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <LoaderCircle className="w-12 h-12 text-primary animate-spin" />
//       </div>
//     );
//   }

//   if (error) {
//     // แสดงข้อความเมื่อเกิดข้อผิดพลาด
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <p className="text-red-500 text-lg">เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
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
//     <div className="min-h-screen py-8 max-w-[86rem] lg:w-[86rem]">
//       <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <Card className="mb-8 shadow-md">
//           <CardHeader className="space-y-4">
//             <div className="flex items-center gap-3">
//               <Heart className="w-8 h-8 text-primary" />
//               <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//                 รายวิชาที่ถูกใจ
//               </CardTitle>
//             </div>
//             {/* เพิ่มคำอธิบาย */}
//             <div className="flex justify-between items-center">
//               <div className="text-gray-500 text-lg">
//                 {filteredFavorites.length > 0
//                   ? `รายวิชาที่ถูกใจทั้งหมด ${filteredFavorites.length} รายวิชา`
//                   : "ยังไม่มีรายวิชาที่ถูกใจ"}
//               </div>
//               {favorites.length > 0 && (
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className="text-red-500 hover:text-red-600"
//                     >
//                       <Trash2 className="w-4 h-4 mr-2" />
//                       ล้างรายการทั้งหมด
//                     </Button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent className="bg-white">
//                     <AlertDialogHeader>
//                       <AlertDialogTitle>
//                         ยืนยันการลบรายการที่ถูกใจทั้งหมด
//                       </AlertDialogTitle>
//                       <AlertDialogDescription>
//                         การกระทำนี้ไม่สามารถย้อนกลับได้
//                         คุณแน่ใจหรือไม่ที่จะลบรายวิชาที่ถูกใจทั้งหมด?
//                       </AlertDialogDescription>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={handleClearAll}
//                         className="bg-red-500 hover:bg-red-600"
//                       >
//                         ลบทั้งหมด
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               )}
//             </div>
//           </CardHeader>

//           <CardContent className="space-y-6">
//             {/* คำอธิบายการค้นหาและกรอง */}
//             <div className="text-gray-600 text-sm mb-2">
//               ใช้การค้นหาและตัวกรองเพื่อหาวิชาที่คุณต้องการได้อย่างรวดเร็ว
//             </div>
//             {/* Search and Filters */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
//               <div className="md:col-span-6 relative">
//                 <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 transform -translate-y-1/2" />
//                 <Input
//                   placeholder="ค้นหาด้วยชื่อรายวิชาหรือรหัสวิชา..."
//                   className="pl-9 h-10 focus:ring-2 focus:ring-primary/20"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <Select
//                   value={selectedFaculty}
//                   onValueChange={setSelectedFaculty}
//                 >
//                   <SelectTrigger className="h-10">
//                     <SelectValue placeholder="คณะ" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {faculties.map((faculty) => (
//                       <SelectItem key={faculty} value={faculty}>
//                         {faculty === "all" ? "ทุกคณะ" : faculty}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="md:col-span-3">
//                 <Select value={selectedYear} onValueChange={setSelectedYear}>
//                   <SelectTrigger className="h-10">
//                     <SelectValue placeholder="ปีการศึกษา" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {years.map((year) => (
//                       <SelectItem key={year} value={year}>
//                         {year === "all" ? "ทุกปีการศึกษา" : year}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="md:col-span-1 flex justify-end">
//                 <Button
//                   variant="outline"
//                   className="w-full md:w-auto h-10 hover:bg-gray-100"
//                   onClick={() => clearFilter("all")}
//                 >
//                   <SlidersHorizontal className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>

//             {/* Active Filters */}
//             {(selectedFaculty !== "all" ||
//               selectedYear !== "all" ||
//               searchQuery) && (
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {selectedFaculty !== "all" && (
//                   <Badge variant="secondary" className="px-3 py-1 text-sm">
//                     คณะ: {selectedFaculty}
//                     <button
//                       onClick={() => clearFilter("faculty")}
//                       className="ml-2 hover:text-primary"
//                     >
//                       <CircleX className="h-3 w-3 inline" />
//                     </button>
//                   </Badge>
//                 )}
//                 {selectedYear !== "all" && (
//                   <Badge variant="secondary" className="px-3 py-1 text-sm">
//                     ปีการศึกษา: {selectedYear}
//                     <button
//                       onClick={() => clearFilter("year")}
//                       className="ml-2 hover:text-primary"
//                     >
//                       <CircleX className="h-3 w-3 inline" />
//                     </button>
//                   </Badge>
//                 )}
//                 {searchQuery && (
//                   <Badge variant="secondary" className="px-3 py-1 text-sm">
//                     ค้นหา: {searchQuery}
//                     <button
//                       onClick={() => clearFilter("search")}
//                       className="ml-2 hover:text-primary"
//                     >
//                       <CircleX className="h-3 w-3 inline" />
//                     </button>
//                   </Badge>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {/* เพิ่มปุ่มกลับไปหน้าค้นหารายวิชา */}
//         <div className="flex justify-end mb-4">
//           <Button variant="link" onClick={() => router.push("/faculties")}>
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             กลับไปหน้าค้นหารายวิชา
//           </Button>
//         </div>

//         {/* Courses Grid */}
//         {filteredFavorites.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
//             {filteredFavorites.map((course) => (
//               <div key={course.courseID} className="h-full relative group">
//                 <CourseCard
//                   image={course.image}
//                   courseName={course.courseName}
//                   description={course.description}
//                   courseID={course.courseID}
//                   category={course.category}
//                   date={course.date}
//                   initialLikes={course.likesCount || 0} // Use likesCount from course
//                   facultyName={course.faculty}
//                 />
//                 {/* Trash button to remove favorite */}
//                 <TooltipProvider>
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <AlertDialog>
//                         <AlertDialogTrigger asChild>
//                           <Button
//                             variant="outline"
//                             className="absolute top-2 right-2 p-2 bg-white/90 hover:bg-red-50 border-none shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
//                             aria-label="ลบรายวิชาออกจากที่ถูกใจ"
//                           >
//                             <Trash2 className="h-4 w-4 text-red-500" />
//                           </Button>
//                         </AlertDialogTrigger>
//                         <AlertDialogContent className="bg-white">
//                           <AlertDialogHeader>
//                             <AlertDialogTitle>
//                               ยืนยันการลบรายวิชา
//                             </AlertDialogTitle>
//                             <AlertDialogDescription>
//                               คุณแน่ใจหรือไม่ที่ต้องการลบรายวิชา{" "}
//                               {course.courseID} - {course.courseName}{" "}
//                               ออกจากรายการที่ถูกใจ?
//                             </AlertDialogDescription>
//                           </AlertDialogHeader>
//                           <AlertDialogFooter>
//                             <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
//                             <AlertDialogAction
//                               onClick={() =>
//                                 handleRemoveFavorite(course.courseID)
//                               }
//                               className="bg-red-500 hover:bg-red-600"
//                             >
//                               ลบรายวิชา
//                             </AlertDialogAction>
//                           </AlertDialogFooter>
//                         </AlertDialogContent>
//                       </AlertDialog>
//                     </TooltipTrigger>
//                     <TooltipContent>ลบรายวิชาออกจากที่ถูกใจ</TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               </div>
//             ))}
//             {/* <CourseCard
//               initialLikes={course.likesCount || 0} // Use likesCount from course
//               facultyName={course.faculty}
//               {...course}
//             /> */}
//           </div>
//         ) : (
//           <Card className="shadow-md">
//             <CardContent className="flex flex-col items-center justify-center py-16">
//               <BookOpen className="w-16 h-16 text-gray-400 mb-6" />
//               {favorites.length === 0 ? (
//                 <>
//                   <p className="text-gray-500 text-lg text-center mb-4">
//                     คุณยังไม่มีรายวิชาที่ถูกใจ
//                     กดที่ไอคอนหัวใจบนรายวิชาที่สนใจเพื่อเพิ่มในรายการ
//                   </p>
//                   <Button
//                     variant="default"
//                     onClick={() => router.push("/All_Courses")}
//                     className="mt-4"
//                   >
//                     ค้นหารายวิชา
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <p className="text-gray-500 text-lg text-center mb-4">
//                     ไม่พบรายวิชาที่ตรงกับเงื่อนไขการค้นหา
//                     ลองปรับตัวกรองหรือล้างการค้นหาเพื่อดูวิชาทั้งหมด
//                   </p>
//                   <Button
//                     variant="outline"
//                     onClick={() => clearFilter("all")}
//                     className="hover:bg-gray-100 mt-4"
//                   >
//                     ล้างตัวกรองทั้งหมด
//                   </Button>
//                 </>
//               )}
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  Trash2,
  Search,
  SlidersHorizontal,
  BookOpen,
  CircleX,
  ArrowLeft,
  LoaderCircle,
  HeartOff,
} from "lucide-react";
import { CourseInfo } from "@/types/courseType";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard/CourseCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FavoriteCoursesContentProps {
  initialFavorites: CourseInfo[];
}

export default function FavoriteCoursesContent({
  initialFavorites,
}: FavoriteCoursesContentProps) {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const router = useRouter();

  // Get unique faculties and years from favorites
  const faculties = [
    "all",
    ...Array.from(new Set(favorites.map((course) => course.faculty))),
  ];
  const years = [
    "all",
    ...Array.from(new Set(favorites.map((course) => course.date))),
  ];

  const handleRemoveFavorite = useCallback(async (courseId: string) => {
    setIsDeleting(true);
    setDeleteError(null);
    try {
      const response = await fetch(
        `/api/like/${encodeURIComponent(courseId)}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();
      console.log("Delete single response:", response.status, data);

      if (response.ok) {
        setFavorites((prev) =>
          prev.filter((course) => course.courseID !== courseId)
        );
        toast.success("ลบรายวิชาออกจากที่ถูกใจสำเร็จ");
      } else if (response.status === 404) {
        setDeleteError("ไม่พบรายการที่ถูกใจดังกล่าว");
        toast.error("ไม่พบรายการที่ถูกใจดังกล่าว");
      } else {
        setDeleteError("ไม่สามารถลบรายการที่ถูกใจได้");
        toast.error("ไม่สามารถลบรายการที่ถูกใจได้");
      }
    } catch (error) {
      setDeleteError("เกิดข้อผิดพลาดในการลบรายการที่ถูกใจ");
      toast.error("เกิดข้อผิดพลาดในการลบรายการที่ถูกใจ");
      console.error("เกิดข้อผิดพลาดในการลบรายการที่ถูกใจ:", error);
    } finally {
      setIsDeleting(false);
    }
  }, []);

  const handleClearAll = useCallback(async () => {
    setIsDeleting(true);
    setDeleteError(null);
    try {
      const response = await fetch("/api/like", {
        method: "DELETE",
      });

      const data = await response.json();
      console.log("Delete all response:", response.status, data);

      if (response.ok) {
        setFavorites([]);
        toast.success("ลบรายการที่ถูกใจทั้งหมดสำเร็จ");
      } else if (response.status === 404) {
        setDeleteError("ไม่มีรายการที่ถูกใจเพื่อทำการลบ");
        toast.error("ไม่มีรายการที่ถูกใจเพื่อทำการลบ");
      } else {
        setDeleteError("ไม่สามารถลบรายการที่ถูกใจทั้งหมดได้");
        toast.error("ไม่สามารถลบรายการที่ถูกใจทั้งหมดได้");
      }
    } catch (error) {
      setDeleteError("เกิดข้อผิดพลาดในการลบรายการที่ถูกใจทั้งหมด");
      toast.error("เกิดข้อผิดพลาดในการลบรายการที่ถูกใจทั้งหมด");
      console.error("เกิดข้อผิดพลาดในการลบรายการที่ถูกใจทั้งหมด:", error);
    } finally {
      setIsDeleting(false);
    }
  }, []);

  const clearFilter = useCallback(
    (type: "search" | "faculty" | "year" | "all") => {
      switch (type) {
        case "search":
          setSearchQuery("");
          break;
        case "faculty":
          setSelectedFaculty("all");
          break;
        case "year":
          setSelectedYear("all");
          break;
        case "all":
          setSearchQuery("");
          setSelectedFaculty("all");
          setSelectedYear("all");
          break;
      }
    },
    []
  );

  const filteredFavorites = favorites.filter((course) => {
    const matchesSearch =
      searchQuery === "" ||
      course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.courseID.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFaculty =
      selectedFaculty === "all" || course.faculty === selectedFaculty;
    const matchesYear = selectedYear === "all" || course.date === selectedYear;

    return matchesSearch && matchesFaculty && matchesYear;
  });

  if (isLoading) {
    // แสดงสถานะการโหลดข้อมูล
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoaderCircle className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    // แสดงข้อความเมื่อเกิดข้อผิดพลาด
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 text-lg">เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
        <Button
          variant="outline"
          onClick={() => window.location.reload()}
          className="mt-4"
        >
          ลองอีกครั้ง
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 max-w-[86rem] lg:w-[86rem]">
      <ToastContainer />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <Card className="mb-8 shadow-md">
          <CardHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                รายวิชาที่ถูกใจ
              </CardTitle>
            </div>
            {/* เพิ่มคำอธิบาย */}
            <div className="flex justify-between items-center">
              <div className="text-gray-500 text-lg">
                {filteredFavorites.length > 0
                  ? `รายวิชาที่ถูกใจทั้งหมด ${filteredFavorites.length} รายวิชา`
                  : "ยังไม่มีรายวิชาที่ถูกใจ"}
              </div>
              {favorites.length > 0 && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="text-red-500 hover:text-red-600"
                      disabled={isDeleting}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      ล้างรายการทั้งหมด
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        ยืนยันการลบรายการที่ถูกใจทั้งหมด
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        การกระทำนี้ไม่สามารถย้อนกลับได้
                        คุณแน่ใจหรือไม่ที่จะลบรายวิชาที่ถูกใจทั้งหมด?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel disabled={isDeleting}>
                        ยกเลิก
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleClearAll}
                        className="bg-red-500 hover:bg-red-600"
                        disabled={isDeleting}
                      >
                        ลบทั้งหมด
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* แสดงข้อความข้อผิดพลาดในการลบ */}
            {deleteError && (
              <div className="text-red-500 text-sm mb-4">{deleteError}</div>
            )}

            {/* คำอธิบายการค้นหาและกรอง */}
            <div className="text-gray-600 text-sm mb-2">
              ใช้การค้นหาและตัวกรองเพื่อหาวิชาที่คุณต้องการได้อย่างรวดเร็ว
            </div>
            {/* Search and Filters */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-6 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 transform -translate-y-1/2" />
                <Input
                  placeholder="ค้นหาด้วยชื่อรายวิชาหรือรหัสวิชา..."
                  className="pl-9 h-10 focus:ring-2 focus:ring-primary/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="md:col-span-2">
                <Select
                  value={selectedFaculty}
                  onValueChange={setSelectedFaculty}
                >
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="คณะ" />
                  </SelectTrigger>
                  <SelectContent>
                    {faculties.map((faculty) => (
                      <SelectItem key={faculty} value={faculty}>
                        {faculty === "all" ? "ทุกคณะ" : faculty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-3">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="ปีการศึกษา" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year === "all" ? "ทุกปีการศึกษา" : year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-1 flex justify-end">
                <Button
                  variant="outline"
                  className="w-full md:w-auto h-10 hover:bg-gray-100"
                  onClick={() => clearFilter("all")}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedFaculty !== "all" ||
              selectedYear !== "all" ||
              searchQuery) && (
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedFaculty !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    คณะ: {selectedFaculty}
                    <button
                      onClick={() => clearFilter("faculty")}
                      className="ml-2 hover:text-primary"
                    >
                      <CircleX className="h-3 w-3 inline" />
                    </button>
                  </Badge>
                )}
                {selectedYear !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    ปีการศึกษา: {selectedYear}
                    <button
                      onClick={() => clearFilter("year")}
                      className="ml-2 hover:text-primary"
                    >
                      <CircleX className="h-3 w-3 inline" />
                    </button>
                  </Badge>
                )}
                {searchQuery && (
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    ค้นหา: {searchQuery}
                    <button
                      onClick={() => clearFilter("search")}
                      className="ml-2 hover:text-primary"
                    >
                      <CircleX className="h-3 w-3 inline" />
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* เพิ่มปุ่มกลับไปหน้าค้นหารายวิชา */}
        <div className="flex justify-end mb-4">
          <Button variant="link" onClick={() => router.push("/faculties")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            กลับไปหน้าค้นหารายวิชา
          </Button>
        </div>

        {/* Courses Grid */}
        {filteredFavorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {filteredFavorites.map((course) => (
              <div key={course.courseID} className="h-full relative group">
                <CourseCard
                  image={course.image}
                  courseName={course.courseName}
                  description={course.description}
                  courseID={course.courseID}
                  category={course.category}
                  date={course.date}
                  initialLikes={course.likesCount || 0} // Use likesCount from course
                  facultyName={course.faculty}
                />
                {/* Trash button to remove favorite */}
              </div>
            ))}
          </div>
        ) : (
          <Card className="shadow-md">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mb-6" />
              {favorites.length === 0 ? (
                <>
                  <p className="text-gray-500 text-lg text-center mb-4">
                    คุณยังไม่มีรายวิชาที่ถูกใจ
                    กดที่ไอคอนหัวใจบนรายวิชาที่สนใจเพื่อเพิ่มในรายการ
                  </p>
                  <Button
                    variant="default"
                    onClick={() => router.push("/All_Courses")}
                    className="mt-4"
                  >
                    ค้นหารายวิชา
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-gray-500 text-lg text-center mb-4">
                    ไม่พบรายวิชาที่ตรงกับเงื่อนไขการค้นหา
                    ลองปรับตัวกรองหรือล้างการค้นหาเพื่อดูวิชาทั้งหมด
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => clearFilter("all")}
                    className="hover:bg-gray-100 mt-4"
                  >
                    ล้างตัวกรองทั้งหมด
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

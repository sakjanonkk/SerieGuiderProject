// "use client";

// import React from 'react';
// import UserDropdown from '@/components/navigation/dropdownNav';
// import GoogleSignInButton from '@/components/GoogleSignInButton';
// import { Card, CardContent } from '@/components/ui/card';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// const TestCompo = () => {
//   return (
//     <div>
//       <h1>Hi</h1>
//       {/* เรียกใช้ UserDropdown component */}
//       <UserDropdown />
//       {/* console.log(`${session?.user?.id}`) */}
//       <div>
//       <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full max-w-sm"
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//       </div>
//     </div>

//   );
// };

// export default TestCompo;

// import React from "react";
// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";

// interface CourseInfo {
//   image: string;
//   faculty: string;
//   courseName: string;
//   courseID: string;
//   description: string;
//   category: string;
//   date: string;
// }

// const CourseCard = ({
//   image,
//   faculty,
//   courseName,
//   description,
//   courseID,
//   category,
//   date,
// }: CourseInfo) => (
//   <Card className="group overflow-hidden border-none shadow-lg">
//     <CardContent className="p-0">
//       <div className="relative h-48 overflow-hidden">
//         <Image
//           src={image}
//           alt={courseName}
//           fill
//           className=" transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       <div className="p-6 space-y-4">
//         <CardHeader className="p-0 space-y-2">
//           <CardTitle className="line-clamp-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
//             {courseName}
//           </CardTitle>
//           <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
//             {description}
//           </CardDescription>
//         </CardHeader>
//         <div className="flex items-center justify-between ">
//           <div>
//             <Badge
//               variant="secondary"
//               className="rounded-full mr-2 bg-blue-100"
//             >
//               {courseID}
//             </Badge>
//             <Badge variant="secondary" className="rounded-full">
//               {category}
//             </Badge>
//           </div>

//           <time className="text-sm text-muted-foreground">{date}</time>
//         </div>
//       </div>
//     </CardContent>
//   </Card>
// );

// export default function CourseCarousel() {
//   const blogPosts: CourseInfo[] = [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "Layout for Design",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
//       courseID: "EN813001",
//       category: "Coding",
//       date: "Jul 16, 2024",
//       faculty: "",
//     },
//     {
//       image: "/animate/test.svg",
//       courseName: "INTRODUCTION TO RECREATION",
//       description:
//         "Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue.",
//       courseID: "EN813002",
//       category: "Design",
//       date: "May 10, 2024",
//       faculty: "",
//     },
//     {
//       image: "/animate/test2.svg",
//       courseName: "PUBLIC HEALTH INNOVATION AND CIVIL SOCIETY",
//       description:
//         "Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut.",
//       courseID: "EN813003",
//       category: "Coding",
//       date: "Apr 27, 2024",
//       faculty: "",
//     },
//     {
//       image: "/animate/test3.svg",
//       courseName: "How to build at the speed ",
//       description:
//         "Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut.",
//       courseID: "EN813004",
//       category: "Coding",
//       date: "Apr 30, 2024",
//       faculty: "",
//     },
//     {
//       image: "/animate/test4.svg",
//       courseName:
//         "How to build at the speed of no-code without customization limits",
//       description:
//         "Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut.",
//       courseID: "EN813005",
//       category: "Coding",
//       date: "Apr 30, 2024",
//       faculty: "",
//     },
//   ];

//   return (
//     <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full"
//       >
//         <CarouselContent className="-ml-2 md:-ml-3">
//           {blogPosts.map((post, index) => (
//             <CarouselItem
//               key={index}
//               className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
//             >
//               <div className="h-full">
//                 <CourseCard {...post} />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious
//           className={cn(
//             "absolute left-0 sm:left-2 lg:-left-12",
//             "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12",
//             "border-2 rounded-full",
//             "bg-white/80 hover:bg-white/90",
//             "backdrop-blur-sm shadow-lg hover:shadow-xl",
//             "transition-all duration-200"
//           )}
//         />
//         <CarouselNext
//           className={cn(
//             "absolute right-0 sm:right-2 lg:-right-12",
//             "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12",
//             "border-2 rounded-full",
//             "bg-white/80 hover:bg-white/90",
//             "backdrop-blur-sm shadow-lg hover:shadow-xl",
//             "transition-all duration-200"
//           )}
//         />
//       </Carousel>

//     </div>

//   );
// }

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";

// interface CourseInfo {
//   image: string;
//   faculty: string;
//   courseName: string;
//   courseID: string;
//   description: string;
//   category: string;
//   date: string;
// }

// const CourseCard = ({
//   image,
//   faculty,
//   courseName,
//   description,
//   courseID,
//   category,
//   date,
// }: CourseInfo) => {
//   const [likes, setLikes] = useState<number>(0);
//   const [isLiked, setIsLiked] = useState<boolean>(false);

//   const handleLike = async () => {
//     const newLikeStatus = !isLiked;
//     setIsLiked(newLikeStatus);
//     setLikes((prevLikes) => (newLikeStatus ? prevLikes + 1 : prevLikes - 1));

//     try {
//       await fetch("/api/like", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ courseId: courseID, liked: newLikeStatus }),
//       });
//     } catch (error) {
//       console.error("Failed to update likes:", error);
//     }
//   };

//   return (
//     <Card className="group overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow ">
//       <CardContent className="p-0">
//         <div className="relative h-48 overflow-hidden">
//           <Image
//             src={image}
//             alt={courseName}
//             fill
//             className="transition-transform duration-300 group-hover:scale-105"
//           />
//         </div>
//         <div className="p-6 space-y-4">
//           <CardHeader className="p-0 space-y-2">
//             <CardTitle className="line-clamp-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
//               {courseName}
//             </CardTitle>
//             <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
//               {description}
//             </CardDescription>
//           </CardHeader>
//           <div className="flex items-center justify-between">
//             <div>
//               <Badge variant="secondary" className="rounded-full mr-2 bg-blue-100">
//                 {courseID}
//               </Badge>
//               <Badge variant="secondary" className="rounded-full">
//                 {category}
//               </Badge>
//             </div>
//             <time className="text-sm text-muted-foreground">{date}</time>
//           </div>
//           <div className="flex items-center justify-between mt-4">
//             <button
//               onClick={handleLike}
//               className={cn(
//                 "flex items-center text-sm transition-colors bg-gray-100 px-3 py-2 rounded-lg shadow-md hover:bg-gray-200",
//                 isLiked ? "text-red-500" : "text-primary"
//               )}
//             >
//               <Heart
//                 className={cn("mr-2 h-5 w-5", isLiked ? "fill-red-500" : "fill-none")}
//                 fill={isLiked ? "red" : "none"}
//               />
//               {isLiked ? "Hearted" : "Give Heart"}
//             </button>
//             <div className="text-sm text-muted-foreground">
//               Total Hearts: {likes}
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default function CourseCarousel() {
//   const blogPosts: CourseInfo[] = [
//     {
//       image: "/animate/warning-animate.svg",
//       courseName: "Layout for Design",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
//       courseID: "EN813001",
//       category: "Coding",
//       date: "",
//       faculty: "",
//     },{
//       image: "/animate/warning-animate.svg",
//       courseName: "Layout for Design",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
//       courseID: "EN813001",
//       category: "Coding",
//       date: "",
//       faculty: "",
//     },{
//       image: "/animate/warning-animate.svg",
//       courseName: "Layout for Design",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
//       courseID: "EN813001",
//       category: "Coding",
//       date: "",
//       faculty: "",
//     },{
//       image: "/animate/warning-animate.svg",
//       courseName: "Layout for Design",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
//       courseID: "EN813001",
//       category: "Coding",
//       date: "",
//       faculty: "",
//     }
//     // เพิ่มข้อมูลคอร์สอื่น ๆ ที่นี่...
//   ];

//   return (
//     <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//   {/* ส่วนหัว */}
//   <div className="mb-4">
//     <h2 className="text-2xl font-bold text-gray-800">คณะศึกษาศาสตร์</h2>
//     <a
//       href="#"
//       className="text-primary hover:underline text-base flex items-center space-x-1"
//     >
//       <span>ดูรายวิชาเสรีทั้งหมดจากคณะศึกษาศาสตร์</span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-4 w-4"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M14 5l7 7m0 0l-7 7m7-7H3"
//         />
//       </svg>
//     </a>
//   </div>

//   {/* Carousel */}
//   <Carousel
//     opts={{
//       align: "start",
//       loop: true,
//     }}
//     className="w-full"
//   >
//     <CarouselContent className="-ml-2 md:-ml-3 pb-2">
//       {blogPosts.map((post, index) => (
//         <CarouselItem
//           key={index}
//           className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
//         >
//           <div className="h-full">
//             <CourseCard {...post} />
//           </div>
//         </CarouselItem>
//       ))}
//     </CarouselContent>
//          <CarouselPrevious
//           className={cn(
//             "absolute left-0 sm:left-2 lg:-left-12 z-20",
//             "h-8 w-8 sm:h-10 sm:w-10 lg:h-10 lg:w-10",
//             "border-2 rounded-full",
//             "bg-white/80 hover:bg-[#dbeafe]",
//             "backdrop-blur-sm shadow-lg hover:shadow-xl",
//             "flex items-center justify-center",
//             "transition-all duration-200"
//           )}
//         >
//           <ChevronLeft className="h-4 w-4 text-gray-800 hover:text-white transition-colors duration-200" />
//         </CarouselPrevious>
//         <CarouselNext
//           className={cn(
//             "absolute right-0 sm:right-2 lg:-right-12 z-20",
//             "h-8 w-8 sm:h-10 sm:w-10 lg:h-10 lg:w-10",
//             "border-2 rounded-full",
//             "bg-white/80 hover:bg-[#dbeafe]",
//             "backdrop-blur-sm shadow-lg hover:shadow-xl",
//             "flex items-center justify-center",
//             "transition-all duration-200"
//           )}
//         >
//           <ChevronRight className="h-4 w-4 text-gray-800 hover:text-white transition-colors duration-200" />
//         </CarouselNext>

//   </Carousel>
// </div>
//   );
// }
"use client";
import React from "react";
import CourseCarousel from "@/components/CourseCarousel/CourseCarousel";
import {
  ChevronRight,
  GraduationCap,
  Code,
  FlaskConical,
  Users,
} from "lucide-react";
import FacultyCard from "@/components/CourseCard/FacultyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import CourseCard from "@/components/CourseCard/CourseCard";

export default function HomePage() {
  interface Faculty {
    name: string;
    nameEn: string;
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    accent: string;
    borderAccent: string;
    description: string;
  }
  const coursesEN = [
    {
      image: "/animate/warning-animate.svg",
      courseName: "Layout for Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
      courseID: "EN813001",
      category: "Coding",
      date: "Jul 16, 2024",
      faculty: "คณะศึกษาศาสตร์",
    },
  ];
  const FACULTY_DATA: Faculty[] = [
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
  ];
  const coursesED = [
    {
      image: "/animate/warning-animate.svg",
      courseName: "Layout for Design1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
      courseID: "ED813001",
      category: "Coding",
      date: "Jul 16, 2024",
      faculty: "คณะศึกษาศาสตร์",
      facultyAKA: "DE",
    },
    {
      image: "/animate/warning-animate.svg",
      courseName: "Layout for Design1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
      courseID: "ED813001",
      category: "Coding",
      date: "Jul 16, 2024",
      faculty: "คณะศึกษาศาสตร์",
    },
    {
      image: "/animate/warning-animate.svg",
      courseName: "Layout for Design1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
      courseID: "ED813001",
      category: "Coding",
      date: "Jul 16, 2024",
      faculty: "คณะศึกษาศาสตร์",
    },
    {
      image: "/animate/warning-animate.svg",
      courseName: "Layout for Design1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
      courseID: "ED813001",
      category: "Coding",
      date: "Jul 16, 2024",
      faculty: "คณะศึกษาศาสตร์",
    },
  ];

  return (
    <div className="pb-10  w-8/12">
      <div className=" mx-auto">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FACULTY_DATA.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
        <div className="pb-10 w-full">
          <CourseCarousel  courses={coursesED} />
        </div>
        <div className="pb-10 w-full">
          <CourseCarousel courses={coursesED} />
        </div>
      </div>
    </div>
  );
}

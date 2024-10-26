// "use client";

// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";
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

// interface CourseCarouselProps {
//   courses: CourseInfo[];
// }

// const CourseCarousel = ({ courses }: CourseCarouselProps) => {
//   return (
//     <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full"
//       >
//         <CarouselContent className="-ml-2 md:-ml-3 pb-2">
//           {courses.map((course, index) => (
//             <CarouselItem
//               key={index}
//               className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
//             >
//               <CourseCard {...course} />
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* แสดงปุ่มเลื่อนเฉพาะเมื่อมีจำนวนคอร์สมากกว่า 3 */}
//         {courses.length > 2 && (
//           <>
//             <CarouselPrevious
//               className={cn(
//                 "absolute left-0 sm:left-2 lg:-left-12 z-20",
//                 "h-8 w-8 sm:h-10 sm:w-10 lg:h-10 lg:w-10",
//                 "border-2 rounded-full",
//                 "bg-white/80 hover:bg-[#dbeafe]",
//                 "backdrop-blur-sm shadow-lg hover:shadow-xl",
//                 "flex items-center justify-center",
//                 "transition-all duration-200"
//               )}
//             >
//               <ChevronLeft className="h-4 w-4 text-gray-800 hover:text-white transition-colors duration-200" />
//             </CarouselPrevious>
//             <CarouselNext
//               className={cn(
//                 "absolute right-0 sm:right-2 lg:-right-12 z-20",
//                 "h-8 w-8 sm:h-10 sm:w-10 lg:h-10 lg:w-10",
//                 "border-2 rounded-full",
//                 "bg-white/80 hover:bg-[#dbeafe]",
//                 "backdrop-blur-sm shadow-lg hover:shadow-xl",
//                 "flex items-center justify-center",
//                 "transition-all duration-200"
//               )}
//             >
//               <ChevronRight className="h-4 w-4 text-gray-800 hover:text-white transition-colors duration-200" />
//             </CarouselNext>
//           </>
//         )}
//       </Carousel>
//     </div>
//   );
// };

// export default CourseCarousel;


// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";
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

// interface CourseCarouselProps {
//   courses: CourseInfo[];
// }

// const CourseCarousel = ({ courses }: CourseCarouselProps) => {
//   const [showButtons, setShowButtons] = useState(false);
//   const [slidesPerView, setSlidesPerView] = useState(1);

//   useEffect(() => {
//     const updateLayout = () => {
//       const width = window.innerWidth;
//       if (width < 640) {        // mobile
//         setSlidesPerView(1);
//         setShowButtons(false);
//       } else if (width < 1024) { // tablet
//         setSlidesPerView(2);
//         setShowButtons(false);
//       } else {                   // desktop
//         setSlidesPerView(3);
//         setShowButtons(true);
//       }
//     };

//     updateLayout();
//     window.addEventListener("resize", updateLayout);
//     return () => window.removeEventListener("resize", updateLayout);
//   }, []);

//   return (
//     <div className="relative w-full max-w-[90rem] mx-auto">
//       {/* Container padding adjusts based on screen size */}
//       <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//             slidesToScroll: 1,
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="-ml-2 md:-ml-4">
//             {courses.map((course, index) => (
//               <CarouselItem
//                 key={index}
//                 // Responsive classes for different screen sizes
//                 className={cn(
//                   "pl-2 md:pl-4", // Base padding
//                   "basis-full", // Mobile: 1 card
//                   "sm:basis-1/2", // Tablet: 2 cards
//                   "lg:basis-1/3", // Desktop: 3 cards
//                 //   "transition-all duration-300" // Smooth transitions
//                 )}
//               >
//                 <div className="h-full p-1">
//                   <CourseCard {...course} />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {/* Navigation Buttons - Show only on larger screens and when there are enough items */}
//           {courses.length > slidesPerView && showButtons && (
//             <>
//               <CarouselPrevious
//                 className={cn(
//                   "absolute hidden lg:flex",
//                   "-left-4 xl:-left-8",
//                   "h-12 w-12",
//                   "border-2 rounded-full",
//                   "bg-white/90 hover:bg-blue-50",
//                   "backdrop-blur-sm",
//                   "shadow-lg hover:shadow-xl",
//                   "items-center justify-center",
//                   "transition-all duration-200",
//                   "focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 )}
//               >
//                 <ChevronLeft className="h-6 w-6 text-gray-800" />
//               </CarouselPrevious>
//               <CarouselNext
//                 className={cn(
//                   "absolute hidden lg:flex",
//                   "-right-4 xl:-right-8",
//                   "h-12 w-12",
//                   "border-2 rounded-full",
//                   "bg-white/90 hover:bg-blue-50",
//                   "backdrop-blur-sm",
//                   "shadow-lg hover:shadow-xl",
//                   "items-center justify-center",
//                   "transition-all duration-200",
//                   "focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 )}
//               >
//                 <ChevronRight className="h-6 w-6 text-gray-800" />
//               </CarouselNext>
//             </>
//           )}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default CourseCarousel;



// "use client";
// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";
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

// interface CourseCarouselProps {
//   courses: CourseInfo[];
// }

// const CourseCarousel = ({ courses }: CourseCarouselProps) => {
//   // กำหนดจำนวนสไลด์ที่แสดงต่อหน้าจอตามขนาดหน้าจอ
//   const slidesPerView = {
//     base: 1, // มือถือ
//     sm: 2,   // แท็บเล็ต
//     lg: 3,   // เดสก์ท็อป
//   };

//   return (
//     <div className="relative w-full max-w-[90rem] mx-auto">
//       {/* ปรับระยะห่างด้านข้างตามขนาดหน้าจอ */}
//       <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="-ml-2 md:-ml-4 flex">
//             {courses.map((course, index) => (
//               <CarouselItem
//                 key={index}
//                 className={cn(
//                   "pl-2 md:pl-4",
//                   "flex-shrink-0",
//                   // กำหนดความกว้างของสไลด์ตามขนาดหน้าจอ
//                   "w-full",       // มือถือ: 1 การ์ดต่อหน้า
//                   "sm:w-1/2",     // แท็บเล็ต: 2 การ์ดต่อหน้า
//                   "lg:w-1/3"      // เดสก์ท็อป: 3 การ์ดต่อหน้า
//                 )}
//               >
//                 <div className="h-full p-1">
//                   <CourseCard {...course} />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {/* ปุ่มนำทาง - แสดงเฉพาะบนหน้าจอขนาดใหญ่และเมื่อมีคอร์สมากกว่าจำนวนสไลด์ที่แสดงต่อหน้า */}
//           {courses.length > slidesPerView.lg && (
//             <>
//               <CarouselPrevious
//                 className={cn(
//                   "absolute hidden lg:flex",
//                   "left-2 xl:left-4",
//                   "top-1/2 transform -translate-y-1/2",
//                   "h-10 w-10",
//                   "border-2 rounded-full",
//                   "bg-white/90 hover:bg-blue-50",
//                   "backdrop-blur-sm",
//                   "shadow-lg hover:shadow-xl",
//                   "items-center justify-center",
//                   "transition-all duration-200",
//                   "focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 )}
//               >
//                 <ChevronLeft className="h-5 w-5 text-gray-800" />
//               </CarouselPrevious>
//               <CarouselNext
//                 className={cn(
//                   "absolute hidden lg:flex",
//                   "right-2 xl:right-4",
//                   "top-1/2 transform -translate-y-1/2",
//                   "h-10 w-10",
//                   "border-2 rounded-full",
//                   "bg-white/90 hover:bg-blue-50",
//                   "backdrop-blur-sm",
//                   "shadow-lg hover:shadow-xl",
//                   "items-center justify-center",
//                   "transition-all duration-200",
//                   "focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 )}
//               >
//                 <ChevronRight className="h-5 w-5 text-gray-800" />
//               </CarouselNext>
//             </>
//           )}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default CourseCarousel;

// "use client";

// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface CourseInfo {
//   image: string;
//   faculty: string;
//   courseName: string;
//   courseID: string;
//   description: string;
//   category: string;
//   date: string;
// }

// interface CourseCarouselProps {
//   courses: CourseInfo[];
// }

// const CourseCarousel = ({ courses }: CourseCarouselProps) => {
//   // จำนวนสไลด์ที่แสดงต่อหน้า
//   const slidesPerView = {
//     base: 1, // มือถือ
//     sm: 2,   // แท็บเล็ต
//     lg: 3,   // เดสก์ท็อป 
//   };

//   return (
//     <div className="relative w-full max-w-[90rem] mx-auto">
//       {/* ปรับระยะห่างด้านข้างตามขนาดหน้าจอ */}
//       <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
//         <Carousel
//           opts={{
//             align: "start",
//             loop: false,
//             containScroll: "trimSnaps",
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="flex gap-4">
//             {courses.map((course, index) => (
//               <CarouselItem
//                 key={index}
//                 className="
//                   flex-shrink-0
//                   w-full       /* มือถือ: 1 การ์ดต่อหน้า */
//                   sm:w-1/2     /* แท็บเล็ต: 2 การ์ดต่อหน้า */
//                   lg:w-1/3     /* เดสก์ท็อป: 3 การ์ดต่อหน้า */
//                 "
//               >
//                 <div className="h-full p-1">
//                   <CourseCard {...course} />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {/* ปุ่มนำทาง - แสดงเฉพาะบนหน้าจอขนาดใหญ่และเมื่อมีคอร์สมากกว่าจำนวนสไลด์ที่แสดงต่อหน้า */}
//           {courses.length > slidesPerView.lg && (
//             <>
//               <CarouselPrevious
//                 className="
//                   absolute hidden lg:flex
//                   left-2 xl:left-4
//                   top-1/2 transform -translate-y-1/2
//                   h-10 w-10
//                   border-2 rounded-full
//                   bg-white/90 hover:bg-blue-50
//                   backdrop-blur-sm
//                   shadow-lg hover:shadow-xl
//                   items-center justify-center
//                   transition-all duration-200
//                   focus:outline-none focus:ring-2 focus:ring-blue-400
//                 "
//               >
//                 <ChevronLeft className="h-5 w-5 text-gray-800" />
//               </CarouselPrevious>
//               <CarouselNext
//                 className="
//                   absolute hidden lg:flex
//                   right-2 xl:right-4
//                   top-1/2 transform -translate-y-1/2
//                   h-10 w-10
//                   border-2 rounded-full
//                   bg-white/90 hover:bg-blue-50
//                   backdrop-blur-sm
//                   shadow-lg hover:shadow-xl
//                   items-center justify-center
//                   transition-all duration-200
//                   focus:outline-none focus:ring-2 focus:ring-blue-400
//                 "
//               >
//                 <ChevronRight className="h-5 w-5 text-gray-800" />
//               </CarouselNext>
//             </>
//           )}
//         </Carousel>
//       </div>
//     </div>
//   );
// };
// export default CourseCarousel;



// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";
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

// interface CourseCarouselProps {
//   courses: CourseInfo[];
// }

// const CourseCarousel = ({ courses }: CourseCarouselProps) => {
//   const [showButtons, setShowButtons] = useState(false);
//   const [slidesPerView, setSlidesPerView] = useState(1);

//   useEffect(() => {
//     const updateLayout = () => {
//       const width = window.innerWidth;
//       if (width < 640) {        // mobile
//         setSlidesPerView(1);
//         setShowButtons(false);
//       } else if (width < 1024) { // tablet
//         setSlidesPerView(2);
//         setShowButtons(false);
//       } else {                   // desktop
//         setSlidesPerView(3);
//         setShowButtons(true);
//       }
//     };

//     updateLayout();
//     window.addEventListener("resize", updateLayout);
//     return () => window.removeEventListener("resize", updateLayout);
//   }, []);

//   return (
//     <div className="relative w-full max-w-[90rem] mx-auto">
//       {/* Container padding adjusts based on screen size */}
//       <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//             slidesToScroll: 1,
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="-ml-2 md:-ml-4">
//             {courses.map((course, index) => (
//               <CarouselItem
//                 key={index}
//                 // Responsive classes for different screen sizes
//                 className={cn(
//                   "pl-2 md:pl-4", // Base padding
//                   "basis-full",    // Mobile: 1 การ์ด
//                   "sm:basis-1/2",  // Tablet: 2 การ์ด
//                   "lg:basis-1/3"   // Desktop: 3 การ์ด
//                 )}
//               >
//                 <div className="h-full p-1">
//                   <CourseCard {...course} />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {/* Navigation Buttons - Show only on larger screens and when there are enough items */}
//           {courses.length > slidesPerView && showButtons && (
//             <>
//               <CarouselPrevious
//                 className={cn(
//                   "absolute hidden lg:flex",
//                   "-left-4 xl:-left-8",
//                   "h-12 w-12",
//                   "border-2 rounded-full",
//                   "bg-white/90 hover:bg-blue-50",
//                   "backdrop-blur-sm",
//                   "shadow-lg hover:shadow-xl",
//                   "items-center justify-center",
//                   "transition-all duration-200",
//                   "focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 )}
//               >
//                 <ChevronLeft className="h-6 w-6 text-gray-800" />
//               </CarouselPrevious>
//               <CarouselNext
//                 className={cn(
//                   "absolute hidden lg:flex",
//                   "-right-4 xl:-right-8",
//                   "h-12 w-12",
//                   "border-2 rounded-full",
//                   "bg-white/90 hover:bg-blue-50",
//                   "backdrop-blur-sm",
//                   "shadow-lg hover:shadow-xl",
//                   "items-center justify-center",
//                   "transition-all duration-200",
//                   "focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 )}
//               >
//                 <ChevronRight className="h-6 w-6 text-gray-800" />
//               </CarouselNext>
//             </>
//           )}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default CourseCarousel;





// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import CourseCard from "@/components/CourseCard/CourseCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";
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

// interface CourseCarouselProps {
//   courses: CourseInfo[];
// }

// const CourseCarousel = ({ courses }: CourseCarouselProps) => {
//   const [showButtons, setShowButtons] = useState(false);
//   const [slidesPerView, setSlidesPerView] = useState(1);

//   useEffect(() => {
//     const updateLayout = () => {
//       const width = window.innerWidth;
//       let slidesToShow = 1;

//       if (width >= 1024) {
//         slidesToShow = Math.min(4, courses.length); // เดสก์ท็อป แสดงสูงสุด 4 สไลด์
//       } else if (width >= 640) {
//         slidesToShow = Math.min(2, courses.length); // แท็บเล็ต แสดงสูงสุด 2 สไลด์
//       } else {
//         slidesToShow = 1; // มือถือ
//       }

//       setSlidesPerView(slidesToShow);
//       setShowButtons(courses.length > slidesToShow);
//     };

//     updateLayout();
//     window.addEventListener("resize", updateLayout);
//     return () => window.removeEventListener("resize", updateLayout);
//   }, [courses.length]);

//   return (
//     <div className="relative w-full max-w-[90rem] mx-auto">
//       <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
//         <Carousel
//           opts={{
//             align: "start",
//             loop: false,
//             containScroll: "trimSnaps",
//             dragFree: true,
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="flex gap-4">
//             {courses.map((course, index) => (
//               <CarouselItem
//                 key={index}
//                 className={cn(
//                   "pl-2 md:pl-4",
//                   "flex-shrink-0",
//                   "w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%]",
//                   "max-w-[300px]"
//                 )}
//               >
//                 <div className="h-full p-1">
//                   <CourseCard {...course} />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {showButtons && (
//             <>
//               <CarouselPrevious
//                 className={cn(
//                   "absolute hidden lg:flex",
//                   "-left-4 xl:-left-8",
//                   "h-12 w-12",
//                   "border-2 rounded-full",
//                   "bg-white/90 hover:bg-blue-50",
//                   "backdrop-blur-sm",
//                   "shadow-lg hover:shadow-xl",
//                   "items-center justify-center",
//                   "transition-all duration-200",
//                   "focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 )}
//               >
//                 <ChevronLeft className="h-6 w-6 text-gray-800" />
//               </CarouselPrevious>
//               <CarouselNext
//                 className={cn(
//                   "absolute hidden lg:flex",
//                   "-right-4 xl:-right-8",
//                   "h-12 w-12",
//                   "border-2 rounded-full",
//                   "bg-white/90 hover:bg-blue-50",
//                   "backdrop-blur-sm",
//                   "shadow-lg hover:shadow-xl",
//                   "items-center justify-center",
//                   "transition-all duration-200",
//                   "focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 )}
//               >
//                 <ChevronRight className="h-6 w-6 text-gray-800" />
//               </CarouselNext>
//             </>
//           )}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default CourseCarousel;



// อันนี้ไฟนอล
"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "@/components/CourseCard/CourseCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseInfo {
  image: string;
  faculty: string;
  courseName: string;
  courseID: string;
  description: string;
  category: string;
  date: string;
}

interface CourseCarouselProps {
  courses: CourseInfo[];
}

const CourseCarousel = ({ courses }: CourseCarouselProps) => {
  // แสดงปุ่มนำทางเมื่อมีคอร์สมากกว่า 3
  const showButtons = courses.length > 3;

  return (
    <div className="relative w-full max-w-[90rem] mx-auto">
      {/* ปรับระยะห่างด้านข้างตามขนาดหน้าจอ */}
      <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
        <Carousel
          opts={{
            align: "start",
            loop: false,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 flex gap-4">
            {courses.map((course, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "pl-2 md:pl-4",
                  "flex-shrink-0",
                  "w-full",    // มือถือ: 1 การ์ด
                  "sm:w-1/2",  // แท็บเล็ต: 2 การ์ด
                  "lg:w-1/3"   // เดสก์ท็อป: 3 การ์ด
                )}
              >
                <div className="h-full p-1">
                  <CourseCard {...course} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* ปุ่มนำทาง - แสดงเมื่อมีคอร์สมากกว่า 3 */}
          {showButtons && (
            <>
              <CarouselPrevious
                className={cn(
                  "absolute hidden lg:flex",
                  "-left-4 xl:-left-8",
                  "h-12 w-12",
                  "border-2 rounded-full",
                  "bg-white/90 hover:bg-blue-50",
                  "backdrop-blur-sm",
                  "shadow-lg hover:shadow-xl",
                  "items-center justify-center",
                  "transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-blue-400"
                )}
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </CarouselPrevious>
              <CarouselNext
                className={cn(
                  "absolute hidden lg:flex",
                  "-right-4 xl:-right-8",
                  "h-12 w-12",
                  "border-2 rounded-full",
                  "bg-white/90 hover:bg-blue-50",
                  "backdrop-blur-sm",
                  "shadow-lg hover:shadow-xl",
                  "items-center justify-center",
                  "transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-blue-400"
                )}
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </CarouselNext>
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default CourseCarousel;


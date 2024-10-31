// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { Heart } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { useSession } from "next-auth/react";

// interface CourseCardProps {
//   courseID: string;
//   image: string;
//   courseName: string;
//   description: string;
//   category: string;
//   date: string;
//   initialLikes: number;
//   facultyName: string;
// }

// const CourseCard: React.FC<CourseCardProps> = ({
//   courseID,
//   image,
//   courseName,
//   description,
//   category,
//   date,
//   initialLikes,
// }) => {
//   const { data: session, status } = useSession();
//   const [isLiked, setIsLiked] = useState(false);
//   const [likes, setLikes] = useState<number>(initialLikes || 0); // Initialize with 0 if undefined

//   useEffect(() => {
//     // Fetch initial like status if the user is authenticated
//     if (status === "authenticated" && session?.user?.id) {
//       const fetchLikeStatus = async () => {
//         try {
//           const response = await fetch(`/api/like/${courseID}`, {
//             method: "GET",
//           });
//           if (response.ok) {
//             const data = await response.json();
//             setIsLiked(data.isLiked);
//           }
//         } catch (error) {
//           console.error("Error fetching like status:", error);
//         }
//       };
//       fetchLikeStatus();
//     }
//   }, [courseID, session, status]);

//   const handleLikeClick = async () => {
//     if (status !== "authenticated") {
//       alert("Please log in to like a course.");
//       return;
//     }

//     try {
//       const response = await fetch(`/api/like/${courseID}`, {
//         method: "POST",
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setIsLiked(data.liked);
//         setLikes((prevLikes) => (data.liked ? prevLikes + 1 : prevLikes - 1));
//       } else {
//         console.error("Failed to toggle like status:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error toggling like:", error);
//     }
//   };

//   return (
//     <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
//       <CardContent className="p-0">
//         <div className="relative h-56 sm:h-64 overflow-hidden">
//           <Image
//             src={image}
//             alt={courseName}
//             fill
//             className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>
//         <div className="p-6 space-y-4">
//           <CardHeader className="p-0 space-y-1">
//             <CardTitle className="line-clamp-2 text-xl font-bold tracking-tight transition-colors group-hover:text-blue-600">
//               {courseName}
//             </CardTitle>
//             <CardDescription className="line-clamp-2 text-sm text-gray-600">
//               {description}
//             </CardDescription>
//           </CardHeader>
//           <div className="flex items-center justify-between">
//             <div>
//               <Badge variant="secondary" className="rounded-full mr-2 text-xs">
//                 {courseID}
//               </Badge>
//               <Badge variant="secondary" className="rounded-full text-xs">
//                 {category}
//               </Badge>
//             </div>
//             <time className="text-sm text-gray-500">{date}</time>
//           </div>
//           <div className="flex items-center justify-between mt-4">
//             <button
//               onClick={handleLikeClick}
//               className={`flex items-center ${
//                 isLiked ? "text-red-500" : "text-gray-400"
//               }`}
//             >
//               <Heart className={`mr-1 transition-colors duration-300`} />
//               {likes} Likes
//             </button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CourseCard;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { Heart } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { useSession } from "next-auth/react";
// import { cn } from "@/lib/utils"; // ตรวจสอบว่าคุณมีฟังก์ชัน cn สำหรับรวมคลาส

// interface CourseCardProps {
//   courseID: string;
//   image: string;
//   courseName: string;
//   description: string;
//   category: string;
//   date: string;
//   initialLikes: number;
//   facultyName: string;
// }

// const CourseCard: React.FC<CourseCardProps> = ({
//   courseID,
//   image,
//   courseName,
//   description,
//   category,
//   date,
//   initialLikes,
// }) => {
//   const { data: session, status } = useSession();
//   const [isLiked, setIsLiked] = useState(false);
//   const [likes, setLikes] = useState<number>(initialLikes);

//   useEffect(() => {
//     if (status === "authenticated" && session?.user?.id) {
//       const fetchLikeStatus = async () => {
//         try {
//           const response = await fetch(`/api/like/${courseID}`, {
//             method: "GET",
//           });
//           if (response.ok) {
//             const data = await response.json();
//             setIsLiked(data.isLiked);
//           }
//         } catch (error) {
//           console.error("Error fetching like status:", error);
//         }
//       };
//       fetchLikeStatus();
//     }
//   }, [courseID, session, status]);

//   const handleLikeClick = async () => {
//     if (status !== "authenticated") {
//       alert("กรุณาเข้าสู่ระบบเพื่อกดถูกใจหลักสูตรนี้");
//       return;
//     }

//     try {
//       const response = await fetch(`/api/like/${courseID}`, {
//         method: "POST",
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setIsLiked(data.liked);
//         setLikes((prevLikes) => (data.liked ? prevLikes + 1 : prevLikes - 1));
//       } else {
//         console.error("Failed to toggle like status:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error toggling like:", error);
//     }
//   };

//   return (
//     <Card className="group max-w-xs sm:max-w-sm lg:max-w-md mx-auto overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
//       <CardContent className="p-0">
//         <div className="relative h-48 sm:h-64 overflow-hidden">
//           <Image
//             src={image}
//             alt={courseName}
//             fill
//             className="transition-transform duration-300 group-hover:scale-105"
//           />
//         </div>
//         <div className="p-4 sm:p-6 space-y-4">
//           <CardHeader className="p-0 space-y-2">
//             <CardTitle className="line-clamp-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
//               {courseName}
//             </CardTitle>
//             <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
//               {description}
//             </CardDescription>
//           </CardHeader>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <Badge variant="secondary" className="rounded-full bg-blue-100">
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
//               onClick={handleLikeClick}
//               className={cn(
//                 "flex items-center text-sm transition-colors bg-gray-100 px-3 py-2 rounded-lg shadow-md hover:bg-gray-200",
//                 isLiked ? "text-red-500" : "text-primary"
//               )}
//             >
//               <Heart
//                 className={cn(
//                   "mr-2 h-5 w-5",
//                   isLiked ? "fill-red-500" : "fill-none"
//                 )}
//                 fill={isLiked ? "red" : "none"}
//               />
//               {isLiked ? "ถูกใจแล้ว" : "Give Heart"}
//             </button>
//             <div className="text-sm text-muted-foreground">Heart: {likes}</div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CourseCard;


"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Heart, HeartOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils"; // ตรวจสอบว่าคุณมีฟังก์ชัน cn สำหรับรวมคลาส
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

interface CourseCardProps {
  courseID: string;
  image: string;
  courseName: string;
  description: string;
  category: string;
  date: string;
  initialLikes: number;
  facultyName: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseID,
  image,
  courseName,
  description,
  category,
  date,
  initialLikes,
}) => {
  const { data: session, status } = useSession();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState<number>(initialLikes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      const fetchLikeStatus = async () => {
        try {
          const response = await fetch(`/api/like/${encodeURIComponent(courseID)}`, {
            method: "GET",
          });
          if (response.ok) {
            const data = await response.json();
            setIsLiked(data.isLiked);
          }
        } catch (error) {
          console.error("Error fetching like status:", error);
        }
      };
      fetchLikeStatus();
    }
  }, [courseID, session, status]);

  const handleLikeClick = useCallback(async () => {
    if (status !== "authenticated") {
      alert("กรุณาเข้าสู่ระบบเพื่อกดถูกใจหลักสูตรนี้");
      return;
    }

    try {
      const response = await fetch(`/api/like/${encodeURIComponent(courseID)}`, {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setIsLiked(data.liked);
        setLikes((prevLikes) => (data.liked ? prevLikes + 1 : prevLikes - 1));
      } else {
        console.error("Failed to toggle like status:", response.statusText);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  }, [courseID, status]);

  const handleReadMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className="group max-w-xs sm:max-w-sm lg:max-w-md mx-auto overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
        <CardContent className="p-0 flex flex-col flex-grow">
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <Image
              src={image}
              alt={courseName}
              fill
              className="transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
          <div className="p-4 sm:p-6 space-y-4 flex flex-col flex-grow">
            <CardHeader className="p-0 space-y-2">
              <CardTitle className="line-clamp-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                {courseName}
              </CardTitle>
              <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
                {description}
              </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="rounded-full bg-blue-100">
                  {courseID}
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  {category}
                </Badge>
              </div>
              <time className="text-sm text-muted-foreground">{date}</time>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={handleLikeClick}
                className={cn(
                  "flex items-center text-sm transition-colors bg-gray-100 px-3 py-2 rounded-lg shadow-md hover:bg-gray-200",
                  isLiked ? "text-red-500" : "text-primary"
                )}
              >
                <Heart
                  className={cn(
                    "mr-2 h-5 w-5",
                    isLiked ? "fill-red-500" : "fill-none"
                  )}
                  fill={isLiked ? "red" : "none"}
                />
                {isLiked ? "ถูกใจแล้ว" : "ถูกใจ"}
              </button>
              <div className="text-sm text-muted-foreground">Heart: {likes}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal สำหรับแสดงคำอธิบายเต็ม */}
      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogContent className="max-w-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>{courseName}</AlertDialogTitle>
            <AlertDialogDescription>
              <p>{description}</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCloseModal}>ปิด</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CourseCard;

// "use client";

// import React, { useState } from "react";
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
//     <Card className="group overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
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

// export default CourseCard;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const CourseCard = ({
  image,
  faculty,
  courseName,
  description,
  courseID,
  category,
  date,
}: CourseInfo) => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = async () => {
    const newLikeStatus = !isLiked;
    setIsLiked(newLikeStatus);
    setLikes((prevLikes) => (newLikeStatus ? prevLikes + 1 : prevLikes - 1));

    try {
      await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId: courseID, liked: newLikeStatus }),
      });
    } catch (error) {
      console.error("Failed to update likes:", error);
    }
  };

  return (
    <Card className="group max-w-xs sm:max-w-sm lg:max-w-md mx-auto overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <Image
            src={image}
            alt={courseName}
            fill
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 sm:p-6 space-y-4">
          <CardHeader className="p-0 space-y-2">
            <CardTitle className="line-clamp-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
              {courseName}
            </CardTitle>
            <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
              {description}
            </CardDescription>
          </CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <Badge variant="secondary" className="rounded-full mr-2 bg-blue-100">
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
              onClick={handleLike}
              className={cn(
                "flex items-center text-sm transition-colors bg-gray-100 px-3 py-2 rounded-lg shadow-md hover:bg-gray-200",
                isLiked ? "text-red-500" : "text-primary"
              )}
            >
              <Heart
                className={cn("mr-2 h-5 w-5", isLiked ? "fill-red-500" : "fill-none")}
                fill={isLiked ? "red" : "none"}
              />
              {isLiked ? "Hearted" : "Give Heart"}
            </button>
            <div className="text-sm text-muted-foreground">
              Hearts: {likes}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
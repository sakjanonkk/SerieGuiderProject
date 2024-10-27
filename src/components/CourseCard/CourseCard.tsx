import React, { useState, useEffect } from "react";
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
import { useSession } from "next-auth/react";

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
  const [likes, setLikes] = useState<number>(initialLikes || 0); // Initialize with 0 if undefined

  useEffect(() => {
    // Fetch initial like status if the user is authenticated
    if (status === "authenticated" && session?.user?.id) {
      const fetchLikeStatus = async () => {
        try {
          const response = await fetch(`/api/like/${courseID}`, {
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

  const handleLikeClick = async () => {
    if (status !== "authenticated") {
      alert("Please log in to like a course.");
      return;
    }

    try {
      const response = await fetch(`/api/like/${courseID}`, {
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
  };

  return (
    <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
      <CardContent className="p-0">
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <Image
            src={image}
            alt={courseName}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6 space-y-4">
          <CardHeader className="p-0 space-y-1">
            <CardTitle className="line-clamp-2 text-xl font-bold tracking-tight transition-colors group-hover:text-blue-600">
              {courseName}
            </CardTitle>
            <CardDescription className="line-clamp-2 text-sm text-gray-600">
              {description}
            </CardDescription>
          </CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <Badge variant="secondary" className="rounded-full mr-2 text-xs">
                {courseID}
              </Badge>
              <Badge variant="secondary" className="rounded-full text-xs">
                {category}
              </Badge>
            </div>
            <time className="text-sm text-gray-500">{date}</time>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={handleLikeClick}
              className={`flex items-center ${
                isLiked ? "text-red-500" : "text-gray-400"
              }`}
            >
              <Heart className={`mr-1 transition-colors duration-300`} />
              {likes} Likes
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;

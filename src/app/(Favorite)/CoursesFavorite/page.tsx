// src/app/(Favorite)/CoursesFavorite/page.tsx

import FavoriteCoursesContent from "@/components/FavoriteCoursesContent";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "รายวิชาที่ถูกใจ | MyWeb",
  description: "รายการวิชาเสรีที่คุณสนใจ",
};

export default async function FavoritesPage() {
  // Get the current user's session
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login page if the user is not authenticated
    redirect("/login");
  }

  const userId = session.user.id;

  // Fetch the liked courses for the current user
  const favorites = await prisma.like.findMany({
    where: {
      userId: userId,
    },
    include: {
      course: {
        include: {
          faculty: true, // Include faculty data
          category: true, // Include category data
          _count: {
            select: {
              likes: true, // This will include the count of likes for each course
            },
          },
        },
      },
    },
  });
  // Map the favorites to the format needed by FavoriteCoursesContent
  // Map the favorites to the format needed by FavoriteCoursesContent
  // Map the favorites to the format needed by FavoriteCoursesContent
  const initialFavorites = favorites.map((fav) => ({
    image: fav.course.image,
    courseName: fav.course.courseName,
    description: fav.course.courseDescription,
    courseID: fav.course.courseId,
    category: fav.course.category.categoryName,
    date: fav.course.courseYear.toString(),
    faculty: fav.course.faculty.facultyTHName,
    facultyAKA: fav.course.faculty.facultyId,
    likesCount: fav.course._count.likes, // Include likes count
  }));

  return <FavoriteCoursesContent initialFavorites={initialFavorites} />;
}

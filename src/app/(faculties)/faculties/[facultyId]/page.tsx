// src/app/faculties/[facultyId]/page.tsx

import { prisma } from "@/lib/prisma";
import { CoursesContent } from "@/components/CoursesContent";

export default async function FacultyPage({ params }) {
  const facultyId = params.facultyId;

  const courses = await prisma.course.findMany({
    where: {
      facultyId: facultyId,
    },
    include: {
      category: true,
      _count: {
        select: {
          likes: true, // Include likes count
        },
      },
    },
  });

  const initialCourses = courses.map((course) => ({
    image: course.image,
    faculty: course.facultyId,
    courseName: course.courseName,
    courseID: course.courseId,
    description: course.courseDescription,
    category: course.category.categoryName,
    date: course.courseYear.toString(),
    likesCount: course._count.likes, // Include likes count
  }));

  return (
    <CoursesContent facultyId={facultyId} initialCourses={initialCourses} />
  );
}

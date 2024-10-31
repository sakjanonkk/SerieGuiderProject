// import { CourseInfo } from '@/types/courseType';
// import { db } from '@/lib/db';


// export async function getCoursesByFacultyId(facultyId: string): Promise<CourseInfo[]> {
//   try {
//     const courses = await db.coursesData.findMany({
//       where: {
//         facultyId: facultyId,
//       },
//       orderBy: {
//         courseName: 'asc',
//       },
//     });
//     return courses.map(course => ({
//       courseID: course.courseId,
//       image: course.image,
//       courseName: course.courseName,
//       category: course.categoryId,
//       date: course.courseYear.toString(),
//       description: course.courseDescription,
//       faculty: course.facultyId,
//     }));
//   } catch (error) {
//     console.error('Error fetching courses:', error);
//     throw new Error('Failed to fetch courses');
//   }
// }

import { CourseInfo } from '@/types/courseType';
import { db } from '@/lib/db';

export async function getCoursesByFacultyId(facultyId: string): Promise<CourseInfo[]> {
  try {
    const courses = await db.coursesData.findMany({
      where: {
        facultyId: facultyId,
      },
      orderBy: {
        courseName: 'asc',
      },
      include: {
        _count: {
          select: { likes: true },
        },
      },
    });

    return courses.map(course => ({
      courseID: course.courseId,
      image: course.image,
      courseName: course.courseName,
      category: course.categoryId,
      date: course.courseYear.toString(),
      description: course.courseDescription,
      faculty: course.facultyId,
      likesCount: course._count.likes, // เพิ่มบรรทัดนี้
      initialLikes: course._count.likes, // เพิ่มบรรทัดนี้
    }));
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw new Error('Failed to fetch courses');
  }
}

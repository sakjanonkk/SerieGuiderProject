import { CourseInfo } from '@/types/courseType';
import { prisma } from '@/lib/prisma'; // หรือ database client ที่คุณใช้
import { coursesData } from '@/constants/mockData';

export async function getCoursesByFacultyId(facultyId: string) {
  try {
    // TODO: เปลี่ยนเป็น database query จริงเมื่อพร้อม
    return coursesData[facultyId] || [];
    
    // ตัวอย่าง query จริง (comment ไว้):
    /*
    const courses = await prisma.course.findMany({
      where: {
        facultyId: facultyId,
      },
      orderBy: {
        courseName: 'asc',
      },
    });
    return courses;
    */
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw new Error('Failed to fetch courses');
  }
}
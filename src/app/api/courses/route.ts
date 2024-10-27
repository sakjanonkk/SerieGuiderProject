import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Fetch all courses along with related faculty and category information
    const courses = await prisma.coursesData.findMany({
      include: {
        faculty: true, // Include faculty to access faculty names and descriptions
        category: true, // Include category to access category names
      },
    });

    // Check if data is available
    if (!courses || courses.length === 0) {
      return NextResponse.json({ message: 'No courses found' }, { status: 404 });
    }

    // Format the response to include the necessary data
    const formattedCourses = courses.map((course) => ({
      courseId: course.courseId,
      image: course.image,
      courseName: course.courseName,
      description: course.courseDescription,
      category: course.category.categoryName, // Include category name
      courseYear: course.courseYear,
      facultyId: course.facultyId,
      facultyName: course.faculty.facultyENName || course.faculty.facultyTHName,
    }));

    return NextResponse.json(formattedCourses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ error: 'Unable to fetch courses' }, { status: 500 });
  }
}

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const courses = await prisma.coursesData.findMany({
        include: {
          likes: true,
          faculty: true, // Assuming there's a relation named `faculty` in your model
        },
      });

      const courseData = courses.map((course) => ({
        ...course,
        initialLikes: course.likes.length,
        facultyName: course.faculty?.facultyTHName || "Unknown Faculty", // Ensure facultyName is populated
      }));

      res.status(200).json(courseData);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ error: 'Error fetching courses' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

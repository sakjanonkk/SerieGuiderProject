// pages/api/faculty/[facultyId]/courses.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getCoursesByFacultyId } from '@/lib/db/courses';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { facultyId } = req.query;

  if (!facultyId || typeof facultyId !== 'string') {
    return res.status(400).json({ error: 'Invalid faculty ID' });
  }

  try {
    const courses = await getCoursesByFacultyId(facultyId);
    return res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return res.status(500).json({ error: 'Failed to fetch courses' });
  }
}

// File: /pages/api/like/[courseId].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const userId = session.user.id;
  const { courseId } = req.query;

  if (req.method === 'POST') {
    try {
      // Check if the user has already liked the course
      const existingLike = await prisma.like.findUnique({
        where: {
          courseId_userId: {
            courseId: String(courseId),
            userId: userId,
          },
        },
      });

      if (existingLike) {
        // Unlike the course if it was already liked
        await prisma.like.delete({
          where: {
            id: existingLike.id,
          },
        });
        res.status(200).json({ liked: false });
      } else {
        // Like the course if it hasn't been liked yet
        await prisma.like.create({
          data: {
            courseId: String(courseId),
            userId: userId,
          },
        });
        res.status(200).json({ liked: true });
      }
    } catch (error) {
      console.error('Error handling like:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

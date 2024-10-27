import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
// import { pusher } from '@/lib/pusher';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  console.log("API Route Hit with courseId:", req.query.courseId);

  const { courseId } = req.query;

  if (typeof courseId !== 'string') {
    return res.status(400).json({ error: 'Invalid course ID' });
  }

  const session = await getSession({ req });
  if (!session || !session.user?.id) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const userId = session.user.id;

  try {
    if (req.method === 'POST') {
      // Check if user has already liked the course
      const existingLike = await prisma.like.findUnique({
        where: {
          courseId_userId: {
            courseId,
            userId,
          },
        },
      });

      if (existingLike) {
        // Unlike if already liked
        await prisma.like.delete({
          where: {
            id: existingLike.id,
          },
        });
        return res.status(200).json({ liked: false });
      } else {
        // Like the course
        await prisma.like.create({
          data: {
            courseId,
            userId,
          },
        });
        return res.status(200).json({ liked: true });
      }
    } else if (req.method === 'GET') {
      // Check like status for user
      const existingLike = await prisma.like.findUnique({
        where: {
          courseId_userId: {
            courseId,
            userId,
          },
        },
      });

      return res.status(200).json({ isLiked: !!existingLike });
    } else {
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling like:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}

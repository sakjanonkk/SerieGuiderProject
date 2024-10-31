import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma"; // นำเข้า prisma client

export const GET = async (req: Request) => {
  const session = await getServerSession(authOptions);
  return NextResponse.json({ authenticated: !!session });
};

// เพิ่มฟังก์ชันสำหรับจัดการคำขอ DELETE
export const DELETE = async (req: Request) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  // ดึง courseID จาก query parameters
  const { searchParams } = new URL(req.url);
  const courseID = searchParams.get("courseID");

  try {
    if (!courseID) {
      // หากไม่มี courseID ให้ลบรายการที่ถูกใจทั้งหมดของผู้ใช้
      await prisma.like.deleteMany({
        where: {
          userId: userId,
        },
      });

      return NextResponse.json({ message: "ลบรายการที่ถูกใจทั้งหมดสำเร็จ" });
    } else {
      // หากมี courseID ให้ลบรายการที่ถูกใจเฉพาะรายวิชานั้น
      await prisma.like.deleteMany({
        where: {
          courseId: courseID,
          userId: userId,
        },
      });

      return NextResponse.json({ message: "ลบรายการที่ถูกใจสำเร็จ" });
    }
  } catch (error) {
    console.error("Error deleting favorite:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" },
      { status: 500 }
    );
  }
};

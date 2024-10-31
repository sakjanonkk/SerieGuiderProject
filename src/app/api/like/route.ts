// /app/api/like/route.ts

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const deleted = await prisma.like.deleteMany({
      where: {
        userId: userId,
      },
    });

    if (deleted.count === 0) {
      return NextResponse.json({ message: "ไม่มีรายการที่ถูกใจเพื่อทำการลบ" }, { status: 404 });
    }

    return NextResponse.json({ message: "ลบรายการที่ถูกใจทั้งหมดสำเร็จ" });
  } catch (error) {
    console.error("Error deleting all favorites:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" },
      { status: 500 }
    );
  }
}

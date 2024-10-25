import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions} from "@/lib/auth";

export const GET = async (req: Request) => {
    const session = await getServerSession(authOptions);
    return NextResponse.json({ authenticated: !!session });
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        await prisma.$connect();
        const userCount = await prisma.user.count();
        return NextResponse.json({
            status: "ok",
            message: "Database connected successfully",
            userCount
        });
    } catch (error) {
        return NextResponse.json({
            status: "error",
            message: "Database connection failed",
            error: String(error)
        }, { status: 500 });
    }
}

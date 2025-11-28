import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { password } = await request.json();
        const adminPassword = process.env.LOGIN;

        if (!adminPassword) {
            return NextResponse.json({ error: "Admin password not configured" }, { status: 500 });
        }

        if (!password) {
            return NextResponse.json({ error: "Password is required" }, { status: 400 });
        }

        if (password !== adminPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Admin login error:", error);
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}


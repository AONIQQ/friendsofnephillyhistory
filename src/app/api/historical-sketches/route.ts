import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { Prisma } from "@prisma/client";

const ADMIN_PASSWORD = process.env.LOGIN;

function requireAdminPassword(password?: string | null) {
    if (!ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Admin password not configured" }, { status: 500 });
    }
    if (password !== ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return null;
}

type SketchFilePayload = {
    name?: string;
    type?: string;
    data: string;
} | null;

interface SketchPayload {
    title: string;
    description: string;
    pdfUrl?: string | null;
    file?: SketchFilePayload;
}

type SketchData = Prisma.HistoricalSketchCreateInput & Prisma.HistoricalSketchUpdateInput;

const sketchSelect = {
    id: true,
    title: true,
    description: true,
    pdfUrl: true,
    pdfFilename: true,
    pdfMime: true,
    createdAt: true,
};

function buildSketchData(sketch: SketchPayload): SketchData {
    const payload: SketchData = {
        title: sketch.title,
        description: sketch.description,
        pdfUrl: sketch.pdfUrl || null,
    };

    if (sketch.file && sketch.file.data) {
        payload.pdfFilename = sketch.file.name || "document.pdf";
        payload.pdfMime = sketch.file.type || "application/pdf";
        payload.pdfData = Buffer.from(sketch.file.data, "base64");
        payload.pdfUrl = null;
    }

    return payload;
}

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const sketches = await db.historicalSketch.findMany({
            select: sketchSelect,
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(sketches);
    } catch (error) {
        console.error("Error fetching historical sketches:", error);
        return NextResponse.json({ error: "Failed to fetch sketches" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { action, sketch, id, password } = body;
        const sketchPayload: SketchPayload = sketch;

        const passwordError = requireAdminPassword(password);
        if (passwordError) return passwordError;

        if (action === "create") {
            await db.historicalSketch.create({
                data: buildSketchData(sketchPayload),
            });
        } else if (action === "update") {
            if (!id) {
                return NextResponse.json({ error: "Missing sketch id" }, { status: 400 });
            }
            await db.historicalSketch.update({
                where: { id },
                data: buildSketchData(sketchPayload),
            });
        } else if (action === "delete") {
            if (!id) {
                return NextResponse.json({ error: "Missing sketch id" }, { status: 400 });
            }
            await db.historicalSketch.delete({
                where: { id },
            });
        } else {
            return NextResponse.json({ error: "Unsupported action" }, { status: 400 });
        }

        const sketches = await db.historicalSketch.findMany({
            select: sketchSelect,
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({ success: true, sketches });
    } catch (error) {
        console.error("Error processing historical sketch:", error);
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}


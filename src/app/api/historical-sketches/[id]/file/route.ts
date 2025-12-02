import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
    _request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const sketch = await db.historicalSketch.findUnique({
            where: { id },
            select: {
                pdfData: true,
                pdfFilename: true,
                pdfMime: true,
            },
        });

        if (!sketch || !sketch.pdfData) {
            return NextResponse.json({ error: "File not found" }, { status: 404 });
        }

        const filename = sketch.pdfFilename || "historical-sketch.pdf";
        const mime = sketch.pdfMime || "application/pdf";

        const buffer = Buffer.isBuffer(sketch.pdfData)
            ? sketch.pdfData
            : Buffer.from(sketch.pdfData || []);
        const arrayBuffer = buffer.buffer.slice(
            buffer.byteOffset,
            buffer.byteOffset + buffer.byteLength
        ) as ArrayBuffer;
        const blob = new Blob([arrayBuffer], { type: mime });

        return new Response(blob, {
            headers: {
                "Content-Type": mime,
                "Content-Disposition": `inline; filename="${filename}"`,
                "Cache-Control": "public, max-age=3600",
            },
        });
    } catch (error) {
        console.error("Error serving historical sketch file:", error);
        return NextResponse.json({ error: "Failed to load file" }, { status: 500 });
    }
}


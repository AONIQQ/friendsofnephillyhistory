import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

// GET all inductees
export async function GET() {
    try {
        const inductees = await db.inductee.findMany({
            orderBy: {
                inductionYear: "desc",
            },
        });
        return NextResponse.json(inductees);
    } catch (error) {
        console.error("Error fetching inductees:", error);
        return NextResponse.json({ error: "Failed to fetch inductees" }, { status: 500 });
    }
}

// POST create inductee
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { action, inductee, id, password } = body;

        // Simple password check
        if (password !== "NEPhilly") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (action === "create") {
            await db.inductee.create({
                data: {
                    name: inductee.name,
                    years: inductee.years || "",
                    category: inductee.category,
                    inductionYear: inductee.inductionYear,
                    shortBio: inductee.shortBio,
                    fullBio: inductee.fullBio,
                    achievements: inductee.achievements,
                    imageUrl: inductee.imageUrl || null,
                    wikipediaUrl: inductee.wikipediaUrl || null,
                    isPublished: inductee.isPublished ?? true,
                },
            });
        } else if (action === "update") {
            await db.inductee.update({
                where: { id },
                data: {
                    name: inductee.name,
                    years: inductee.years || "",
                    category: inductee.category,
                    inductionYear: inductee.inductionYear,
                    shortBio: inductee.shortBio,
                    fullBio: inductee.fullBio,
                    achievements: inductee.achievements,
                    imageUrl: inductee.imageUrl || null,
                    wikipediaUrl: inductee.wikipediaUrl || null,
                    isPublished: inductee.isPublished ?? true,
                },
            });
        } else if (action === "delete") {
            await db.inductee.delete({
                where: { id },
            });
        }

        const inductees = await db.inductee.findMany({
            orderBy: {
                inductionYear: "desc",
            },
        });

        return NextResponse.json({ success: true, inductees });
    } catch (error) {
        console.error("Error processing inductee:", error);
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}

// DELETE inductee
export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const { id, password } = body;

        if (password !== "NEPhilly") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await db.inductee.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting inductee:", error);
        return NextResponse.json({ error: "Failed to delete inductee" }, { status: 500 });
    }
}

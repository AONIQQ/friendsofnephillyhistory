import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

// GET all events
export async function GET() {
    try {
        const events = await db.event.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
    }
}

// POST create/update/delete event
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { action, event, id, password } = body;

        // Simple password check
        if (password !== "Ward63GOP") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (action === "create") {
            await db.event.create({
                data: {
                    title: event.title,
                    date: event.date,
                    time: event.time,
                    location: event.location,
                    description: event.description,
                    month: event.month,
                    day: event.day,
                },
            });
        } else if (action === "update") {
            await db.event.update({
                where: { id },
                data: {
                    title: event.title,
                    date: event.date,
                    time: event.time,
                    location: event.location,
                    description: event.description,
                    month: event.month,
                    day: event.day,
                },
            });
        } else if (action === "delete") {
            await db.event.delete({
                where: { id },
            });
        }

        const events = await db.event.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ success: true, events });
    } catch (error) {
        console.error("Error processing event:", error);
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}

// DELETE event
export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const { id, password } = body;

        if (password !== "Ward63GOP") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await db.event.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting event:", error);
        return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
    }
}

import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

// GET all nominations
export async function GET() {
    try {
        const nominations = await db.nomination.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(nominations);
    } catch (error) {
        console.error("Error fetching nominations:", error);
        return NextResponse.json({ error: "Failed to fetch nominations" }, { status: 500 });
    }
}

// POST create/update/delete nomination
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { action, nomination, id, password } = body;

        // For creating nominations (from public form), no password required
        if (action === "create" && !password) {
            const newNomination = await db.nomination.create({
                data: {
                    nomineeName: nomination.nomineeName,
                    nomineeCategory: nomination.nomineeCategory,
                    nomineeYears: nomination.nomineeYears || null,
                    nominatorName: nomination.nominatorName,
                    nominatorEmail: nomination.nominatorEmail,
                    nominatorPhone: nomination.nominatorPhone || null,
                    nominatorRelation: nomination.nominatorRelation || null,
                    shortDescription: nomination.shortDescription,
                    achievements: nomination.achievements,
                    significance: nomination.significance,
                    supportingInfo: nomination.supportingInfo || null,
                    status: "pending",
                },
            });
            return NextResponse.json({ success: true, nomination: newNomination });
        }

        // Admin operations require password
        if (password !== "NEPhilly") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (action === "update") {
            await db.nomination.update({
                where: { id },
                data: {
                    nomineeName: nomination.nomineeName,
                    nomineeCategory: nomination.nomineeCategory,
                    nomineeYears: nomination.nomineeYears || null,
                    nominatorName: nomination.nominatorName,
                    nominatorEmail: nomination.nominatorEmail,
                    nominatorPhone: nomination.nominatorPhone || null,
                    nominatorRelation: nomination.nominatorRelation || null,
                    shortDescription: nomination.shortDescription,
                    achievements: nomination.achievements,
                    significance: nomination.significance,
                    supportingInfo: nomination.supportingInfo || null,
                    status: nomination.status,
                    reviewNotes: nomination.reviewNotes || null,
                    reviewedBy: nomination.reviewedBy || null,
                    reviewedAt: nomination.reviewedAt ? new Date(nomination.reviewedAt) : null,
                },
            });
        } else if (action === "updateStatus") {
            await db.nomination.update({
                where: { id },
                data: {
                    status: nomination.status,
                    reviewNotes: nomination.reviewNotes || null,
                    reviewedBy: nomination.reviewedBy || null,
                    reviewedAt: new Date(),
                },
            });
        } else if (action === "delete") {
            await db.nomination.delete({
                where: { id },
            });
        }

        const nominations = await db.nomination.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ success: true, nominations });
    } catch (error) {
        console.error("Error processing nomination:", error);
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}

// DELETE nomination
export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const { id, password } = body;

        if (password !== "NEPhilly") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await db.nomination.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting nomination:", error);
        return NextResponse.json({ error: "Failed to delete nomination" }, { status: 500 });
    }
}

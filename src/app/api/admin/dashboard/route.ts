import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // Fetch counts in parallel
        const [
            totalInductees,
            pendingNominations,
            upcomingEvents,
            galleryImages,
            recentNominations,
            recentEvents
        ] = await Promise.all([
            db.inductee.count(),
            db.nomination.count({ where: { status: "pending" } }),
            db.event.count(),
            db.galleryImage.count(),
            db.nomination.findMany({
                take: 5,
                orderBy: { createdAt: "desc" },
                select: {
                    id: true,
                    nomineeName: true,
                    nomineeCategory: true,
                    createdAt: true,
                    status: true
                }
            }),
            db.event.findMany({
                take: 3,
                orderBy: { createdAt: "desc" }
            })
        ]);

        // Construct recent activity feed
        const activity = [
            ...recentNominations.map(n => ({
                action: "New nomination",
                detail: `${n.nomineeName} (${n.nomineeCategory})`,
                time: n.createdAt,
                type: "nomination"
            })),
            ...recentEvents.map(e => ({
                action: "Event created",
                detail: e.title,
                time: e.createdAt,
                type: "event"
            }))
        ]
            .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
            .slice(0, 5)
            .map(item => ({
                ...item,
                time: new Date(item.time).toLocaleDateString()
            }));

        const stats = {
            totalInductees,
            pendingNominations,
            upcomingEvents,
            galleryImages,
            recentNominations: recentNominations.map(n => ({
                id: n.id,
                name: n.nomineeName,
                category: n.nomineeCategory,
                date: new Date(n.createdAt).toLocaleDateString(),
                status: n.status
            })),
            recentActivity: activity
        };

        return NextResponse.json(stats);
    } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        return NextResponse.json({ error: "Failed to fetch dashboard stats" }, { status: 500 });
    }
}

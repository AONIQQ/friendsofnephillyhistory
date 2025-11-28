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
            totalDonationsResult,
            subscribers,
            galleryImages,
            recentNominations,
            recentEvents,
            recentDonations
        ] = await Promise.all([
            db.inductee.count(),
            db.nomination.count({ where: { status: "pending" } }),
            db.event.count({
                where: {
                    // Simple check for future events could be improved with actual date comparison
                    // For now, we'll just count all events as "upcoming" logic might be complex with string dates
                    // or just count all for the stat
                }
            }),
            db.donation.aggregate({
                _sum: {
                    amount: true
                }
            }),
            db.subscriber.count({ where: { isActive: true } }),
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
            }),
            db.donation.findMany({
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
            })),
            ...recentDonations.map(d => ({
                action: "Donation received",
                detail: `$${d.amount} from ${d.isAnonymous ? "Anonymous" : d.donorName || "Donor"}`,
                time: d.createdAt,
                type: "donation"
            }))
        ]
            .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
            .slice(0, 5) // Keep top 5 most recent activities
            .map(item => ({
                ...item,
                time: new Date(item.time).toLocaleDateString() // Simple formatting
            }));

        const stats = {
            totalInductees,
            pendingNominations,
            upcomingEvents, // Using total count for now as date parsing might be tricky with string dates
            totalDonations: totalDonationsResult._sum.amount || 0,
            subscribers,
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

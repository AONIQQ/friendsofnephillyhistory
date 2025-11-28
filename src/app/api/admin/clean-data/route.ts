import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
    try {
        const { password } = await request.json();

        const adminPassword = process.env.LOGIN;
        if (!adminPassword) {
            return NextResponse.json({ error: "Admin password not configured" }, { status: 500 });
        }

        if (password !== adminPassword) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        console.log('🧹 Cleaning fake data from database...');

        // Delete all donations
        const deletedDonations = await db.donation.deleteMany({});
        console.log(`✅ Deleted ${deletedDonations.count} donation records`);

        // Delete all subscribers
        const deletedSubscribers = await db.subscriber.deleteMany({});
        console.log(`✅ Deleted ${deletedSubscribers.count} subscriber records`);

        // Delete all contact submissions
        const deletedContacts = await db.contactSubmission.deleteMany({});
        console.log(`✅ Deleted ${deletedContacts.count} contact submission records`);

        // Delete all nominations
        const deletedNominations = await db.nomination.deleteMany({});
        console.log(`✅ Deleted ${deletedNominations.count} nomination records`);

        // Get remaining counts
        const inducteeCount = await db.inductee.count();
        const eventCount = await db.event.count();

        return NextResponse.json({
            success: true,
            deleted: {
                donations: deletedDonations.count,
                subscribers: deletedSubscribers.count,
                contacts: deletedContacts.count,
                nominations: deletedNominations.count,
            },
            remaining: {
                inductees: inducteeCount,
                events: eventCount,
            },
        });
    } catch (error) {
        console.error("Error cleaning database:", error);
        return NextResponse.json(
            { error: "Failed to clean database" },
            { status: 500 }
        );
    }
}

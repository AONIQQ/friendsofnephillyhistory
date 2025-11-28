import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanFakeData() {
    console.log('🧹 Cleaning fake data from database...\n');

    try {
        // Delete all donations
        const deletedDonations = await prisma.donation.deleteMany({});
        console.log(`✅ Deleted ${deletedDonations.count} donation records`);

        // Delete all subscribers
        const deletedSubscribers = await prisma.subscriber.deleteMany({});
        console.log(`✅ Deleted ${deletedSubscribers.count} subscriber records`);

        // Delete all contact submissions
        const deletedContacts = await prisma.contactSubmission.deleteMany({});
        console.log(`✅ Deleted ${deletedContacts.count} contact submission records`);

        // Delete all nominations (if any test data exists)
        const deletedNominations = await prisma.nomination.deleteMany({});
        console.log(`✅ Deleted ${deletedNominations.count} nomination records`);

        console.log('\n✨ Database cleanup complete!');
        console.log('\n📊 Remaining data:');

        const inducteeCount = await prisma.inductee.count();
        const eventCount = await prisma.event.count();

        console.log(`   - Inductees: ${inducteeCount}`);
        console.log(`   - Events: ${eventCount}`);

    } catch (error) {
        console.error('❌ Error cleaning database:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

cleanFakeData()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';
interface InducteeSeed {
    id: string;
    name: string;
    years: string;
    category: string;
    inductionYear: number;
    shortBio: string;
    fullBio: string;
    achievements: string[];
    imageUrl?: string;
    wikipediaUrl?: string;
}

const inductees: InducteeSeed[] = [];

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding ...');

    for (const inductee of inductees) {
        console.log(`Upserting inductee: ${inductee.name}`);

        // Join achievements array into a single string
        const achievementsString = inductee.achievements.join('\n');

        await prisma.inductee.upsert({
            where: { id: inductee.id },
            update: {
                name: inductee.name,
                years: inductee.years,
                category: inductee.category,
                inductionYear: inductee.inductionYear,
                shortBio: inductee.shortBio,
                fullBio: inductee.fullBio,
                achievements: achievementsString,
                imageUrl: inductee.imageUrl,
                wikipediaUrl: inductee.wikipediaUrl,
                isPublished: true,
            },
            create: {
                id: inductee.id,
                name: inductee.name,
                years: inductee.years,
                category: inductee.category,
                inductionYear: inductee.inductionYear,
                shortBio: inductee.shortBio,
                fullBio: inductee.fullBio,
                achievements: achievementsString,
                imageUrl: inductee.imageUrl,
                wikipediaUrl: inductee.wikipediaUrl,
                isPublished: true,
            },
        });
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

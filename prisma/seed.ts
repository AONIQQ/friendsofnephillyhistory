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

const defaultHistoricalSketches = [
    {
        title: "Bethany AME Church Brief History",
        description: "A brief history of Bethany AME Church and its role in the Northeast Philadelphia community.",
        pdfUrl: "/historicalsketches/Bethany%20AME%20Church%20Brief%20History.pdf",
    },
    {
        title: "Why I Love History",
        description: "By Patty McCarthy - A personal reflection on the importance and joy of studying local history.",
        pdfUrl: "/historicalsketches/Why%20I%20love%20history.pdf",
    },
    {
        title: "A Trolley Embark Ends at Torresdale Park",
        description: "By Patty McCarthy - The story of trolley transportation and its connection to Torresdale Park.",
        pdfUrl: "/historicalsketches/A%20Trolley%20Embark%20Ends%20at%20Torresdale%20Park.pdf",
    },
    {
        title: "Selected Lenape Deeds",
        description: "Historical documents and analysis of land deeds from the Lenape people in the Northeast Philadelphia area.",
        pdfUrl: "/historicalsketches/SelectedLenapeDeeds.pdf",
    },
];

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

    const sketchCount = await prisma.historicalSketch.count();
    if (sketchCount === 0) {
        console.log('Seeding default historical sketches ...');
        for (const sketch of defaultHistoricalSketches) {
            await prisma.historicalSketch.create({
                data: sketch,
            });
        }
        console.log('Historical sketches seeded.');
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

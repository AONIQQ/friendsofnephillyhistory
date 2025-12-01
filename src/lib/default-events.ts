import type { Event } from "@prisma/client"

import { db } from "@/lib/db"

type CoreEvent = Pick<
  Event,
  "id" | "title" | "date" | "time" | "location" | "description" | "month" | "day" | "eventType"
>

const coreEvents: CoreEvent[] = [
  {
    id: "history-fair-2026",
    title: "2026 Biennial Northeast Philadelphia History Fair",
    date: "April 11, 2026",
    time: "All day",
    location: "Cannstatter Volksfest Verein, 9130 Academy Road, Philadelphia, PA",
    description:
      "Friends of Northeast Philadelphia History present the 2026 biennial Northeast Philadelphia History Fair. Dozens of area history organizations, historic sites, historians, and authors will have displays along with books, prints, maps, and other items for purchase. Formal presentations highlight Northeast Village, the vast post–World War II development near Roosevelt Boulevard and Comly Road, and the 1970 memoir Hark Back With Love by local Quaker Frances Richardson, newly reprinted by FNEPH. Admission and parking are free. Contact nephillyhistory@gmail.com or visit the Northeast Philadelphia History Network on Facebook for updates.",
    month: "APR",
    day: "11",
    eventType: "community",
  },
]

export async function ensureDefaultEvents() {
  for (const event of coreEvents) {
    const { id, ...eventData } = event

    await db.event.upsert({
      where: { id },
      update: eventData,
      create: { id, ...eventData },
    })
  }
}



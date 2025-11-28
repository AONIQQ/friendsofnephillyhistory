import { siteConfig } from "@/config/site"
import { db } from "@/lib/db"

export const metadata = {
  title: `Events | ${siteConfig.name}`,
  description: "Upcoming events and activities for Friends of Northeast Philadelphia History.",
}

export const dynamic = 'force-dynamic'



async function getEvents() {
  try {
    const events = await db.event.findMany({
      orderBy: {
        date: "asc",
      },
    })
    return events
  } catch (error) {
    console.error("Error fetching events:", error)
    return []
  }
}

export default async function CalendarPage() {
  const events = await getEvents()

  return (
    <main className="pt-24 pb-20 bg-[var(--cream)] min-h-screen">
      <div className="hof-container">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="hof-section-label">Community Events</span>
          <h1 className="hof-section-title">Events & Ceremonies</h1>
          <p className="hof-section-description">
            Join us at gatherings that celebrate Northeast Philadelphia&apos;s remarkable history and heroes.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="bg-white rounded-2xl p-8 md:p-12 border border-[var(--border)] shadow-sm">
          <div className="text-center mb-10">
            <span className="hof-section-label">Mark Your Calendar</span>
            <h2 className="text-3xl font-bold font-serif text-[var(--green)]">Upcoming Events</h2>
          </div>

          <div className="space-y-6">
            {events.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-lg">No upcoming events at this time.</p>
                <p className="text-gray-400">Check back soon for new events!</p>
              </div>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl overflow-hidden border border-[var(--green)]/15 hover:border-[var(--gold)] transition-colors shadow-sm"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-28 bg-[var(--green)] text-white p-4 md:p-6 flex flex-row md:flex-col items-center justify-center gap-2 md:gap-0 text-center">
                      <span className="text-sm font-semibold tracking-wide uppercase">{event.month}</span>
                      <span className="text-2xl md:text-3xl font-bold">{event.day}</span>
                    </div>
                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold ${event.eventType === "ceremony"
                            ? "bg-[var(--gold)] text-[var(--green)]"
                            : event.eventType === "meeting"
                              ? "bg-[var(--green)] text-white"
                              : "bg-[var(--green)]/10 text-[var(--green)]"
                            }`}
                        >
                          {event.eventType === "ceremony"
                            ? "Special Ceremony"
                            : event.eventType === "meeting"
                              ? "Meeting"
                              : "Community Event"}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-2">{event.title}</h3>
                      <p className="text-[var(--green)]/70 mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-[var(--green)]/60">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-[var(--border)] text-center shadow-sm">
          <h2 className="text-3xl font-bold text-[var(--green)] font-serif mb-4">Stay Informed</h2>
          <p className="text-[var(--green)]/80 max-w-2xl mx-auto mb-8">
            Sign up for our newsletter to receive updates about upcoming events, publications, and preservation efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-[var(--border)] focus:ring-2 focus:ring-[var(--gold)] focus:outline-none text-[var(--green)]"
            />
            <button className="hof-btn hof-btn-primary">Subscribe</button>
          </div>
        </section>
      </div>
    </main>
  )
}

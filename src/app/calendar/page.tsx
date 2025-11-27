import Link from "next/link"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: `Events | ${siteConfig.name}`,
  description: "Upcoming events and ceremonies for the Northeast Philadelphia Hall of Fame.",
}

const upcomingEvents = [
  {
    id: "1",
    title: "2024 Hall of Fame Induction Ceremony",
    date: "October 2024",
    time: "6:00 PM",
    location: "Holy Family University",
    description: "Join us for our annual induction ceremony honoring Northeast Philadelphia's finest.",
    type: "ceremony",
    month: "OCT",
    day: "TBD",
  },
  {
    id: "2",
    title: "Nomination Committee Meeting",
    date: "August 2024",
    time: "7:00 PM",
    location: "Historical Society of Frankford",
    description: "Review and discussion of submitted nominations for the upcoming class.",
    type: "meeting",
    month: "AUG",
    day: "15",
  },
  {
    id: "3",
    title: "Northeast Philadelphia History Walking Tour",
    date: "September 2024",
    time: "10:00 AM",
    location: "Meet at Pennypack Park",
    description: "Explore historic sites in Northeast Philadelphia including the burial site of Thomas Holme.",
    type: "community",
    month: "SEP",
    day: "21",
  },
]

const pastCeremonies = [
  { year: 2012, location: "Holy Family University", inductees: 5 },
  { year: 2009, location: "Holy Family University", inductees: 7 },
]

export default function CalendarPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--navy)] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="hof-container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Events & Ceremonies</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Join us at our events celebrating Northeast Philadelphia&apos;s remarkable history and heroes.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="hof-section bg-white">
        <div className="hof-container flex flex-col items-center">
          <div className="hof-section-header">
            <span className="hof-section-label">Mark Your Calendar</span>
            <h2 className="hof-section-title">Upcoming Events</h2>
          </div>

          <div className="max-w-4xl w-full space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden border border-[var(--navy)]/10 hover:border-[var(--gold)] transition-colors"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-28 bg-[var(--navy)] text-white p-4 md:p-6 flex flex-row md:flex-col items-center justify-center gap-2 md:gap-0 text-center">
                    <span className="text-sm font-semibold tracking-wide">{event.month}</span>
                    <span className="text-2xl md:text-3xl font-bold">{event.day}</span>
                  </div>
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                          event.type === "ceremony"
                            ? "bg-[var(--gold)] text-[var(--navy)]"
                            : event.type === "meeting"
                              ? "bg-[var(--navy)] text-white"
                              : "bg-[var(--navy)]/10 text-[var(--navy)]"
                        }`}
                      >
                        {event.type === "ceremony"
                          ? "Induction Ceremony"
                          : event.type === "meeting"
                            ? "Meeting"
                            : "Community Event"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-serif text-[var(--navy)] mb-2">{event.title}</h3>
                    <p className="text-[var(--navy)]/70 mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--navy)]/60">
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
            ))}
          </div>
        </div>
      </section>

      {/* Past Ceremonies */}
      <section className="hof-section bg-[var(--white-soft)]">
        <div className="hof-container flex flex-col items-center">
          <div className="hof-section-header">
            <span className="hof-section-label">Looking Back</span>
            <h2 className="hof-section-title">Past Induction Ceremonies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
            {pastCeremonies.map((ceremony) => (
              <div key={ceremony.year} className="bg-white p-6 rounded-xl border border-[var(--navy)]/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--navy)] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-white">{ceremony.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-[var(--navy)]">Class of {ceremony.year}</h3>
                    <p className="text-[var(--navy)]/60 text-sm">
                      {ceremony.inductees} Inductees • {ceremony.location}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/inductees#year-${ceremony.year}`}
                  className="text-[var(--navy)] font-semibold hover:text-[var(--gold)] transition-colors text-sm"
                >
                  View Inductees →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[var(--navy)] py-16">
        <div className="hof-container flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white font-serif mb-4">Stay Informed</h2>
          <p className="text-white/80 max-w-2xl mb-8">
            Sign up for our newsletter to receive updates about upcoming events, new inductees, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[var(--gold)] text-[var(--navy)]"
            />
            <button className="hof-btn hof-btn-gold">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}

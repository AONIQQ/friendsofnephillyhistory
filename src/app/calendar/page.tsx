import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: `Events | ${siteConfig.name}`,
    description: "Upcoming events and ceremonies for the Northeast Philadelphia Hall of Fame.",
};

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
];

const pastCeremonies = [
    { year: 2012, location: "Holy Family University", inductees: 5 },
    { year: 2009, location: "Holy Family University", inductees: 7 },
];

export default function CalendarPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            
            <main className="flex-grow">
                <div className="page-stack">
                    {/* Hero Section */}
                    <section className="hof-gradient py-24 sm:py-32 flex flex-col items-center justify-center text-center">
                        <div className="hof-container text-center hof-text-stack">
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                Events & Ceremonies
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Join us at our events celebrating Northeast Philadelphia&apos;s remarkable history and heroes.
                            </p>
                        </div>
                    </section>

                    {/* Upcoming Events */}
                    <section className="hof-section bg-white">
                        <div className="hof-container flex justify-center">
                            <div className="w-full max-w-4xl hof-text-stack">
                                <h2 className="text-3xl font-bold hof-heading text-center">
                                    Upcoming Events
                                </h2>

                                <div className="space-y-6 mx-auto">
                                    {upcomingEvents.map((event) => (
                                        <div key={event.id} className="hof-card overflow-hidden">
                                            <div className="flex flex-col md:flex-row">
                                                <div className="md:w-32 bg-[var(--primary-700)] text-white p-6 flex flex-col items-center justify-center hof-text-stack text-center">
                                                    <span className="text-sm font-semibold tracking-wide">{event.month}</span>
                                                    <span className="text-3xl font-bold">{event.day}</span>
                                                </div>
                                                <div className="flex-1 p-6 hof-text-stack">
                                                    <div className="flex flex-wrap items-center gap-3">
                                                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                                                            event.type === 'ceremony' 
                                                                ? 'bg-[var(--accent-500)] text-[var(--primary-900)]' 
                                                                : event.type === 'meeting'
                                                                ? 'bg-[var(--primary-600)] text-white'
                                                                : 'bg-gray-200 text-gray-700'
                                                        }`}>
                                                            {event.type === 'ceremony' ? 'Induction Ceremony' : event.type === 'meeting' ? 'Meeting' : 'Community Event'}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-bold hof-heading">{event.title}</h3>
                                                    <p className="text-gray-600">{event.description}</p>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            {event.time}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
                        </div>
                    </section>

                    {/* Past Ceremonies */}
                    <section className="hof-section bg-[var(--secondary-100)]">
                        <div className="hof-container flex justify-center">
                            <div className="w-full max-w-5xl hof-text-stack">
                                <h2 className="text-3xl font-bold hof-heading text-center">
                                    Past Induction Ceremonies
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mx-auto">
                                    {pastCeremonies.map((ceremony) => (
                                        <div key={ceremony.year} className="hof-card p-6 hof-text-stack">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 rounded-full hof-gradient flex items-center justify-center">
                                                    <span className="text-xl font-bold text-white">{ceremony.year}</span>
                                                </div>
                                                <div className="hof-text-stack">
                                                    <h3 className="text-xl font-bold hof-heading">
                                                        Class of {ceremony.year}
                                                    </h3>
                                                    <p className="text-gray-600">{ceremony.inductees} Inductees • {ceremony.location}</p>
                                                </div>
                                            </div>
                                            <Link 
                                                href={`/inductees#year-${ceremony.year}`}
                                                className="inline-block text-[var(--primary-700)] font-semibold hover:text-[var(--primary-500)] transition-colors"
                                            >
                                                View Inductees →
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Newsletter CTA */}
                    <section className="hof-gradient py-20">
                        <div className="hof-container text-center mx-auto hof-text-stack">
                            <h2 className="text-3xl font-bold text-white">
                                Stay Informed
                            </h2>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Sign up for our newsletter to receive updates about upcoming events, new inductees, and more.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[var(--accent-500)]"
                                />
                                <button className="hof-btn-gold">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

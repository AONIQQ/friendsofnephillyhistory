import { siteConfig } from "@/config/site"
import Link from "next/link"

export const metadata = {
    title: "About | Friends of Northeast Philadelphia History",
    description: "Learn about FNEPH, a 501(c)3 non-profit organization dedicated to preserving Northeast Philadelphia history.",
}

export default function AboutPage() {
    return (
        <main className="pt-24 pb-20 bg-[var(--cream)] min-h-screen">
            <div className="hof-container">
                {/* Hero Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="hof-section-label">Our Story</span>
                    <h1 className="hof-section-title">About FNEPH</h1>
                    <p className="hof-section-description">
                        Established in 2009, Friends of Northeast Philadelphia is a 501(c)3 non-profit organization whose mission is to encourage the preservation and promotion of Northeast Philadelphia history.
                    </p>
                </div>

                {/* Mission Section */}
                <section className="bg-white rounded-2xl p-8 md:p-12 mb-12 border border-[var(--border)]">
                    <h2 className="text-3xl font-bold font-serif text-[var(--green)] mb-6">Our Mission</h2>
                    <p className="text-lg text-[var(--green)]/80 leading-relaxed mb-8">
                        {siteConfig.mission.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {siteConfig.mission.points.map((point, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--gold)]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[var(--green)]/70 leading-relaxed">{point}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold font-serif text-[var(--green)] mb-8 text-center">What We Do</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-[var(--green)]/10 hover:border-[var(--gold)] transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-4">Publications</h3>
                            <p className="text-[var(--green)]/70 leading-relaxed">
                                We publish and distribute books on Northeast Philadelphia history, making historical research accessible to the community.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-[var(--green)]/10 hover:border-[var(--gold)] transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-4">Historical Materials</h3>
                            <p className="text-[var(--green)]/70 leading-relaxed">
                                We acquire and preserve historical materials and property relating to Northeast Philadelphia for future generations.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-[var(--green)]/10 hover:border-[var(--gold)] transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-4">Community Events</h3>
                            <p className="text-[var(--green)]/70 leading-relaxed">
                                We sponsor local history activities and events that bring the community together to celebrate our shared heritage.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Area History Groups Section */}
                <section className="bg-[var(--green)] text-white rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold font-serif mb-6 text-center">Area History Groups</h2>
                    <p className="text-white/80 text-center mb-8">Click to explore more.</p>

                    <div className="space-y-6 max-w-3xl mx-auto">
                        <Link
                            href="https://oldyorkroadhistory.org/"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                            <p className="font-serif text-xl">Old York Road Historical Society – Giving Our Past a Future</p>
                        </Link>
                        <Link
                            href="https://nephillyhalloffame.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                            <p className="font-serif text-xl">Learn more about impactful people from NE philadelphia</p>
                        </Link>
                        <Link
                            href="https://www.thehistoricalsocietyoffrankford.org/"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                            <p className="font-serif text-xl">The Historical Society of Frankford</p>
                        </Link>
                        <Link
                            href="https://garmuslib.org/"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                            <p className="font-serif text-xl mb-2">Grand Army of the Republic Museum & Library</p>
                        </Link>
                        <Link
                            href="https://www.glenfoerd.org/history"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                            <p className="font-serif text-xl mb-2">History — Glen Foerd</p>
                        </Link>
                        <Link
                            href="https://www.facebook.com/taconycdc/"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                            <p className="font-serif text-xl">Tacony Community Development Corporation</p>
                        </Link>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-white rounded-2xl p-12 border border-[var(--border)]">
                    <h2 className="text-3xl font-bold font-serif text-[var(--green)] mb-6">Get Involved</h2>
                    <p className="text-lg text-[var(--green)]/70 mb-8 max-w-2xl mx-auto">
                        Support our mission to preserve and promote Northeast Philadelphia history. Your contributions help us continue our important work.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="hof-btn hof-btn-primary">
                            Contact Us
                        </Link>
                        <Link href="/books" className="hof-btn hof-btn-outline">
                            Browse Books
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}

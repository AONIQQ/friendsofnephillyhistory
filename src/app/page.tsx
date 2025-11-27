import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { siteConfig } from "@/config/site";
import { inductees } from "@/data/inductees";
import { DidYouKnow } from "@/components/DidYouKnow";
import { Neighborhoods } from "@/components/Neighborhoods";

export default function Home() {
    // Get featured inductees (first 6)
    const featuredInductees = inductees.slice(0, 6);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <Hero />

                <div className="page-stack">
                    {/* Stats Section */}
                    <section className="relative z-10 -mt-16 pb-16">
                        <div className="hof-container">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                                    <Link href="/inductees" className="group flex items-center gap-3 text-2xl md:text-3xl font-bold font-playfair text-[var(--primary-900)] hover:text-[var(--primary-700)] transition-colors whitespace-nowrap flex-shrink-0">
                                        Meet Inductees
                                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                                    </Link>
                                    <div className="w-full h-px lg:w-px lg:h-24 bg-gray-200"></div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                                        <div className="text-center px-2 hof-text-stack">
                                            <div className="text-4xl md:text-5xl font-bold text-[var(--accent-500)]">{siteConfig.stats.inductees}+</div>
                                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Inductees</div>
                                        </div>
                                        <div className="text-center px-2 hof-text-stack">
                                            <div className="text-4xl md:text-5xl font-bold text-[var(--accent-500)]">{siteConfig.stats.years}</div>
                                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Years of Honor</div>
                                        </div>
                                        <div className="text-center px-2 hof-text-stack">
                                            <div className="text-4xl md:text-5xl font-bold text-[var(--accent-500)]">{siteConfig.stats.ceremonies}</div>
                                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Ceremonies</div>
                                        </div>
                                        <div className="text-center px-2 hof-text-stack">
                                            <div className="text-4xl md:text-5xl font-bold text-[var(--accent-500)]">300+</div>
                                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Years of History</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="hof-section bg-white">
                        <div className="hof-container flex flex-col items-center gap-12">
                            <div className="max-w-3xl text-center mx-auto w-full hof-text-stack">
                                <div className="hof-text-stack">
                                    <span className="text-[var(--accent-600)] font-bold tracking-wider uppercase text-sm">Our Purpose</span>
                                    <h2 className="text-3xl md:text-4xl font-bold hof-heading text-[var(--primary-900)]">
                                        {siteConfig.mission.title}
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {siteConfig.mission.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {siteConfig.values.items.map((value, index) => (
                                    <div key={index} className="hof-card p-8 text-center group hover:border-[var(--primary-200)] h-full flex flex-col items-center hof-text-stack">
                                        <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--primary-100)] text-[var(--primary-700)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                            {index === 0 && (
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )}
                                            {index === 1 && (
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            )}
                                            {index === 2 && (
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold hof-heading text-[var(--primary-900)]">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed flex-grow">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Featured Inductees */}
                    <section className="hof-section bg-[var(--secondary-100)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" aria-hidden="true"></div>
                        <div className="hof-container relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
                                <div className="max-w-2xl hof-text-stack">
                                    <span className="text-[var(--accent-600)] font-bold tracking-wider uppercase text-sm">Honoring Excellence</span>
                                    <h2 className="text-3xl md:text-4xl font-bold hof-heading text-[var(--primary-900)]">
                                        Featured Inductees
                                    </h2>
                                    <p className="text-lg text-gray-600">
                                        Meet some of the remarkable individuals and organizations honored for their contributions.
                                    </p>
                                </div>
                                <Link href="/inductees" className="hof-btn-outline text-[var(--primary-700)] border-[var(--primary-700)] hover:bg-[var(--primary-700)] hover:text-white whitespace-nowrap">
                                    View All Inductees
                                </Link>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredInductees.map((inductee) => (
                                    <div key={inductee.id} className="inductee-card group bg-white h-full flex flex-col">
                                        <div className="inductee-card-image overflow-hidden">
                                            <div className="absolute inset-0 bg-[var(--primary-900)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                                            <span className="inductee-card-badge z-20 shadow-lg">{inductee.inductionYear}</span>
                                            <div className="text-6xl text-white/20 font-bold group-hover:scale-110 transition-transform duration-500">
                                                {inductee.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        </div>
                                        <div className="p-8 flex-grow flex flex-col hof-text-stack">
                                            <div className="text-xs font-bold text-[var(--accent-600)] uppercase tracking-wider">
                                                {inductee.category}
                                            </div>
                                            <h3 className="text-2xl font-bold hof-heading text-[var(--primary-900)] group-hover:text-[var(--primary-600)] transition-colors">
                                                {inductee.name}
                                            </h3>
                                            <p className="text-sm font-medium text-gray-500 border-b border-gray-100 pb-4">{inductee.years}</p>
                                            <p className="text-gray-600 line-clamp-3 flex-grow leading-relaxed">
                                                {inductee.shortBio}
                                            </p>
                                            <Link
                                                href={`/inductees#${inductee.id}`}
                                                className="inline-flex items-center text-[var(--primary-700)] font-bold hover:text-[var(--accent-600)] transition-colors mt-auto"
                                            >
                                                Read Full Bio
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Our Neighborhoods */}
                    <Neighborhoods />

                    {/* Historical Facts */}
                    <DidYouKnow />

                    {/* About Section */}
                    <section className="hof-section bg-gray-50">
                        <div className="hof-container flex flex-col items-center">
                            <div className="max-w-4xl text-center w-full mx-auto hof-text-stack">
                                <span className="text-[var(--accent-600)] font-bold tracking-wider uppercase text-sm">About Us</span>
                                <h2 className="text-3xl md:text-4xl font-bold hof-heading text-[var(--primary-900)]">
                                    {siteConfig.about.title}
                                </h2>
                                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 hof-text-stack">
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        {siteConfig.about.description}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        {siteConfig.about.history}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/history" className="hof-btn-primary">
                                            Read Our History
                                        </Link>
                                        <Link href="/nominate" className="hof-btn-gold">
                                            Nominate a Hero
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="hof-section bg-white pb-12">
                        <div className="hof-container">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="hof-card p-10 text-center border-t-4 border-t-[var(--accent-500)] flex flex-col items-center hof-text-stack">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-[var(--accent-100)] flex items-center justify-center">
                                        <svg className="w-8 h-8 text-[var(--accent-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div className="hof-text-stack text-center w-full">
                                        <h3 className="text-2xl font-bold hof-heading text-[var(--primary-900)]">Know Someone Deserving?</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Help us honor Northeast Philadelphia&apos;s finest by nominating individuals or organizations who have made significant contributions to our community.
                                        </p>
                                    </div>
                                    <Link href="/nominate" className="hof-btn-primary w-full sm:w-auto">
                                        Submit a Nomination
                                    </Link>
                                </div>

                                <div className="hof-card p-10 text-center border-t-4 border-t-[var(--primary-600)] flex flex-col items-center hof-text-stack">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-[var(--primary-100)] flex items-center justify-center">
                                        <svg className="w-8 h-8 text-[var(--primary-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="hof-text-stack text-center w-full">
                                        <h3 className="text-2xl font-bold hof-heading text-[var(--primary-900)]">Support Our Mission</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Your generous contribution helps us continue honoring Northeast Philadelphia&apos;s heroes and preserving our community&apos;s rich history.
                                        </p>
                                    </div>
                                    <Link href="/donate" className="hof-btn-gold w-full sm:w-auto">
                                        Make a Donation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

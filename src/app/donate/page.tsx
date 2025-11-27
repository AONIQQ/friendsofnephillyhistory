import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: `Support Us | ${siteConfig.name}`,
    description: "Support the Northeast Philadelphia Hall of Fame and help us preserve our community's rich history.",
};

const donationTiers = [
    {
        name: "Friend",
        amount: 25,
        description: "Support our annual ceremony",
        benefits: ["Recognition on website", "Email newsletter"],
    },
    {
        name: "Supporter",
        amount: 50,
        description: "Help preserve local history",
        benefits: ["Recognition on website", "Email newsletter", "Event invitations"],
    },
    {
        name: "Patron",
        amount: 100,
        description: "Sponsor an inductee plaque",
        benefits: ["Recognition on website", "Email newsletter", "Event invitations", "Commemorative program"],
        featured: true,
    },
    {
        name: "Champion",
        amount: 250,
        description: "Major supporter of our mission",
        benefits: ["Recognition on website", "Email newsletter", "Event invitations", "Commemorative program", "VIP ceremony seating"],
    },
];

export default function DonatePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-grow">
                <div className="page-stack">
                    {/* Hero Section */}
                    <section className="hof-gradient py-24 sm:py-32 flex flex-col items-center justify-center text-center">
                        <div className="hof-container text-center hof-text-stack">
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                Support Our Mission
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Your generous contribution helps us honor Northeast Philadelphia&apos;s heroes and preserve our community&apos;s rich history for future generations.
                            </p>
                        </div>
                    </section>

                    {/* Donation Tiers */}
                    <section className="hof-section bg-white">
                        <div className="hof-container flex justify-center">
                            <div className="w-full max-w-6xl hof-text-stack">
                                <div className="text-center hof-text-stack">
                            <h2 className="text-3xl font-bold hof-heading">
                                Make a Donation
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Choose a giving level that works for you. All donations are tax-deductible and directly support our programs.
                            </p>
                        </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {donationTiers.map((tier) => (
                            <div 
                                key={tier.name}
                                className={`hof-card p-8 flex flex-col h-full ${tier.featured ? 'ring-2 ring-[var(--accent-500)] relative' : ''}`}
                            >
                                {tier.featured && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent-500)] text-[var(--primary-900)] px-3 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}
                                <div className="hof-text-stack text-center">
                                <h3 className="text-xl font-bold hof-heading">{tier.name}</h3>
                                <div className="text-3xl font-bold text-[var(--primary-700)]">
                                    ${tier.amount}
                                </div>
                                <p className="text-gray-600 text-sm">{tier.description}</p>
                                </div>
                                <ul className="space-y-2 flex-grow">
                                    {tier.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-[var(--accent-500)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <button className={tier.featured ? "hof-btn-gold w-full mt-auto" : "hof-btn-primary w-full mt-auto"}>
                                    Donate ${tier.amount}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center hof-text-stack">
                        <p className="text-gray-600">Want to make a custom donation?</p>
                        <button className="hof-btn-outline border-[var(--primary-700)] text-[var(--primary-700)] hover:bg-[var(--primary-700)] hover:text-white">
                            Enter Custom Amount
                        </button>
                    </div>
                </div>
                </div>
            </section>

                    {/* Impact Section */}
                    <section className="hof-section bg-[var(--secondary-100)]">
                <div className="hof-container flex justify-center">
                    <div className="max-w-4xl mx-auto text-center w-full hof-text-stack">
                        <h2 className="text-3xl font-bold hof-heading">
                            Your Impact
                        </h2>
                        <p className="text-lg text-gray-700">
                            Your donation directly supports our mission to preserve and celebrate Northeast Philadelphia&apos;s remarkable legacy.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 text-center hof-text-stack">
                                <div className="w-16 h-16 mx-auto rounded-full hof-gradient flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold hof-heading">Preserve History</h3>
                                <p className="text-gray-600 text-sm">
                                    Fund research and documentation of Northeast Philadelphia&apos;s rich heritage
                                </p>
                            </div>
                            <div className="p-6 text-center hof-text-stack">
                                <div className="w-16 h-16 mx-auto rounded-full hof-gradient flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold hof-heading">Honor Heroes</h3>
                                <p className="text-gray-600 text-sm">
                                    Support our annual induction ceremony and recognition programs
                                </p>
                            </div>
                            <div className="p-6 text-center hof-text-stack">
                                <div className="w-16 h-16 mx-auto rounded-full hof-gradient flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold hof-heading">Educate Future Generations</h3>
                                <p className="text-gray-600 text-sm">
                                    Enable educational programs that teach local history to young people
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                    {/* Partners */}
                    <section className="hof-section bg-white">
                <div className="hof-container flex justify-center">
                    <div className="max-w-4xl mx-auto text-center w-full hof-text-stack">
                        <h2 className="text-3xl font-bold hof-heading">
                            Our Partners
                        </h2>
                        <p className="text-gray-600">
                            The Northeast Philadelphia Hall of Fame is made possible through the support of these dedicated organizations.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-xl bg-[var(--secondary-100)] hof-text-stack">
                                <h3 className="font-semibold hof-heading">{siteConfig.partners.holyFamily.name}</h3>
                                <p className="text-sm text-gray-600">{siteConfig.partners.holyFamily.role}</p>
                            </div>
                            <div className="p-8 rounded-xl bg-[var(--secondary-100)] hof-text-stack">
                                <h3 className="font-semibold hof-heading">{siteConfig.partners.historicalSociety.name}</h3>
                                <p className="text-sm text-gray-600">{siteConfig.partners.historicalSociety.role}</p>
                            </div>
                            <div className="p-8 rounded-xl bg-[var(--secondary-100)] hof-text-stack">
                                <h3 className="font-semibold hof-heading">{siteConfig.partners.centerForHistory.name}</h3>
                                <p className="text-sm text-gray-600">{siteConfig.partners.centerForHistory.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                    {/* CTA */}
                    <section className="hof-gradient py-20 flex justify-center">
                <div className="hof-container text-center mx-auto hof-text-stack">
                    <h2 className="text-3xl font-bold text-white">
                        Questions About Donating?
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Contact us to learn more about sponsorship opportunities, planned giving, or other ways to support our mission.
                    </p>
                    <Link href="/contact" className="hof-btn-gold self-center">
                        Contact Us
                    </Link>
                </div>
            </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

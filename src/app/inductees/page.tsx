import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { inductees, getInducteesByYear } from "@/data/inductees";

export const metadata = {
    title: `Inductees | ${siteConfig.name}`,
    description: "Meet the distinguished individuals and organizations inducted into the Northeast Philadelphia Hall of Fame.",
};

export default function InducteesPage() {
    const inductionYears = [2012, 2009]; // Descending order
    
    return (
        <>
            <Header />
            
            {/* Hero Section */}
            <section className="hof-gradient pt-48 pb-20">
                <div className="hof-container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Hall of Fame Inductees
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Meet the remarkable individuals and organizations who have shaped Northeast Philadelphia&apos;s history and community.
                    </p>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="bg-[var(--secondary-100)] py-8 border-b">
                <div className="hof-container">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[var(--primary-800)]">{inductees.length}</div>
                            <div className="text-gray-600">Total Inductees</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[var(--primary-800)]">{inductionYears.length}</div>
                            <div className="text-gray-600">Induction Classes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[var(--primary-800)]">4</div>
                            <div className="text-gray-600">Categories</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inductees by Year */}
            {inductionYears.map((year) => {
                const yearInductees = getInducteesByYear(year);
                return (
                    <section key={year} className="hof-section bg-white" id={`year-${year}`}>
                        <div className="hof-container">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-20 h-20 rounded-full hof-gradient flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{year}</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold hof-heading">
                                        Class of {year}
                                    </h2>
                                    <p className="text-gray-600">
                                        {year === 2009 ? "Inaugural Class" : `${yearInductees.length} Honorees`}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="space-y-12">
                                {yearInductees.map((inductee) => (
                                    <article 
                                        key={inductee.id} 
                                        id={inductee.id}
                                        className="hof-card overflow-hidden scroll-mt-24"
                                    >
                                        <div className="grid lg:grid-cols-3 gap-0">
                                            {/* Image/Avatar Section */}
                                            <div className="inductee-card-image lg:h-auto min-h-[250px]">
                                                <div className="text-8xl text-white/20 font-bold">
                                                    {inductee.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <span className="inductee-card-badge">{inductee.category}</span>
                                            </div>
                                            
                                            {/* Content Section */}
                                            <div className="lg:col-span-2 p-8">
                                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                                    <h3 className="text-2xl md:text-3xl font-bold hof-heading">
                                                        {inductee.name}
                                                    </h3>
                                                    <span className="text-gray-500">({inductee.years})</span>
                                                </div>
                                                
                                                <p className="text-gray-700 mb-6 leading-relaxed">
                                                    {inductee.fullBio}
                                                </p>
                                                
                                                <div className="mb-6">
                                                    <h4 className="font-semibold text-[var(--primary-800)] mb-3">
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="grid sm:grid-cols-2 gap-2">
                                                        {inductee.achievements.map((achievement, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                                <svg className="w-5 h-5 text-[var(--accent-500)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                
                                                {inductee.wikipediaUrl && (
                                                    <a 
                                                        href={inductee.wikipediaUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-[var(--primary-700)] hover:text-[var(--primary-500)] font-medium transition-colors"
                                                    >
                                                        Learn more on Wikipedia
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Nominate CTA */}
            <section className="hof-gradient py-16">
                <div className="hof-container text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Know Someone Deserving?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Help us honor the next generation of Northeast Philadelphia heroes. Submit your nomination today.
                    </p>
                    <Link href="/nominate" className="hof-btn-gold">
                        Submit a Nomination
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}

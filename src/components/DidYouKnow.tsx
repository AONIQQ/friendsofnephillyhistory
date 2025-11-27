import Link from "next/link";
import { historicalFacts } from "@/data/inductees";

interface DidYouKnowProps {
    showCta?: boolean;
}

export function DidYouKnow({ showCta = true }: DidYouKnowProps) {
    return (
        <section className="hof-section bg-white">
            <div className="hof-container">
                <div className="bg-[var(--primary-900)] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid xl:grid-cols-2 items-stretch">
                        <div className="p-12 lg:p-16 flex flex-col justify-center relative h-full bg-[var(--primary-900)] xl:sticky xl:top-0">
                            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"></div>
                            <div className="relative z-10 hof-text-stack">
                                <span className="text-[var(--accent-400)] font-bold tracking-wider uppercase text-sm block">Did You Know?</span>
                                <h2 className="text-3xl md:text-4xl font-bold hof-heading text-white leading-tight">
                                    A Legacy of Innovation
                                </h2>
                                <p className="text-lg text-blue-100 leading-relaxed">
                                    Northeast Philadelphia has a rich history spanning over 300 years. From pioneers and inventors to saints and astronauts, our community has produced remarkable individuals who have shaped our nation and world.
                                </p>
                                {showCta && (
                                    <Link href="/history" className="hof-btn-gold inline-block text-center hover:scale-105 transition-transform">
                                        Explore Our History
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="bg-[var(--primary-800)] p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
                            <div className="space-y-8">
                                {historicalFacts.map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start border-l-2 border-[var(--primary-700)] pl-6 hover:border-[var(--accent-500)] transition-colors duration-300 group">
                                        <div className="flex-shrink-0 w-full sm:w-24">
                                            <span className="text-2xl font-bold font-serif text-[var(--accent-400)] block group-hover:translate-x-1 transition-transform duration-300">{item.year}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-blue-100 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">{item.fact}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

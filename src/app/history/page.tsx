import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { DidYouKnow } from "@/components/DidYouKnow";
import { Neighborhoods } from "@/components/Neighborhoods";

export const metadata = {
    title: `History | ${siteConfig.name}`,
    description: "Explore the rich history of Northeast Philadelphia spanning over 300 years.",
};

const timeline = [
    { year: "1682", event: "Thomas Holme surveys and designs the original plan for Philadelphia" },
    { year: "1688", event: "First churches established in Northeast Philadelphia" },
    { year: "1695", event: "Thomas Holme passes away, buried near what is now Pennypack Park" },
    { year: "1840s", event: "Henry Disston founds Disston Saw Works" },
    { year: "1870s", event: "Disston relocates factory to Tacony, builds worker community" },
    { year: "1891", event: "Katharine Drexel founds Sisters of the Blessed Sacrament" },
    { year: "1913", event: "Frank Shuman builds world's first solar thermal power station" },
    { year: "1918", event: "First airmail flight stops in Bustleton" },
    { year: "1950s", event: "Greenbelt Knoll becomes Philadelphia's first interracial community" },
    { year: "1964", event: "Rev. Leon Sullivan founds Opportunities Industrialization Centers" },
    { year: "1974", event: "Aid for Friends founded in Northeast Philadelphia" },
    { year: "2000", event: "Katharine Drexel canonized as a saint" },
    { year: "2009", event: "Northeast Philadelphia Hall of Fame established" },
    { year: "2011", event: "Chris Ferguson commands final Space Shuttle mission" },
];

export default function HistoryPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-grow">
                <div className="page-stack">
                    {/* Hero Section */}
                    <section className="bg-white py-24 sm:py-32 flex flex-col items-center justify-center">
                        <div className="hof-container text-center hof-text-stack">
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-900)]">
                                Our Rich History
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Discover 300+ years of remarkable stories, achievements, and community spirit in Northeast Philadelphia.
                            </p>
                        </div>
                    </section>

                    {/* Introduction */}
                    <section className="hof-section bg-white">
                        <div className="hof-container flex justify-center">
                            <div className="w-full max-w-4xl mx-auto text-center hof-text-stack">
                                <h2 className="text-3xl font-bold hof-heading text-center">
                                    A Community of Pioneers
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Northeast Philadelphia has been home to pioneers, inventors, saints, and heroes for over three centuries. From Thomas Holme, who designed the very grid system that defines Philadelphia, to Chris Ferguson, who commanded the final Space Shuttle mission, our community has produced individuals whose impact extends far beyond our neighborhoods.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The Northeast Philadelphia Hall of Fame was established in 2009 to preserve and celebrate this remarkable legacy. What began as a conversation between State Representative Dennis O&apos;Brien and Northeast Times writer Tom Waring has grown into an annual tradition of honoring those who have made significant contributions to our community and beyond.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Timeline */}
                    <section className="hof-section bg-[var(--secondary-100)]">
                        <div className="hof-container hof-text-stack">
                            <h2 className="text-3xl font-bold hof-heading text-center">
                                Historical Timeline
                            </h2>
                            <div className="max-w-3xl mx-auto">
                                <div className="timeline">
                                    {timeline.map((item, index) => (
                                        <div key={index} className="timeline-item hof-text-stack">
                                            <div className="text-lg font-bold text-[var(--accent-600)]">
                                                {item.year}
                                            </div>
                                            <p className="text-gray-700">{item.event}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Neighborhoods */}
                    <Neighborhoods />

                    {/* Did You Know */}
                    <DidYouKnow showCta={false} />

                    {/* About the Hall of Fame */}
                    <section className="hof-section bg-white">
                        <div className="hof-container flex justify-center">
                            <div className="w-full max-w-4xl mx-auto text-center hof-text-stack">
                                <h2 className="text-3xl font-bold hof-heading">
                                    About the Hall of Fame
                                </h2>
                                <p className="text-lg text-gray-700">
                                    {siteConfig.about.description}
                                </p>
                                <p className="text-gray-600">
                                    {siteConfig.about.history}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/inductees" className="hof-btn-primary">
                                        Meet Our Inductees
                                    </Link>
                                    <Link href="/nominate" className="hof-btn-gold">
                                        Nominate Someone
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

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Local History Links",
    description: "Links to other historical societies and resources in Northeast Philadelphia and surrounding areas.",
}

const links = [
    {
        title: "Old York Road Historical Society",
        url: "https://oldyorkroadhistory.org/",
        description:
            "Giving Our Past a Future. A dedicated society with archives and a physical location preserving the history of the Old York Road corridor.",
    },
    {
        title: "NE Philly Hall of Fame",
        url: "https://nephillyhalloffame.com/",
        description: "Learn more about impactful people from NE philadelphia",
    },
    {
        title: "The Historical Society of Frankford",
        url: "https://www.thehistoricalsocietyoffrankford.org/",
        description: "Collecting and preserving the history of Frankford and Northeast Philadelphia since 1905.",
    },
    {
        title: "Grand Army of the Republic Museum & Library",
        url: "https://garmuslib.org/",
        description:
            "A museum and library dedicated to the history of the Grand Army of the Republic and the Civil War veterans.",
    },
    {
        title: "Glen Foerd History",
        url: "https://www.glenfoerd.org/history",
        description:
            "Explore the history of the Glen Foerd estate, the only remaining Delaware River waterfront estate in Philadelphia open to the public.",
    },
    {
        title: "Tacony Community Development Corporation",
        url: "https://www.facebook.com/taconycdc/",
        description:
            "Follow Tacony CDC on Facebook for 'Flashback Fridays' and other posts sharing the history of the Tacony neighborhood.",
    },
]

export default function LinksPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-[var(--green)] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="hof-container relative z-10">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">Local History Resources</h1>
                    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-white/90">
                        Explore these other wonderful organizations dedicated to preserving the rich history of our area. From
                        archives to museums and community groups, there is so much to discover.
                    </p>
                </div>
            </section>

            {/* Links Grid */}
            <section className="py-16 md:py-24">
                <div className="hof-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-slate-100 group"
                            >
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-serif font-bold text-[var(--green)] mb-4 group-hover:text-[var(--gold)] transition-colors">
                                        {link.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">{link.description}</p>
                                </div>
                                <div className="px-8 pb-8 pt-0">
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[var(--green)] font-bold hover:text-[var(--gold)] transition-colors"
                                    >
                                        Visit Website
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Note */}
                    <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-serif font-bold text-[var(--green)] mb-4">Discover More</h3>
                        <p className="text-slate-600 mb-6">
       Many of the sites listed above, as well as other local
                            groups, regularly post historical photos, including fascinating "then and now" comparisons. We encourage you
                            to explore their galleries and social media pages.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

import { db } from "@/lib/db";

export const metadata = {
    title: "Historical Sketches | Friends of Northeast Philadelphia History",
    description: "Read fascinating stories and sketches about the people, places, and events that shaped Northeast Philadelphia.",
}

export const dynamic = "force-dynamic";

export default async function HistoricalSketchesPage() {
    const sketches = await db.historicalSketch.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            pdfUrl: true,
        },
        orderBy: { createdAt: "desc" },
    });

    return (
        <main className="pt-24 pb-20 bg-[var(--cream)] min-h-screen">
            <div className="hof-container">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="hof-section-label">Archives</span>
                    <h1 className="hof-section-title">Historical Sketches</h1>
                    <p className="hof-section-description">
                        Explore fascinating stories and sketches about the people, places, and events that shaped our community. These documents provide unique insights into Northeast Philadelphia&apos;s rich history.
                    </p>
                </div>

                {sketches.length === 0 ? (
                    <div className="bg-white rounded-2xl p-8 text-center border border-[var(--border)] max-w-3xl mx-auto">
                        <p className="text-lg font-semibold text-[var(--green)]">Historical sketches are coming soon.</p>
                        <p className="text-[var(--green)]/70 mt-2">Check back shortly for newly added documents.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {sketches.map((sketch) => (
                            <a
                                key={sketch.id}
                                href={sketch.pdfUrl || `/api/historical-sketches/${sketch.id}/file`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white p-8 rounded-xl border border-[var(--green)]/10 hover:border-[var(--gold)] transition-all duration-300 hover:shadow-lg flex flex-col"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-2 group-hover:text-[var(--gold)] transition-colors leading-tight">
                                            {sketch.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-[var(--green)]/70 leading-relaxed mb-4 flex-grow">
                                    {sketch.description}
                                </p>
                                <div className="flex items-center text-[var(--gold)] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                                    Read PDF
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {/* Additional Info Section */}
                <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-[var(--border)] text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold font-serif text-[var(--green)] mb-4">Have a Story to Share?</h2>
                    <p className="text-[var(--green)]/70 mb-6 leading-relaxed">
                        We&apos;re always looking for new historical sketches and stories about Northeast Philadelphia. If you have research, memories, or documents to contribute, we&apos;d love to hear from you.
                    </p>
                    <a href="/contact" className="hof-btn hof-btn-primary">
                        Contact Us
                    </a>
                </div>
            </div>
        </main>
    )
}

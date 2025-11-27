import Link from "next/link"
import { Hero } from "@/components/Hero"
import { siteConfig } from "@/config/site"
import { inductees } from "@/data/inductees"
import { DidYouKnow } from "@/components/DidYouKnow"
import { Neighborhoods } from "@/components/Neighborhoods"

export default function Home() {
  const featuredInductees = inductees.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <Hero />

      <section className="relative z-10 -mt-16 pb-16">
        <div className="hof-container">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border border-[var(--navy)]/5">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              <Link
                href="/inductees"
                className="group flex items-center gap-3 text-xl md:text-2xl lg:text-3xl font-bold font-serif text-[var(--navy)] hover:text-[var(--gold)] transition-colors text-center lg:text-left"
              >
                Meet the Inductees
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
              <div className="hidden lg:block w-px h-16 bg-[var(--navy)]/10" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--gold)]">{siteConfig.stats.inductees}+</div>
                  <div className="text-xs md:text-sm font-semibold text-[var(--navy)]/60 uppercase tracking-wider mt-1">
                    Inductees
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--gold)]">{siteConfig.stats.years}</div>
                  <div className="text-xs md:text-sm font-semibold text-[var(--navy)]/60 uppercase tracking-wider mt-1">
                    Years
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--gold)]">{siteConfig.stats.ceremonies}</div>
                  <div className="text-xs md:text-sm font-semibold text-[var(--navy)]/60 uppercase tracking-wider mt-1">
                    Ceremonies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--gold)]">300+</div>
                  <div className="text-xs md:text-sm font-semibold text-[var(--navy)]/60 uppercase tracking-wider mt-1">
                    Years History
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hof-section bg-white">
        <div className="hof-container">
          <div className="text-center mb-12">
            <span className="hof-section-label">Our Purpose</span>
            <h2 className="hof-section-title">{siteConfig.mission.title}</h2>
            <p className="hof-section-description">{siteConfig.mission.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.values.items.map((value, index) => (
              <div
                key={index}
                className="bg-[var(--white-soft)] p-8 rounded-xl text-center border border-[var(--navy)]/5 hover:border-[var(--gold)] transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-[var(--navy)] text-white flex items-center justify-center mb-5">
                  {index === 0 && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold font-serif text-[var(--navy)] mb-3">{value.title}</h3>
                <p className="text-[var(--navy)]/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hof-section bg-[var(--white-soft)]">
        <div className="hof-container">
          <div className="text-center mb-10">
            <span className="hof-section-label">Honoring Excellence</span>
            <h2 className="hof-section-title">Featured Inductees</h2>
            <p className="hof-section-description">
              Meet some of the remarkable individuals and organizations honored for their contributions.
            </p>
            <div className="mt-6">
              <Link href="/inductees" className="hof-btn hof-btn-outline">
                View All Inductees
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInductees.map((inductee) => (
              <div key={inductee.id} className="inductee-card group">
                <div className="relative h-48 bg-[var(--navy)] flex items-center justify-center">
                  <span className="absolute top-3 right-3 px-3 py-1 bg-[var(--gold)] text-[var(--navy)] rounded-full text-xs font-bold">
                    {inductee.inductionYear}
                  </span>
                  <div className="text-5xl text-white/20 font-bold group-hover:scale-110 transition-transform duration-300">
                    {inductee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
                    {inductee.category}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[var(--navy)] mt-2 mb-1 group-hover:text-[var(--gold)] transition-colors">
                    {inductee.name}
                  </h3>
                  <p className="text-sm text-[var(--navy)]/60 mb-3 pb-3 border-b border-[var(--navy)]/10">
                    {inductee.years}
                  </p>
                  <p className="text-[var(--navy)]/70 text-sm line-clamp-3 mb-4 leading-relaxed">{inductee.shortBio}</p>
                  <Link
                    href={`/inductees#${inductee.id}`}
                    className="inline-flex items-center text-[var(--navy)] font-semibold hover:text-[var(--gold)] transition-colors text-sm"
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

      {/* Neighborhoods */}
      <Neighborhoods />

      {/* Historical Facts */}
      <DidYouKnow />

      <section className="hof-section bg-[var(--white-soft)]">
        <div className="hof-container flex flex-col items-center">
          <div className="w-full max-w-4xl text-center">
            <span className="hof-section-label">About Us</span>
            <h2 className="hof-section-title">{siteConfig.about.title}</h2>
            <div className="bg-white p-8 md:p-12 rounded-xl border border-[var(--navy)]/5 mt-8">
              <p className="text-xl text-[var(--navy)]/80 leading-relaxed mb-4">{siteConfig.about.description}</p>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8">{siteConfig.about.history}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/history" className="hof-btn hof-btn-primary">
                  Read Our History
                </Link>
                <Link href="/nominate" className="hof-btn hof-btn-gold">
                  Nominate a Hero
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hof-section bg-white">
        <div className="hof-container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="hof-cta-card border-t-4 border-[var(--gold)]">
              <div className="hof-cta-icon hof-cta-icon-gold">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0 4 4 0 018 0m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="hof-cta-title">Know Someone Deserving?</h3>
              <p className="hof-cta-text">
                Help us honor Northeast Philadelphia&apos;s finest by nominating individuals or organizations who have
                made significant contributions.
              </p>
              <Link href="/nominate" className="hof-btn hof-btn-primary">
                Submit a Nomination
              </Link>
            </div>

            <div className="hof-cta-card border-t-4 border-[var(--navy)]">
              <div className="hof-cta-icon hof-cta-icon-navy">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="hof-cta-title">Support Our Mission</h3>
              <p className="hof-cta-text">
                Your generous contribution helps us continue honoring Northeast Philadelphia&apos;s heroes and
                preserving our history.
              </p>
              <Link href="/donate" className="hof-btn hof-btn-gold">
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

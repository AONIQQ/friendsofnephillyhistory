import Link from "next/link"
import { siteConfig } from "@/config/site"
import { db } from "@/lib/db"
import { inductees as staticInductees, getInducteesByYear } from "@/data/inductees"

export const metadata = {
  title: `Inductees | ${siteConfig.name}`,
  description:
    "Meet the distinguished individuals and organizations inducted into the Northeast Philadelphia Hall of Fame.",
}

export const dynamic = 'force-dynamic'

interface DBInductee {
  id: string
  name: string
  years: string
  category: string
  inductionYear: number
  shortBio: string
  fullBio: string
  achievements: string
  imageUrl: string | null
  wikipediaUrl: string | null
  isPublished: boolean
}

async function getInductees() {
  try {
    const dbInductees = await db.inductee.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        inductionYear: "desc",
      },
    })
    return dbInductees
  } catch (error) {
    console.error("Error fetching inductees:", error)
    return []
  }
}

export default async function InducteesPage() {
  const dbInductees = await getInductees()
  
  // Use database inductees if available, otherwise fall back to static data
  const hasDbInductees = dbInductees.length > 0
  
  // Get unique induction years from DB or static data
  const inductionYears = hasDbInductees
    ? [...new Set(dbInductees.map((i) => i.inductionYear))].sort((a, b) => b - a)
    : [2012, 2009]
  
  // Helper to get inductees by year from DB
  const getDbInducteesByYear = (year: number) => dbInductees.filter((i) => i.inductionYear === year)
  
  // Parse achievements from string (stored as newline-separated in DB)
  const parseAchievements = (achievements: string): string[] => {
    return achievements.split('\n').filter((a) => a.trim().length > 0)
  }

  // Calculate total inductees
  const totalInductees = hasDbInductees ? dbInductees.length : staticInductees.length

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--navy)] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="hof-container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Hall of Fame Inductees</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Meet the remarkable individuals and organizations who have shaped Northeast Philadelphia&apos;s history and
            community.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-[var(--white-soft)] py-8 border-b border-[var(--navy)]/10">
        <div className="hof-container flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold)]">{totalInductees}</div>
              <div className="text-[var(--navy)]/60 text-sm">Total Inductees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold)]">{inductionYears.length}</div>
              <div className="text-[var(--navy)]/60 text-sm">Induction Classes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold)]">4</div>
              <div className="text-[var(--navy)]/60 text-sm">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Inductees by Year */}
      {inductionYears.map((year) => {
        const yearInductees = hasDbInductees ? getDbInducteesByYear(year) : getInducteesByYear(year)
        
        if (yearInductees.length === 0) return null
        
        return (
          <section key={year} className="hof-section bg-white" id={`year-${year}`}>
            <div className="hof-container flex flex-col items-center">
              <div className="w-full max-w-5xl">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-20 h-20 rounded-full bg-[var(--navy)] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{year}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-serif text-[var(--navy)]">Class of {year}</h2>
                    <p className="text-[var(--navy)]/60">
                      {year === 2009 ? "Inaugural Class" : `${yearInductees.length} Honorees`}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {yearInductees.map((inductee) => {
                    const achievements = hasDbInductees 
                      ? parseAchievements((inductee as DBInductee).achievements)
                      : (inductee as typeof staticInductees[0]).achievements
                    
                    return (
                      <article
                        key={inductee.id}
                        id={inductee.id}
                        className="bg-white rounded-xl overflow-hidden border border-[var(--navy)]/10 scroll-mt-24 hover:border-[var(--gold)] transition-colors"
                      >
                        <div className="grid lg:grid-cols-3">
                          {/* Image/Avatar Section */}
                          <div className="bg-[var(--navy)] h-48 lg:h-auto min-h-[200px] flex items-center justify-center relative overflow-hidden">
                            {(inductee as DBInductee).imageUrl ? (
                              <img 
                                src={(inductee as DBInductee).imageUrl!} 
                                alt={inductee.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="text-6xl lg:text-8xl text-white/20 font-bold">
                                {inductee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                            )}
                            <span className="absolute top-4 right-4 px-3 py-1 bg-[var(--gold)] text-[var(--navy)] rounded-full text-xs font-bold">
                              {inductee.category}
                            </span>
                          </div>

                          {/* Content Section */}
                          <div className="lg:col-span-2 p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[var(--navy)]">
                                {inductee.name}
                              </h3>
                              <span className="text-[var(--navy)]/60">({inductee.years})</span>
                            </div>

                            <p className="text-[var(--navy)]/80 mb-6 leading-relaxed">{inductee.fullBio}</p>

                            <div className="mb-6">
                              <h4 className="font-semibold text-[var(--navy)] mb-3">Key Achievements</h4>
                              <ul className="grid sm:grid-cols-2 gap-2">
                                {achievements.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-[var(--navy)]/70">
                                    <svg
                                      className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                      />
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
                                className="inline-flex items-center gap-2 text-[var(--navy)] hover:text-[var(--gold)] font-medium transition-colors"
                              >
                                Learn more on Wikipedia
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Nominate CTA */}
      <section className="bg-[var(--navy)] py-16">
        <div className="hof-container flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">Know Someone Deserving?</h2>
          <p className="text-white/80 mb-8 max-w-2xl">
            Help us honor the next generation of Northeast Philadelphia heroes. Submit your nomination today.
          </p>
          <Link href="/nominate" className="hof-btn hof-btn-gold">
            Submit a Nomination
          </Link>
        </div>
      </section>
    </>
  )
}

import Link from "next/link"

const historicalFacts = [
  {
    year: "1692",
    fact: "Surveyor Thomas Holme created one of the first comprehensive maps of Pennsylvania from his home in what is now Northeast Philadelphia.",
  },
  {
    year: "1895",
    fact: "Saint Katharine Drexel opened the first order of sisters dedicated to serving Native American and African American communities while living in Torresdale.",
  },
  {
    year: "2001",
    fact: "NASA astronaut Christopher Ferguson, a Central High School graduate from Northeast Philadelphia, piloted Space Shuttle Atlantis on STS-115.",
  },
]

interface DidYouKnowProps {
  showCta?: boolean
}

export function DidYouKnow({ showCta = true }: DidYouKnowProps) {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="hof-container flex flex-col items-center">
        <div className="w-full max-w-6xl bg-[var(--navy)] rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left side - Text content */}
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <span className="text-[var(--gold)] font-bold tracking-wider uppercase text-sm mb-4">Did You Know?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif mb-6">
                A Legacy of Innovation
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Northeast Philadelphia has a rich history spanning over 300 years. From pioneers and inventors to saints
                and astronauts, our community has produced remarkable individuals who have shaped our nation and world.
              </p>
              {showCta && (
                <Link href="/history" className="hof-btn hof-btn-gold w-fit">
                  Explore Our History
                </Link>
              )}
            </div>

            {/* Right side - Timeline facts */}
            <div className="bg-[var(--navy-light)] p-10 md:p-14 lg:p-16">
              <div className="space-y-8">
                {historicalFacts.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-4 items-start border-l-2 border-[var(--navy-medium)] pl-6 py-2 hover:border-[var(--gold)] transition-colors duration-300 group"
                  >
                    <span className="text-xl font-bold font-serif text-[var(--gold)] flex-shrink-0 w-20">
                      {item.year}
                    </span>
                    <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item.fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

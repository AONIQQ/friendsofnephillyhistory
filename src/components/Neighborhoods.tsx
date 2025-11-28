import Link from "next/link"

const neighborhoods = [
  { name: "Bridesburg", slug: "bridesburg", description: "A riverfront community with deep industrial roots." },
  { name: "Bustleton", slug: "bustleton", description: "Once a busy stagecoach stop, now a thriving residential area." },
  { name: "Frankford", slug: "frankford", description: "One of Philadelphia's oldest communities, dating back to the 1600s." },
  { name: "Holmesburg", slug: "holmesburg", description: "Named after Thomas Holme, surveyor of Philadelphia." },
  { name: "Mayfair", slug: "mayfair", description: "A vibrant neighborhood known for its rowhomes and community spirit." },
  { name: "Pennypack", slug: "pennypack", description: "Surrounding the beautiful Pennypack Park and Creek." },
  { name: "Tacony", slug: "tacony", description: "A historic planned industrial community by the Delaware River." },
  { name: "Torresdale", slug: "torresdale", description: "A picturesque area known for its grand estates and river views." },
  { name: "Vereeville", slug: "vereeville", description: "A historic village that has largely disappeared into modern development." },
  { name: "Wissinoming", slug: "wissinoming", description: "A community with a rich history of industry and transportation." },
]

export function Neighborhoods() {
  return (
    <section className="py-20 md:py-24 bg-[var(--cream-soft)]">
      <div className="hof-container flex flex-col items-center">
        <div className="text-center mb-16 max-w-3xl">
          <span className="hof-section-label">Our Community</span>
          <h2 className="hof-section-title">Our Neighborhoods</h2>
          <p className="hof-section-description">
            Northeast Philadelphia is a tapestry of distinct neighborhoods, each with its own unique history and
            character. Explore their stories by clicking the each neighborhood below.
          </p>
        </div>
        <div className="w-full max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <Link href={`/neighborhoods/${neighborhood.slug}`} key={index} className="group">
              <div
                className="bg-white p-8 rounded-xl border border-[var(--green)]/10 hover:border-[var(--gold)] transition-all duration-300 hover:shadow-lg h-full flex flex-col"
              >
                <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-4 group-hover:text-[var(--gold)] transition-colors">{neighborhood.name}</h3>
                <p className="text-[var(--green)]/70 leading-relaxed flex-grow">{neighborhood.description}</p>
                <div className="mt-4 text-[var(--gold)] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Read History →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

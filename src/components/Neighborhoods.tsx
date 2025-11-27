const neighborhoods = [
  {
    name: "Tacony",
    description: "Home to the historic Disston Saw Works and a model industrial community built for workers.",
  },
  {
    name: "Holmesburg",
    description: "Named after Thomas Holme, the surveyor who designed Philadelphia's grid system.",
  },
  { name: "Frankford", description: "One of Philadelphia's oldest communities, with roots dating back to the 1600s." },
  { name: "Torresdale", description: "Site of the Drexel family estate where St. Katharine Drexel spent her summers." },
  { name: "Fox Chase", description: "A historic area known for its beautiful parks and residential character." },
  {
    name: "Bustleton",
    description: "Where the first airmail flight from New York to Washington D.C. made a stop in 1918.",
  },
  { name: "Rhawnhurst", description: "A tight-knit community that produced community champions like Ed Kelly." },
  { name: "Mayfair", description: "A vibrant neighborhood with rich commercial and residential history." },
]

export function Neighborhoods() {
  return (
    <section className="py-20 md:py-24 bg-[var(--white-soft)]">
      <div className="hof-container flex flex-col items-center">
        <div className="text-center mb-16 max-w-3xl">
          <span className="hof-section-label">Our Community</span>
          <h2 className="hof-section-title">Our Neighborhoods</h2>
          <p className="hof-section-description">
            Northeast Philadelphia is a tapestry of distinct neighborhoods, each with its own unique history and
            character.
          </p>
        </div>
        <div className="w-full max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-[var(--navy)]/10 hover:border-[var(--gold)] transition-colors duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold font-serif text-[var(--navy)] mb-4">{neighborhood.name}</h3>
              <p className="text-[var(--navy)]/70 leading-relaxed">{neighborhood.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

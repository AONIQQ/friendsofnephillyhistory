import Link from "next/link"
import { siteConfig } from "@/config/site"
import { DidYouKnow } from "@/components/DidYouKnow"
import { Neighborhoods } from "@/components/Neighborhoods"

export const metadata = {
  title: `History | ${siteConfig.name}`,
  description: "Explore the rich history of Northeast Philadelphia spanning over 300 years.",
}

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
  { year: "2009", event: "Friends of Northeast Philadelphia History established" },
  { year: "2011", event: "Chris Ferguson commands final Space Shuttle mission" },
]

export default function HistoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--navy)] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="hof-container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Our Rich History</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Discover 300+ years of remarkable stories, achievements, and community spirit in Northeast Philadelphia.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="hof-section bg-[var(--white-soft)]">
        <div className="hof-container flex flex-col items-center">
          <div className="max-w-4xl text-center">
            <h2 className="hof-section-title">A Community of Pioneers</h2>
            <p className="text-lg text-[var(--navy)]/80 leading-relaxed mb-4">
              Northeast Philadelphia has been home to pioneers, inventors, saints, and heroes for over three centuries.
              From Thomas Holme, who designed the very grid system that defines Philadelphia, to Chris Ferguson, who
              commanded the final Space Shuttle mission, our community has produced individuals whose impact extends far
              beyond our neighborhoods.
            </p>
            <p className="text-lg text-[var(--navy)]/80 leading-relaxed">
              Friends of Northeast Philadelphia History was established in 2009 to preserve and celebrate this remarkable
              legacy. We are dedicated to honoring those who have made significant contributions to our community and beyond,
              and ensuring their stories are preserved for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="hof-section bg-white">
        <div className="hof-container flex flex-col items-center">
          <div className="hof-section-header">
            <span className="hof-section-label">Through the Years</span>
            <h2 className="hof-section-title">Historical Timeline</h2>
          </div>
          <div className="max-w-3xl w-full">
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="text-lg font-bold text-[var(--gold)] mb-1">{item.year}</div>
                  <p className="text-[var(--navy)]/80">{item.event}</p>
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
    </>
  )
}

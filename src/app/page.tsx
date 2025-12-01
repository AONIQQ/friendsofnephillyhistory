import { Hero } from "@/components/Hero"
import { Neighborhoods } from "@/components/Neighborhoods"
import { siteConfig } from "@/config/site"
import Image from "next/image"
import Link from "next/link"

// Revalidate every 24 hours
export const revalidate = 86400

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
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <section className="bg-[var(--cream)] py-12">
        <div className="hof-container">
          <p className="text-center text-2xl font-bold text-[var(--green)] mb-4">
            Click the map below to explore Northeast Philadelphia
          </p>
          <Link
            href="/BrochureCenterMapLinks.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/mapimage1.jpeg"
              alt="Map of Northeast Philadelphia brochure"
              width={1600}
              height={1100}
              className="w-full h-auto rounded-2xl border border-[var(--border)] shadow-lg"
            />
          </Link>
        </div>
      </section>
      <Neighborhoods />

      {/* Books Section Teaser */}
      <section className="py-20 bg-[var(--white)]">
        <div className="hof-container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col items-center text-center">
              <span className="hof-section-label">Publications</span>
              <h2 className="hof-section-title">Books on Northeast History</h2>
              <p className="hof-section-description mx-auto mb-8">
                Explore our collection of books covering the rich history of Northeast Philadelphia, from the Bristol Pike to the history of Lower Dublin Academy.
              </p>
              <Link href="/books" className="hof-btn hof-btn-primary">
                View Book Store
              </Link>
            </div>
           
          </div>
        </div>
      </section>

      {/* Historical Sketches Teaser */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="hof-container text-center">
          <span className="hof-section-label">Archives</span>
          <h2 className="hof-section-title">Historical Sketches</h2>
          <p className="hof-section-description mb-10">
            Read fascinating stories and sketches about the people, places, and events that shaped our community, including the history of Bethany AME Church and trolley tales.
          </p>
          <Link href="/historical-sketches" className="hof-btn hof-btn-outline">
            Read Sketches
          </Link>
        </div>
      </section>

      {/* Timeline */}
      <section className="hof-section bg-white">
        <div className="hof-container flex flex-col items-center">
          <div className="hof-section-header">
       
            <h2 className="hof-section-title">Northeast Philadelphia Historical Timeline</h2>
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

      {/* YouTube Channel */}
      <section className="py-20 bg-[var(--white)]">
        <div className="hof-container flex flex-col items-center text-center gap-6">
          <h2 className="hof-section-title">Check Out Our YouTube Channel</h2>
          <p className="hof-section-description max-w-2xl">
            We post our monthly long form meeting videos on our YouTube channel—head over to watch the latest presentations and subscribe for new videos.
          </p>
          <Link
            href={siteConfig.links.youtube}
            className="hof-btn hof-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the YouTube Channel
          </Link>
        </div>
      </section>
    </main>
  )
}

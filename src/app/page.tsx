import { Hero } from "@/components/Hero"
import { Neighborhoods } from "@/components/Neighborhoods"
import { siteConfig } from "@/config/site"
import Image from "next/image"
import Link from "next/link"

// Revalidate every 24 hours
export const revalidate = 86400

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

import { siteConfig } from "@/config/site"

export const metadata = {
  title: `Gallery | ${siteConfig.name}`,
  description: "Photos from induction ceremonies and historical images of Northeast Philadelphia.",
}

const galleryImages = [
  {
    id: "1",
    title: "2012 Induction Ceremony",
    url: "/inductees/2012-ceremony.jpg",
    category: "Ceremony",
    year: 2012,
  },
  {
    id: "2",
    title: "Thomas Holme Plaque",
    url: "/inductees/thomas-holme.jpg",
    category: "Historical",
    year: 2009,
  },
  {
    id: "3",
    title: "St. Katharine Drexel",
    url: "/inductees/katharine-drexel.jpg",
    category: "Portrait",
    year: 2009,
  },
  {
    id: "4",
    title: "Chris Ferguson NASA",
    url: "/inductees/chris-ferguson.jpg",
    category: "Portrait",
    year: 2012,
  },
  {
    id: "5",
    title: "Disston Saw Works",
    url: "/inductees/disston.jpg",
    category: "Historical",
    year: 2009,
  },
  {
    id: "6",
    title: "Tom Gola Action Shot",
    url: "/inductees/tom-gola.jpg",
    category: "Portrait",
    year: 2009,
  },
  {
    id: "7",
    title: "Frank Shuman Solar Engine",
    url: "/inductees/frank-shuman.jpg",
    category: "Historical",
    year: 2012,
  },
  {
    id: "8",
    title: "Historic Houses of Worship",
    url: "/inductees/historic-churches.jpg",
    category: "Historical",
    year: 2012,
  },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--navy)] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="hof-container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Photo Gallery</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Capturing moments of celebration and history in Northeast Philadelphia.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="hof-section bg-white">
        <div className="hof-container flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-3">Highlights from the Hall of Fame</h2>
            <p className="text-[var(--navy)]/70 max-w-3xl">
              A curated look at induction ceremonies, historic landmarks, and portraits of the visionaries who shaped
              Northeast Philadelphia.
            </p>
          </div>
          <div className="gallery-grid w-full max-w-6xl">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item group cursor-pointer">
                <div className="w-full h-full bg-[var(--navy-light)] relative flex items-center justify-center">
                  <svg className="w-10 h-10 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--navy)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-medium">{image.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-white/80 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                        {image.category}
                      </span>
                      <span className="text-white/60 text-xs">{image.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

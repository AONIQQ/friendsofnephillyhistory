import { neighborhoodsData } from "@/data/neighborhoods"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import NeighborhoodImageGallery from "@/components/NeighborhoodImageGallery"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return Object.keys(neighborhoodsData).map((slug) => ({
        slug,
    }))
}

export default async function NeighborhoodPage({ params }: PageProps) {
    const { slug } = await params
    const neighborhood = neighborhoodsData[slug]

    if (!neighborhood) {
        notFound()
    }

    const imageBasePath = neighborhood.imageBasePath || neighborhood.slug
    const images = neighborhood.images || []
    const mapImageIndex = images.findIndex((image) => image.src.toLowerCase().includes("map"))
    const mapImage = mapImageIndex >= 0 ? images[mapImageIndex] : null
    const galleryImages = mapImageIndex >= 0 ? images.filter((_, index) => index !== mapImageIndex) : images

    return (
        <main className="bg-[var(--cream)] min-h-screen">
            {/* Hero / Header */}
            <section className="bg-[var(--green)] text-white pt-20 pb-20 mb-12">
                <div className="hof-container text-center">
                    <Link href="/neighborhoods" className="inline-block mb-6 text-[var(--gold)] hover:text-white transition-colors text-sm font-bold tracking-wider uppercase">
                        ← Back to Neighborhoods
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{neighborhood.name}</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        {neighborhood.description}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-20">
                <div className="container mx-auto px-4 max-w-4xl space-y-12">
                    {/* Standalone neighborhood map */}
                    {mapImage && (
                        <figure className="bg-gray-50 rounded-2xl shadow-xl p-4">
                            <div className="relative w-full">
                                <Image
                                    src={`/${imageBasePath}/${mapImage.src}`}
                                    alt={mapImage.caption || `${neighborhood.name} map`}
                                    width={1600}
                                    height={1200}
                                    className="w-full h-auto rounded-xl object-contain"
                                    sizes="(max-width: 768px) 100vw, 70vw"
                                    priority
                                />
                            </div>
                            {mapImage.caption?.trim() && (
                                <figcaption className="text-center text-sm text-[var(--navy)]/70 mt-4">
                                    {mapImage.caption}
                                </figcaption>
                            )}
                        </figure>
                    )}

                    <div className="text-[var(--navy)]/80 leading-relaxed">
                        {/* This is where we'll render the migrated content */}
                        <div
                            className="[&>p]:mb-6 [&>p]:mt-0 [&>p]:leading-relaxed [&>h2]:mt-12 [&>h2]:font-serif [&>h2]:text-[var(--navy)] [&>h2]:text-3xl [&>em]:text-[var(--navy)]/70"
                            dangerouslySetInnerHTML={{ __html: neighborhood.content || "" }}
                        />
                    </div>

                    {/* Image Gallery */}
                    {galleryImages.length > 0 && (
                        <NeighborhoodImageGallery
                            images={galleryImages}
                            imageBasePath={imageBasePath}
                        />
                    )}
                </div>
            </section>
        </main>
    )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageData {
    src: string
    caption: string
}

interface NeighborhoodImageGalleryProps {
    images: ImageData[]
    imageBasePath: string
}

export default function NeighborhoodImageGallery({ images, imageBasePath }: NeighborhoodImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    if (!images || images.length === 0) return null

    const openModal = (index: number) => {
        setSelectedImage(index)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedImage(null)
        document.body.style.overflow = 'auto'
    }

    const goToNext = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length)
        }
    }

    const goToPrevious = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length)
        }
    }

    return (
        <>
            {/* Gallery Section */}
            <div className="mt-16 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--navy)] text-center mb-8">
                    Historical Images
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            onClick={() => openModal(index)}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <Image
                                    src={`/${imageBasePath}/${image.src}`}
                                    alt={image.caption || `Historical image ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            {image.caption?.trim() && (
                                <div className="p-4">
                                    <p className="text-sm text-[var(--navy)]/70 line-clamp-2">
                                        {image.caption}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-6"
                    onClick={closeModal}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 text-white hover:text-[var(--gold)] transition-colors z-10"
                        onClick={closeModal}
                        aria-label="Close"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous button */}
                    {images.length > 1 && (
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[var(--gold)] transition-colors z-10"
                            onClick={(e) => {
                                e.stopPropagation()
                                goToPrevious()
                            }}
                            aria-label="Previous image"
                        >
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Next button */}
                    {images.length > 1 && (
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[var(--gold)] transition-colors z-10"
                            onClick={(e) => {
                                e.stopPropagation()
                                goToNext()
                            }}
                            aria-label="Next image"
                        >
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Image container */}
                    <div
                        className="w-full max-w-[90vw] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full flex items-center justify-center mb-6">
                            <Image
                                src={`/${imageBasePath}/${images[selectedImage].src}`}
                                alt={images[selectedImage].caption || `Historical image ${selectedImage + 1}`}
                                width={1600}
                                height={1200}
                                sizes="(max-width: 768px) 100vw, 70vw"
                                className="w-full md:w-[70vw] max-w-5xl h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                            />
                        </div>

                        {/* Caption */}
                        {(images[selectedImage].caption?.trim() || images.length > 1) && (
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 max-w-3xl w-full">
                                {images[selectedImage].caption?.trim() && (
                                    <p className="text-[var(--navy)] text-center">
                                        {images[selectedImage].caption}
                                    </p>
                                )}
                                {images.length > 1 && (
                                    <p className={`text-[var(--navy)]/60 text-sm text-center ${images[selectedImage].caption?.trim() ? "mt-2" : ""}`}>
                                        Image {selectedImage + 1} of {images.length}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

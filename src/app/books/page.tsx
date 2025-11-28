import { siteConfig } from "@/config/site"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
    title: "Books | Friends of Northeast Philadelphia History",
    description: "Explore our collection of books covering the rich history of Northeast Philadelphia.",
}

const books = [
    {
        title: "A History of Lower Dublin Academy",
        author: "Samuel C Willits",
        price: "$20.00",
        description: "The frequently referenced and acclaimed 1885 Willits' handwritten manuscript, available to the public in the Holmesburg Library for 125 years, has finally been transcribed and published.",
        link: "http://www.lulu.com/shop/samuel-c-willits/a-history-of-lower-dublin-academy/paperback/product-23176373.html",
        image: "/books/A History of Lower Dublin Academy.jpg"
    },
    {
        title: "The Bristol Pike",
        author: "Samuel F Hotchkin",
        price: "$20.00",
        description: "An 1893 history of the road connecting the village of Frankford in Northeast Philadelphia and Bristol in Bucks County, Pennsylvania.",
        link: "http://www.lulu.com/shop/samuel-f-hotchkin/the-bristol-pike/paperback/product-23451971.html",
        image: "/books/The Bristol Pike.jpg"
    },
    {
        title: "Tacony: Era of William H. Gatzmer and the Philadelphia & Trenton Rail Road",
        author: "Charles McCloskey",
        price: "$20.00",
        description: "A definitive analysis of the village of Tacony in Northeast Philadelphia as it evolved from a Native American Lenni-Lenape hamlet to an area of Colonial estates to a nationally significant railroad hub.",
        link: "http://www.lulu.com/shop/charles-mccloskey/tacony-era-of-william-h-gatzmer-and-the-philadelphia-trenton-rail-road-2nd-printing/paperback/product-22673228.html",
        image: "/books/Tacony- Era of William H. Gatzmer and the Philadelphia & Trenton Rail Road.jpg"
    },
    {
        title: "Gordon, Saltar, Wharton Family Papers, 1723-1858",
        author: "Charles McCloskey",
        price: "$20.00",
        description: "The principal figures associated with this collection were members of the related Gordon, Saltar, Wharton, and Wharton Bickley families.",
        link: "http://www.lulu.com/shop/charles-mccloskey/gordon-saltar-wharton-family-papers-1723-1858/paperback/product-24028313.html",
        image: "/books/Gordon, Saltar, Wharton Family Papers, 1723-1858.jpg"
    },
    {
        title: "Old Northeast Philadelphia County, 1609-1854",
        author: "Northeast High School Philadelphia, 1967/68",
        price: "$20.00",
        description: "This reprint of Old Northeast Philadelphia County: 1609-1854, by Mrs. Cora Hurwitz's 11th grade History Class at Philadelphia's Northeast High School, 1967-68, continues to be the best resource for local history.",
        link: "http://www.lulu.com/shop/northeast-high-school-philadelphia-junior-history-class-196768/old-northeast-philadelphia-county-1609-1854/paperback/product-22397481.html",
        image: "/books/Old Northeast Philadelphia County, 1609-1854.jpg"
    },
    {
        title: "A History of the Townships of Byberry and Moreland",
        author: "Joseph C. Martindale",
        price: "$20.00",
        description: "A history of the two outer most townships (Byberry and Moreland) that comprised today's Northeast Philadelphia. Originally published in 1867.",
        link: "http://www.lulu.com/shop/joseph-c-martindale/a-history-of-the-townships-of-byberry-and-moreland/paperback/product-23452238.html",
        image: "/books/A History of the Townships of Byberry and Moreland.jpg"
    },
    {
        title: "York Road, Old and New, Fox Chase & Bustleton",
        author: "Samuel F Hotchkin",
        price: "$20.00",
        description: "A history of the York Road corridor and the communities of Fox Chase and Bustleton.",
        link: "http://www.lulu.com/shop/samuel-f-hotchkin/york-road-old-and-new-fox-chase-bustleton/paperback/product-23452858.html",
        image: "/books/York Road, Old and New, Fox Chase & Bustleton.jpg"
    }
]

export default function BooksPage() {
    return (
        <main className="pt-24 pb-20 bg-[var(--cream)] min-h-screen">
            <div className="hof-container">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="hof-section-label">Publications</span>
                    <h1 className="hof-section-title">Books on Northeast History</h1>
                    <p className="hof-section-description">
                        All books are sold through Lulu.com online print-on-demand.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-[var(--green)]/10 hover:border-[var(--gold)] transition-all duration-300 hover:shadow-lg flex flex-col">
                            <div className="mb-6 h-64 bg-[var(--cream-soft)] rounded-lg border border-[var(--border)] relative overflow-hidden">
                                <Image
                                    src={book.image}
                                    alt={`${book.title} cover`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-contain p-4"
                                />
                            </div>
                            <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-2 leading-tight">{book.title}</h3>
                            <p className="text-sm font-medium text-[var(--gold)] mb-4">By {book.author}</p>
                            <p className="text-[var(--green)]/70 text-sm mb-6 flex-grow">{book.description}</p>
                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <span className="font-bold text-[var(--green)] text-lg">{book.price}</span>
                                <a
                                    href={book.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hof-btn hof-btn-primary text-sm py-2 px-4"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

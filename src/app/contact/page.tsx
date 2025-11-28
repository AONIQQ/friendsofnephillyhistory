import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Contact | Friends of Northeast Philadelphia History",
  description: "Get in touch with FNEPH. We'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-[var(--cream)] min-h-screen">
      <div className="bg-[var(--green)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with Friends of Northeast Philadelphia History.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white p-8 md:p-12 rounded-xl border border-[var(--green)]/10">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-2">Email Us</h3>
              <p className="text-[var(--green)]/70">
                For general inquiries, please email us at:<br />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--gold)] font-bold hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-2">Phone</h3>
              <p className="text-[var(--green)]/70">
                <a href={`tel:${siteConfig.contact.phone}`} className="text-[var(--gold)] font-bold hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>


            <div>
              <h3 className="text-xl font-bold font-serif text-[var(--green)] mb-2">Follow Us</h3>
              <div className="flex gap-4">
                {siteConfig.links.facebook && (
                  <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:text-[var(--gold)] transition-colors font-bold">
                    Facebook
                  </a>
                )}
                {siteConfig.links.youtube && (
                  <a href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:text-[var(--gold)] transition-colors font-bold">
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

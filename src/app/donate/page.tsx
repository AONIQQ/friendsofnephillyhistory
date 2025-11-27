import { siteConfig } from "@/config/site"

export const metadata = {
  title: `Support Us | ${siteConfig.name}`,
  description: "Support the Northeast Philadelphia Hall of Fame and help us preserve our community's rich history.",
}

const donationTiers = [
  {
    name: "Friend",
    amount: 25,
    description: "Support our annual ceremony",
    benefits: ["Recognition on website", "Email newsletter"],
  },
  {
    name: "Supporter",
    amount: 50,
    description: "Help preserve local history",
    benefits: ["Recognition on website", "Email newsletter", "Event invitations"],
  },
  {
    name: "Patron",
    amount: 100,
    description: "Sponsor an inductee plaque",
    benefits: ["Recognition on website", "Email newsletter", "Event invitations", "Commemorative program"],
    featured: true,
  },
  {
    name: "Champion",
    amount: 250,
    description: "Major supporter of our mission",
    benefits: [
      "Recognition on website",
      "Email newsletter",
      "Event invitations",
      "Commemorative program",
      "VIP ceremony seating",
    ],
  },
]

export default function DonatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--navy)] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="hof-container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Support Our Mission</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Your generous contribution helps us honor Northeast Philadelphia&apos;s heroes and preserve our
            community&apos;s rich history.
          </p>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="hof-section bg-white">
        <div className="hof-container flex flex-col items-center">
          <div className="hof-section-header">
            <span className="hof-section-label">Give Today</span>
            <h2 className="hof-section-title">Make a Donation</h2>
            <p className="hof-section-description">
              Choose a giving level that works for you. All donations are tax-deductible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
            {donationTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white p-6 rounded-xl flex flex-col border ${tier.featured ? "ring-2 ring-[var(--gold)] border-[var(--gold)]" : "border-[var(--navy)]/10"} relative`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[var(--navy)] px-3 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold font-serif text-[var(--navy)]">{tier.name}</h3>
                  <div className="text-3xl font-bold text-[var(--gold)] my-2">${tier.amount}</div>
                  <p className="text-[var(--navy)]/60 text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-2 flex-grow mb-5">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[var(--navy)]/70">
                      <svg className="w-4 h-4 text-[var(--gold)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className={`hof-btn w-full ${tier.featured ? "hof-btn-gold" : "hof-btn-primary"}`}>
                  Donate ${tier.amount}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[var(--navy)]/70 mb-3">Want to make a custom donation?</p>
            <button className="hof-btn hof-btn-outline">Enter Custom Amount</button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="hof-section bg-[var(--white-soft)]">
        <div className="hof-container flex flex-col items-center">
          <div className="max-w-4xl text-center">
            <h2 className="hof-section-title mb-4">Your Impact</h2>
            <p className="hof-section-description mb-10">
              Your donation directly supports our mission to preserve and celebrate Northeast Philadelphia&apos;s
              remarkable legacy.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-[var(--navy)] flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold font-serif text-[var(--navy)] mb-2">Preserve History</h3>
                <p className="text-[var(--navy)]/70 text-sm">
                  Fund research and documentation of Northeast Philadelphia&apos;s rich heritage
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-[var(--navy)] flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold font-serif text-[var(--navy)] mb-2">Honor Heroes</h3>
                <p className="text-sm text-[var(--navy)]/60">
                  Support our annual induction ceremony and recognition programs
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-[var(--navy)] flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold font-serif text-[var(--navy)] mb-2">Educate Future Generations</h3>
                <p className="text-sm text-[var(--navy)]/60">Enable educational programs that teach local history</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="hof-section bg-white">
        <div className="hof-container flex flex-col items-center">
          <div className="max-w-4xl text-center">
            <h2 className="hof-section-title mb-4">Our Partners</h2>
            <p className="hof-section-description mb-10">
              The Northeast Philadelphia Hall of Fame is made possible through the support of these dedicated
              organizations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-[var(--white-soft)]">
                <h3 className="font-semibold font-serif text-[var(--navy)] mb-1">
                  {siteConfig.partners.holyFamily.name}
                </h3>
                <p className="text-sm text-[var(--navy)]/60">{siteConfig.partners.holyFamily.role}</p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--white-soft)]">
                <h3 className="font-semibold font-serif text-[var(--navy)] mb-1">
                  {siteConfig.partners.historicalSociety.name}
                </h3>
                <p className="text-sm text-[var(--navy)]/60">{siteConfig.partners.historicalSociety.role}</p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--white-soft)]">
                <h3 className="font-semibold font-serif text-[var(--navy)] mb-1">
                  {siteConfig.partners.centerForHistory.name}
                </h3>
                <p className="text-sm text-[var(--navy)]/60">{siteConfig.partners.centerForHistory.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] py-16"></section>
    </>
  )
}

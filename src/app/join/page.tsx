import { SignUpForm } from "@/components/SignUpForm"
import { siteConfig } from "@/config/site"

export default function JoinPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--navy)] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="hof-container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Join Our Community</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Sign up to receive updates, volunteer opportunities, and help us build a better {siteConfig.location}.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--white-soft)]">
        <div className="hof-container flex flex-col items-center">
          <div className="max-w-xl w-full bg-white p-8 md:p-10 rounded-xl border border-[var(--navy)]/10">
            <SignUpForm />
          </div>
        </div>
      </section>
    </>
  )
}

import { Section } from "@/components/Section";
import { SignUpForm } from "@/components/SignUpForm";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JoinPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />
            <main className="flex-grow pt-24">
                <div className="page-stack">
                    <Section className="py-12 sm:py-16">
                        <div className="mx-auto max-w-xl bg-white p-8 shadow-xl rounded-2xl ring-1 ring-gray-900/5 hof-text-stack">
                            <div className="text-center hof-text-stack">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-heading">Join {siteConfig.name}</h1>
                                <p className="text-lg text-gray-600">
                                    Sign up to receive updates, volunteer opportunities, and help us build a better {siteConfig.location}.
                                </p>
                            </div>
                            <SignUpForm />
                        </div>
                    </Section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

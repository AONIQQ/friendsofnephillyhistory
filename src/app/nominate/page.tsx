"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export default function NominatePage() {
    const [formData, setFormData] = useState({
        nomineeName: "",
        nomineeCategory: "",
        nomineeYears: "",
        nominatorName: "",
        nominatorEmail: "",
        nominatorPhone: "",
        nominatorRelation: "",
        shortDescription: "",
        achievements: "",
        significance: "",
        supportingInfo: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <>
                <Header />
                <section className="hof-gradient pt-32 pb-20 min-h-screen">
                    <div className="hof-container">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--accent-500)] flex items-center justify-center">
                                <svg className="w-10 h-10 text-[var(--primary-900)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Nomination Received!
                            </h1>
                            <p className="text-xl text-white/80 mb-8">
                                Thank you for your nomination. Our selection committee will review your submission and may contact you for additional information.
                            </p>
                            <a href="/" className="hof-btn-gold">
                                Return to Home
                            </a>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            
            {/* Hero Section */}
            <section className="hof-gradient pt-32 pb-16">
                <div className="hof-container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Nominate a Hero
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Know someone who deserves recognition for their contributions to Northeast Philadelphia? Submit your nomination today.
                    </p>
                </div>
            </section>

            {/* Criteria Section */}
            <section className="bg-[var(--secondary-100)] py-8 border-b">
                <div className="hof-container">
                    <h2 className="text-xl font-bold hof-heading mb-4 text-center">Nomination Criteria</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--primary-700)] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold hof-heading mb-1">NE Philly Connection</h3>
                            <p className="text-sm text-gray-600">Must have significant ties to Northeast Philadelphia</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--primary-700)] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold hof-heading mb-1">Significant Impact</h3>
                            <p className="text-sm text-gray-600">Made lasting contributions to the community or beyond</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--primary-700)] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold hof-heading mb-1">Enduring Legacy</h3>
                            <p className="text-sm text-gray-600">Contributions that stand the test of time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nomination Form */}
            <section className="hof-section bg-white">
                <div className="hof-container">
                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Nominee Information */}
                            <div className="hof-card p-8">
                                <h2 className="text-2xl font-bold hof-heading mb-6">Nominee Information</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="hof-label">Nominee Name *</label>
                                        <input
                                            type="text"
                                            name="nomineeName"
                                            value={formData.nomineeName}
                                            onChange={handleChange}
                                            required
                                            className="hof-input"
                                            placeholder="Full name of nominee"
                                        />
                                    </div>
                                    <div>
                                        <label className="hof-label">Category *</label>
                                        <select
                                            name="nomineeCategory"
                                            value={formData.nomineeCategory}
                                            onChange={handleChange}
                                            required
                                            className="hof-input"
                                        >
                                            <option value="">Select category</option>
                                            {siteConfig.inducteeCategories.map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="hof-label">Years (Birth-Death or Founded)</label>
                                        <input
                                            type="text"
                                            name="nomineeYears"
                                            value={formData.nomineeYears}
                                            onChange={handleChange}
                                            className="hof-input"
                                            placeholder="e.g., 1920-2005 or Founded 1950"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Your Information */}
                            <div className="hof-card p-8">
                                <h2 className="text-2xl font-bold hof-heading mb-6">Your Information</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="hof-label">Your Name *</label>
                                        <input
                                            type="text"
                                            name="nominatorName"
                                            value={formData.nominatorName}
                                            onChange={handleChange}
                                            required
                                            className="hof-input"
                                        />
                                    </div>
                                    <div>
                                        <label className="hof-label">Email *</label>
                                        <input
                                            type="email"
                                            name="nominatorEmail"
                                            value={formData.nominatorEmail}
                                            onChange={handleChange}
                                            required
                                            className="hof-input"
                                        />
                                    </div>
                                    <div>
                                        <label className="hof-label">Phone</label>
                                        <input
                                            type="tel"
                                            name="nominatorPhone"
                                            value={formData.nominatorPhone}
                                            onChange={handleChange}
                                            className="hof-input"
                                        />
                                    </div>
                                    <div>
                                        <label className="hof-label">Relationship to Nominee</label>
                                        <input
                                            type="text"
                                            name="nominatorRelation"
                                            value={formData.nominatorRelation}
                                            onChange={handleChange}
                                            className="hof-input"
                                            placeholder="e.g., Family member, Historian"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Nomination Details */}
                            <div className="hof-card p-8">
                                <h2 className="text-2xl font-bold hof-heading mb-6">Nomination Details</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="hof-label">Brief Description *</label>
                                        <textarea
                                            name="shortDescription"
                                            value={formData.shortDescription}
                                            onChange={handleChange}
                                            required
                                            className="hof-textarea"
                                            rows={3}
                                            placeholder="A brief summary of who the nominee is and their connection to Northeast Philadelphia"
                                        />
                                    </div>
                                    <div>
                                        <label className="hof-label">Key Achievements *</label>
                                        <textarea
                                            name="achievements"
                                            value={formData.achievements}
                                            onChange={handleChange}
                                            required
                                            className="hof-textarea"
                                            rows={4}
                                            placeholder="List the nominee's major accomplishments and contributions"
                                        />
                                    </div>
                                    <div>
                                        <label className="hof-label">Why Should They Be Inducted? *</label>
                                        <textarea
                                            name="significance"
                                            value={formData.significance}
                                            onChange={handleChange}
                                            required
                                            className="hof-textarea"
                                            rows={4}
                                            placeholder="Explain the lasting impact and significance of their contributions"
                                        />
                                    </div>
                                    <div>
                                        <label className="hof-label">Additional Supporting Information</label>
                                        <textarea
                                            name="supportingInfo"
                                            value={formData.supportingInfo}
                                            onChange={handleChange}
                                            className="hof-textarea"
                                            rows={3}
                                            placeholder="Links to articles, obituaries, or other sources (optional)"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="hof-btn-gold text-lg px-12 py-4 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Nomination"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

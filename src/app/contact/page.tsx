"use client"

import type React from "react"
import { useState } from "react"
import { siteConfig } from "@/config/site"

const inquiryTypes = [
  { value: "volunteer", label: "Volunteer Opportunity" },
  { value: "host_event", label: "Host an Event" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "general", label: "General Question" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setSubmitStatus(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      inquiryType: formData.get("inquiryType") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Client-side validation
    const newErrors: Record<string, string> = {}
    if (!data.name || data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!data.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type"
    }
    if (!data.subject || data.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }
    if (!data.message || data.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Thank you for your message! We will get back to you soon." })
        const form = e.target as HTMLFormElement
        form.reset()
      } else {
        setSubmitStatus({ success: false, message: result.error || "Something went wrong. Please try again." })
      }
    } catch {
      setSubmitStatus({ success: false, message: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--navy)] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="hof-container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Get in touch with the Northeast Philadelphia Hall of Fame. We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-[var(--white-soft)]">
        <div className="hof-container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-6 font-serif">Get In Touch</h2>
                <p className="text-[var(--navy)]/70 mb-8 leading-relaxed">
                  Whether you want to volunteer, host an event, explore partnership opportunities, or just have a
                  question, we&apos;re here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)] mb-1">Email</h3>
                      <p className="text-[var(--navy)]/70">{siteConfig.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)] mb-1">Location</h3>
                      <p className="text-[var(--navy)]/70">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-[var(--navy)]/10">
                  {submitStatus?.success ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--navy)] mb-3 font-serif">Message Sent!</h3>
                      <p className="text-[var(--navy)]/70 mb-6">{submitStatus.message}</p>
                      <button
                        onClick={() => {
                          setSubmitStatus(null)
                          setErrors({})
                        }}
                        className="hof-btn hof-btn-primary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-[var(--navy)] mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-[var(--navy)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                            placeholder="Your name"
                          />
                          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-[var(--navy)] mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-[var(--navy)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                            placeholder="you@example.com"
                          />
                          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-[var(--navy)] mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 border border-[var(--navy)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                            placeholder="(215) 555-0123"
                          />
                        </div>

                        <div>
                          <label htmlFor="inquiryType" className="block text-sm font-semibold text-[var(--navy)] mb-2">
                            Inquiry Type <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            required
                            className="w-full px-4 py-3 border border-[var(--navy)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all bg-white"
                          >
                            <option value="">Select an option</option>
                            {inquiryTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                          {errors.inquiryType && <p className="mt-1 text-sm text-red-500">{errors.inquiryType}</p>}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-[var(--navy)] mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 border border-[var(--navy)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                          placeholder="What is this regarding?"
                        />
                        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-[var(--navy)] mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-[var(--navy)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all resize-none"
                          placeholder="Tell us how we can help..."
                        />
                        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                      </div>

                      {submitStatus && !submitStatus.success && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-600 text-sm">{submitStatus.message}</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full hof-btn hof-btn-gold text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Types Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="hof-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-[var(--gold)] font-semibold text-sm uppercase tracking-wider mb-3 block">
              How Can We Help?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] font-serif">Ways to Get Involved</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-[var(--white-soft)] rounded-xl p-6 text-center border border-[var(--navy)]/10 hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[var(--navy)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--navy)] mb-2">Volunteer Opportunity</h3>
              <p className="text-sm text-[var(--navy)]/60">Join our team and help honor local heroes</p>
            </div>

            <div className="bg-[var(--white-soft)] rounded-xl p-6 text-center border border-[var(--navy)]/10 hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[var(--navy)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--navy)] mb-2">Host an Event</h3>
              <p className="text-sm text-[var(--navy)]/60">Partner with us for community events</p>
            </div>

            <div className="bg-[var(--white-soft)] rounded-xl p-6 text-center border border-[var(--navy)]/10 hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[var(--navy)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--navy)] mb-2">Partnership Inquiry</h3>
              <p className="text-sm text-[var(--navy)]/60">Explore sponsorship and collaboration</p>
            </div>

            <div className="bg-[var(--white-soft)] rounded-xl p-6 text-center border border-[var(--navy)]/10 hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[var(--navy)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--navy)] mb-2">General Question</h3>
              <p className="text-sm text-[var(--navy)]/60">Ask questions or share feedback</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

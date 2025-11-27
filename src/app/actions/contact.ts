"use server"

import { db } from "@/lib/db"

export type ContactFormState = {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    inquiryType?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const inquiryType = formData.get("inquiryType") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validation
  const errors: ContactFormState["errors"] = {}

  if (!name || name.trim().length < 2) {
    errors.name = ["Name must be at least 2 characters"]
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please enter a valid email address"]
  }

  if (!inquiryType) {
    errors.inquiryType = ["Please select an inquiry type"]
  }

  if (!subject || subject.trim().length < 5) {
    errors.subject = ["Subject must be at least 5 characters"]
  }

  if (!message || message.trim().length < 20) {
    errors.message = ["Message must be at least 20 characters"]
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors,
    }
  }

  try {
    await db.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        inquiryType,
        subject: subject.trim(),
        message: message.trim(),
      },
    })

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const { name, email, phone, inquiryType, subject, message } = data

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters" }, { status: 400 })
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    if (!inquiryType) {
      return NextResponse.json({ error: "Please select an inquiry type" }, { status: 400 })
    }

    if (!subject || subject.trim().length < 5) {
      return NextResponse.json({ error: "Subject must be at least 5 characters" }, { status: 400 })
    }

    if (!message || message.trim().length < 20) {
      return NextResponse.json({ error: "Message must be at least 20 characters" }, { status: 400 })
    }

    // Once you add POSTGRES_PRISMA_URL env var, uncomment the db code below
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      inquiryType,
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    })

    // TODO: Uncomment when database is configured
    // import { db } from "@/lib/db"
    // const submission = await db.contactSubmission.create({
    //   data: {
    //     name: name.trim(),
    //     email: email.trim().toLowerCase(),
    //     phone: phone?.trim() || null,
    //     inquiryType,
    //     subject: subject.trim(),
    //     message: message.trim(),
    //   },
    // })

    return NextResponse.json({ success: true, id: Date.now().toString() })
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}

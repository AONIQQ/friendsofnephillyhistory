import { NextResponse } from "next/server"
import { db } from "@/lib/db"

const ADMIN_PASSWORD = process.env.LOGIN;

function requireAdminPassword(password: string | null | undefined) {
    if (!ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Admin password not configured" }, { status: 500 });
    }
    if (password !== ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return null;
}

export const dynamic = 'force-dynamic';

// GET all contact submissions (for admin)
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const password = searchParams.get('password');

        const passwordError = requireAdminPassword(password);
        if (passwordError) return passwordError;

        const submissions = await db.contactSubmission.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(submissions);
    } catch (error) {
        console.error("Error fetching contact submissions:", error);
        return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
    }
}

// POST - create new contact submission or admin actions
export async function POST(request: Request) {
    try {
        const data = await request.json()

        const { action, id, password, name, email, phone, inquiryType, subject, message, status } = data

        // Admin operations (update status, delete)
        if (action === "updateStatus" || action === "delete") {
            const passwordError = requireAdminPassword(password);
            if (passwordError) return passwordError;

            if (action === "updateStatus") {
                await db.contactSubmission.update({
                    where: { id },
                    data: { status },
                });
            } else if (action === "delete") {
                await db.contactSubmission.delete({
                    where: { id },
                });
            }

            const submissions = await db.contactSubmission.findMany({
                orderBy: {
                    createdAt: "desc",
                },
            });

            return NextResponse.json({ success: true, submissions });
        }

        // Public contact form submission
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

        // Save to database
        const submission = await db.contactSubmission.create({
            data: {
                name: name.trim(),
                email: email.trim().toLowerCase(),
                phone: phone?.trim() || null,
                inquiryType,
                subject: subject.trim(),
                message: message.trim(),
                status: "new",
            },
        })

        return NextResponse.json({ success: true, id: submission.id })
    } catch (error) {
        console.error("Contact form submission error:", error)
        return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
    }
}

// DELETE contact submission
export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const { id, password } = body;

        const passwordError = requireAdminPassword(password);
        if (passwordError) return passwordError;

        await db.contactSubmission.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting contact submission:", error);
        return NextResponse.json({ error: "Failed to delete submission" }, { status: 500 });
    }
}

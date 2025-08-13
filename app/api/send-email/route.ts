import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Here you would integrate with an actual email service
    // For now, we'll simulate the email sending process

    const emailContent = `
New Contact Form Submission from ComplianceCore Website

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}

---
This message was sent from the ComplianceCore website contact form.
    `.trim()

    // Log the email content (in production, this would be sent via email service)
    console.log("Email would be sent to: jacobroy8732@gmail.com")
    console.log("Email content:", emailContent)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, error: "Sorry, there was an error sending your message. Please try again." },
      { status: 500 },
    )
  }
}

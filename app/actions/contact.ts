"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    }
  }

  try {
    // Create WhatsApp message content
    const whatsappMessage = `New Contact Form Submission from Hushai Consultants Website

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}

---
This message was sent from the Hushai Consultants website contact form.`

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you could:
    // 1. Send to WhatsApp Business API
    // 2. Store in database
    // 3. Send notification to admin

    console.log("Contact form submission:", { name, email, company, message })
    console.log("WhatsApp message would be sent to: +91 9820113322")

    return {
      success: true,
      message: "Thank you for your message! We will contact you via WhatsApp within 24 hours.",
    }
  } catch (error) {
    console.error("Error processing contact form:", error)
    return {
      success: false,
      error: "Sorry, there was an error sending your message. Please try contacting us directly on WhatsApp.",
    }
  }
}

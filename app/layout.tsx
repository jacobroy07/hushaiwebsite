import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ComplianceCore - Corporate Compliance Excellence",
  description:
    "Navigate complex regulatory landscapes with confidence. Expert corporate compliance solutions for businesses of all sizes.",
  keywords: "corporate compliance, SEBI compliance, FDI, FEMA, company incorporation, XBRL services, private equity",
  authors: [{ name: "ComplianceCore" }],
  openGraph: {
    title: "ComplianceCore - Corporate Compliance Excellence",
    description: "Expert corporate compliance solutions for businesses of all sizes",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">{children}</div>
      </body>
    </html>
  )
}

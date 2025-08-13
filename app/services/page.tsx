"use client"
import { useEffect } from "react"
import {
  Shield,
  FileText,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Building,
  Globe,
  TrendingUp,
  DollarSign,
  BarChart,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = "+919820113322"
    const message = encodeURIComponent("Hello! I would like to know more about your services.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ComplianceCore</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/services" className="text-blue-600 font-semibold">
                Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Blog
              </Link>
              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive corporate compliance solutions designed to meet your business needs and regulatory
              requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="bg-white">
        {/* Formation/Incorporation/Registration */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Formation / Incorporation / Registration
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-12">
                Complete business formation services to establish your corporate structure with full legal compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Incorporation of Companies",
                "Incorporation of LLP's",
                "Registration of Trusts",
                "Registration of Societies",
                "Formation of Partnership firms",
                "Other Organizations",
              ].map((service, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg group transition-all"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Professional formation services with complete documentation and regulatory compliance
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Law Compliances */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-green-600 p-4 rounded-2xl shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Corporate Law Compliances & Secretarial Services
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-12">
                Under Companies Act 1956, and LLP Act - Complete corporate secretarial and compliance solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  "Shifting of Registered office",
                  "Alteration of Object Clause, change of name of the company or other alterations in MOA and AOA of the Company",
                  "Obtaining DIN, Digital signatures, Change in Directors/Management of the Company",
                  "Increase in capital/Issue of shares/Transfer of shares/Maintaining of Secretarial Records",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-900 font-medium">{service}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 delay-300">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Restructuring</h3>
                  <div className="space-y-4">
                    {[
                      "Merger/Amalgamations",
                      "Takeover/Acquisition",
                      "Spin Off, Restructuring",
                      "Winding-up/Liquidation, Strike-off",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Laws/FDI/FEMA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-purple-600 p-4 rounded-2xl shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Economic Laws / FDI / FEMA & Compliance Services
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-12">
                Expert guidance on foreign investment regulations and economic law compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "RBI compliances in respect of foreign direct investments",
                "Approval of FIPB in cases of projects which are not under automatic route",
                "Compliances under Foreign Exchange Management Act, Rules and Regulations",
                "Opening of Branch/Liaising offices in India",
                "Nominee Services (branch or Liaising Office)",
              ].map((service, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-900 font-medium">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEBI Compliance */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-orange-600 p-4 rounded-2xl shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Compliances Under SEBI Act, Rules and Regulations
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-12">
                Comprehensive securities law compliance and regulatory services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Compliances under disclosure of Investor Protection guidelines",
                "Compliances under Securities Takeover Regulations",
                "Compliances under Depositories Act",
                "Stock Exchange compliances",
                "Revocation of suspension of Listed Companies",
              ].map((service, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg group transition-all"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-900 font-medium group-hover:text-orange-600 transition-colors">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Equity Funding */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-600 p-4 rounded-2xl shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Private Equity Funding</h2>
              </div>
              <p className="text-xl text-gray-600 mb-12">
                Strategic funding solutions and regulatory compliance for private equity transactions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Sourcing private equity funding",
                "Statutory & Regulatory Governance Compliance for Corporate Entities, Partnerships & Trusts",
                "Corporate Secretarial Services",
              ].map((service, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 bg-white p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg group text-center transition-all"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* XBRL Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg">
                  <BarChart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">XBRL Conversion and Filing Services</h2>
              </div>
              <p className="text-xl text-gray-600 mb-12">
                Professional XBRL conversion and filing services for regulatory compliance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Listed Companies",
                  description: "Complete XBRL conversion and filing services for all listed entities",
                },
                {
                  title: "Companies with ₹5 Crore+ Paid-up Capital",
                  description: "Specialized XBRL services for companies meeting the capital threshold",
                },
                {
                  title: "Companies with ₹100 Crore+ Turnover",
                  description: "Comprehensive XBRL solutions for high-turnover companies",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl border border-indigo-200 hover:shadow-lg group transition-all"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <BarChart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your compliance needs and discover how we can help your business thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Get Free Consultation</span>
              </button>
              <Link
                href="/"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors shadow-lg"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">ComplianceCore</span>
            </Link>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 ComplianceCore. All rights reserved.</p>
              <p className="mt-2">Your trusted partner in corporate compliance.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}

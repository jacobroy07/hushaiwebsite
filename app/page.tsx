"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import {
  Phone,
  MapPin,
  Shield,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Star,
  Calendar,
  User,
  X,
  TrendingUp,
  Globe,
  Award,
  Target,
  Menu,
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const openWhatsApp = () => {
    const phoneNumber = "+919820113322"
    const message = encodeURIComponent("Hello! I would like to know more about your business advisory services.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
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

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    setShowMobileMenu(false) // Close mobile menu when navigating
  }

  const openContactForm = () => {
    setShowContactForm(true)
    setShowMobileMenu(false) // Close mobile menu when opening contact form
  }

  const closeContactForm = () => {
    setShowContactForm(false)
  }

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-900">Hushai Consultants LLP </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-blue-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105"
              >
                Home
              </button>
              <Link
                href="/services"
                className="text-blue-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105"
              >
                Services
              </Link>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-blue-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105"
              >
                About
              </button>
              <Link
                href="/blog"
                className="text-blue-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105"
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-blue-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105"
              >
                Contact
              </button>
              <button
                onClick={openContactForm}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-blue-700 hover:bg-blue-50 transition-all duration-300"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              showMobileMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 border-t border-blue-100 mt-4">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="block w-full text-left px-4 py-3 text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                Home
              </button>
              <Link
                href="/services"
                className="block w-full text-left px-4 py-3 text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setShowMobileMenu(false)}
              >
                Services
              </Link>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="block w-full text-left px-4 py-3 text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                About
              </button>
              <Link
                href="/blog"
                className="block w-full text-left px-4 py-3 text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setShowMobileMenu(false)}
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="block w-full text-left px-4 py-3 text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
              >
                Contact
              </button>
              <button
                onClick={openContactForm}
                className="block w-full text-left px-4 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 mt-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-all duration-500">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 scale-100 opacity-100">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900">Contact Us</h3>
                <button
                  onClick={closeContactForm}
                  className="text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ContactForm isModal={true} onClose={closeContactForm} />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
                Your Trusted
                <span className="text-blue-600 block">Business Advisory</span>
                <span className="text-blue-800">Partner in India</span>
              </h1>
              <p className="text-xl text-blue-700 mb-8 leading-relaxed">
                We help companies realize their business goals in India through our in-depth knowledge of the Indian
                market, expertise in dynamic legal and regulatory environment, and impeccable administrative skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  <span>Our Services</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <button
                  onClick={openWhatsApp}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-500 hover:scale-105 transform"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Get Started</span>
                </button>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-x-12 transition-all duration-1500 ease-out delay-500">
              <div className="relative">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-700 hover:scale-105 transform">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-2">15+</h3>
                    <p className="text-blue-700 font-medium">Years of Experience</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-700 hover:scale-105 transform">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-2">200+</h3>
                    <p className="text-blue-700 font-medium">Happy Clients</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-700 hover:scale-105 transform">
                    <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110">
                      <Star className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-2">100+</h3>
                    <p className="text-blue-700 font-medium">Client Reviews</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-700 hover:scale-105 transform">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110">
                      <Target className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-2">100%</h3>
                    <p className="text-blue-700 font-medium">Compliance Rate</p>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef} className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Advisory Services</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Comprehensive business advisory solutions tailored for Indian market expansion and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Shield,
                title: "Formation & Incorporation",
                description: "Complete business formation services including companies, LLPs, trusts, and partnerships",
                color: "blue",
              },
              {
                icon: FileText,
                title: "Corporate Law Compliance",
                description: "Comprehensive secretarial services and corporate law compliance solutions",
                color: "green",
              },
              {
                icon: Users,
                title: "Economic Laws & FDI",
                description: "RBI compliances, FEMA regulations, and foreign investment advisory services",
                color: "purple",
              },
              {
                icon: CheckCircle,
                title: "SEBI Compliance",
                description: "Securities law compliance, takeover regulations, and stock exchange services",
                color: "orange",
              },
              {
                icon: FileText,
                title: "Private Equity Funding",
                description: "Sourcing PE funding and regulatory governance for corporate entities",
                color: "red",
              },
              {
                icon: Shield,
                title: "XBRL Services",
                description: "XBRL conversion and filing services for listed companies and large corporations",
                color: "indigo",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-blue-200 hover:border-blue-400 group hover:scale-105 transform"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-blue-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-x-12 transition-all duration-1500 ease-out">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 transform">
                <h3 className="text-2xl font-bold mb-6">Why Choose ComplianceCore?</h3>
                <div className="space-y-4">
                  {[
                    "15+ years of Indian market expertise",
                    "200+ successful business expansions",
                    "Deep regulatory environment knowledge",
                    "Impeccable administrative skills",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 ease-out"
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out delay-500">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Your Gateway to Indian Business Success
              </h2>
              <p className="text-lg text-blue-700 mb-6 leading-relaxed">
                As a leading advisory firm, we specialize in helping companies realize their business goals in India.
                Our in-depth knowledge of the Indian market, combined with our competence in navigating the dynamic
                legal and regulatory environment, makes us the ideal partner for your expansion.
              </p>
              <p className="text-lg text-blue-700 mb-8 leading-relaxed">
                We are privileged to continue associating with many companies in their expansion aspects, and our
                business services ensure that our clients remain in absolute compliance with the law of the land.
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Start Your Journey</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Trusted by businesses across industries for exceptional advisory and compliance solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechCorp Industries",
                role: "CEO",
                content:
                  "ComplianceCore's deep understanding of the Indian market helped us establish our operations seamlessly. Their regulatory expertise saved us months of delays.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                company: "Global Ventures Ltd",
                role: "CFO",
                content:
                  "Outstanding advisory services for our India expansion. The team's knowledge of FDI regulations and local compliance requirements is unmatched.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                company: "Innovation Partners",
                role: "Legal Director",
                content:
                  "Their comprehensive approach to business advisory and compliance made our market entry smooth and legally sound. Highly recommended.",
                rating: 5,
              },
              {
                name: "David Wilson",
                company: "Enterprise Solutions",
                role: "Managing Director",
                content:
                  "From initial setup to ongoing compliance, ComplianceCore has been our trusted partner for over 5 years in the Indian market.",
                rating: 5,
              },
              {
                name: "Anjali Patel",
                company: "StartUp Hub",
                role: "Founder",
                content:
                  "Excellent support throughout our funding process. Their expertise in Indian regulations made complex requirements manageable.",
                rating: 5,
              },
              {
                name: "Robert Taylor",
                company: "Manufacturing Corp",
                role: "VP Operations",
                content:
                  "Their administrative skills and attention to detail ensure we stay compliant while focusing on our core business objectives.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out bg-white p-8 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl hover:border-blue-400 hover:scale-105 transform"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-blue-900 font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section ref={blogRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Latest Market Insights</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Stay updated with the latest Indian market trends, regulatory changes, and business opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Government approves E-Vehicle policy to promote India as a manufacturing destination for EVs",
                excerpt:
                  "Major policy update: Minimum Investment Rs 4150 Cr required, 3 years timeline for manufacturing setup, and 50% domestic value addition within 5 years.",
                date: "January 15, 2025",
                category: "Policy Updates",
              },
              {
                title: "FDI Policy Changes: Opportunities for Foreign Investors",
                excerpt:
                  "Comprehensive guide to recent FDI policy modifications and new opportunities for foreign businesses in India.",
                date: "March 10, 2024",
                category: "FDI & Investment",
              },
              {
                title: "Indian Market Entry: Strategic Planning Guide",
                excerpt:
                  "Essential strategies for successful market entry and business expansion in India's dynamic economy.",
                date: "March 5, 2024",
                category: "Market Entry",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out bg-white rounded-2xl shadow-lg border border-blue-200 hover:border-blue-400 hover:shadow-xl group overflow-hidden hover:scale-105 transform"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 text-sm">{post.date}</span>
                    <span className="text-blue-300">•</span>
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-blue-700 leading-relaxed mb-6">{post.excerpt}</p>
                  <Link
                    href="/blog"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <Link
              href="/blog"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>View All Insights</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section with Google Maps */}
      <section ref={contactRef} className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Ready to Expand in India?</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Contact us today for expert advisory services and let us help you realize your business goals in India.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="animate-on-scroll opacity-0 translate-x-12 transition-all duration-1500 ease-out">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 hover:scale-105 transition-all duration-500 transform">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Phone</h3>
                    <p className="text-blue-700">9820113322</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:scale-105 transition-all duration-500 transform">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">WhatsApp</h3>
                    <p className="text-blue-700">+91 9820113322</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:scale-105 transition-all duration-500 transform">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Address</h3>
                    <p className="text-blue-700">
                      207, Anjani Complex,
                      <br />
                      Periera Hill Road Nr. Western Express Highway,
                      <br />
                      Andheri-East Mumbai - 400099
                    </p>
                  </div>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Contact via WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out delay-500">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-700">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-700">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Visit Our Office</h3>
              <div className="aspect-video rounded-lg overflow-hidden border border-blue-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0123456789!2d72.8530116!3d19.1152888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1dccbc5506b%3A0xee5e3519c9dd209c!2sHushai%20Consultants%20LLP!5e0!3m2!1sen!2sin!4v1635959729807!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Hushai Consultants LLP</span>
              </div>
              <p className="text-blue-200">
                Your trusted advisory partner for business expansion and compliance in India.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Formation & Incorporation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Corporate Law Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    SEBI Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    XBRL Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="hover:text-blue-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-blue-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="hover:text-blue-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-blue-200">
                <li>+91 9820113322</li>
                <li>support@hushai.co.in</li>
                <li>
                  207, Anjani Complex,
                  <br />
                  Periera Hill Road <br /> Nr. Western Express Highway,
                  <br />
                  Andheri-East Mumbai - 400099
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200">© 2025 Hushai Consultants LLP . All rights reserved.</p>
            <p className="text-blue-200 mt-4 md:mt-0">Your trusted partner for Indian market expansion.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 z-50 hover:scale-110 transform animate-bounce"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}

"use client"
import { useEffect, useState } from "react"
import { Shield, MessageCircle, Calendar, User, ArrowRight, Search, Tag, Clock, Menu, X } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const openWhatsApp = () => {
    const phoneNumber = "+919820113322"
    const message = encodeURIComponent("Hello! I would like to know more about your services.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const blogPosts = [
    {
      id: 1,
      slug: "ev-policy-india-manufacturing-destination",
      title: "Government approves E-Vehicle policy to promote India as a manufacturing destination for EVs",
      excerpt:
        "Major Takeaways: Minimum Investment Rs 4150 Cr required with no cap on maximum Investment. 3 years timeline for setting up manufacturing facilities in India, and start commercial production of EVs. 50% domestic value addition to be reached within 5 years at the maximum.",
      content:
        "The Union Government has sanctioned a scheme aimed at positioning India as a prime manufacturing hub of Electric Vehicles (EV), specifically targeting the production of e-vehicles (EVs) equipped with cutting-edge technology within the country. This policy is strategically crafted to entice investments from renowned global EV manufacturers like Tesla or other multinational EV manufactures to into Indian market...",
      date: "January 15, 2025",
      author: "Policy Team",
      category: "Policy Updates",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      slug: "fdi-policy-changes-businesses-need-to-know",
      title: "FDI Policy Changes: What Businesses Need to Know",
      excerpt:
        "Comprehensive guide to recent FDI policy modifications and their implications for foreign investments in India.",
      content: "The Government of India has announced several changes to the Foreign Direct Investment (FDI) policy...",
      date: "March 10, 2024",
      author: "Priya Sharma",
      category: "FDI & FEMA",
      readTime: "6 min read",
      featured: true,
    },
    {
      id: 3,
      slug: "corporate-restructuring-best-practices-guide",
      title: "Corporate Restructuring: Best Practices Guide",
      excerpt:
        "Essential strategies for successful mergers, acquisitions, and corporate restructuring processes in the current regulatory environment.",
      content: "Corporate restructuring has become increasingly complex with evolving regulatory requirements...",
      date: "March 5, 2024",
      author: "Amit Patel",
      category: "Corporate Law",
      readTime: "10 min read",
      featured: true,
    },
    {
      id: 4,
      slug: "xbrl-filing-requirements-complete-guide",
      title: "XBRL Filing Requirements: A Complete Guide",
      excerpt:
        "Everything you need to know about XBRL filing requirements for different types of companies and compliance deadlines.",
      date: "February 28, 2024",
      author: "Sneha Gupta",
      category: "XBRL Services",
      readTime: "7 min read",
    },
    {
      id: 5,
      slug: "private-equity-funding-regulatory-compliance-checklist",
      title: "Private Equity Funding: Regulatory Compliance Checklist",
      excerpt: "A comprehensive checklist for ensuring regulatory compliance during private equity funding rounds.",
      date: "February 25, 2024",
      author: "Vikram Singh",
      category: "Private Equity",
      readTime: "9 min read",
    },
    {
      id: 6,
      slug: "digital-signature-requirements-corporate-filings",
      title: "Digital Signature Requirements for Corporate Filings",
      excerpt:
        "Understanding the mandatory digital signature requirements for various corporate filings and compliance documents.",
      date: "February 20, 2024",
      author: "Meera Joshi",
      category: "Corporate Law",
      readTime: "5 min read",
    },
    {
      id: 7,
      slug: "rbi-guidelines-foreign-exchange-transactions",
      title: "RBI Guidelines for Foreign Exchange Transactions",
      excerpt: "Latest RBI guidelines affecting foreign exchange transactions and their impact on businesses.",
      date: "February 15, 2024",
      author: "Arjun Reddy",
      category: "FDI & FEMA",
      readTime: "8 min read",
    },
    {
      id: 8,
      slug: "company-incorporation-process-step-by-step-guide",
      title: "Company Incorporation Process: Step-by-Step Guide",
      excerpt:
        "A detailed walkthrough of the company incorporation process, required documents, and timeline expectations.",
      date: "February 10, 2024",
      author: "Kavya Nair",
      category: "Formation & Incorporation",
      readTime: "12 min read",
    },
    {
      id: 9,
      slug: "llp-vs-company-choosing-right-business-structure",
      title: "LLP vs Company: Choosing the Right Business Structure",
      excerpt:
        "Comparative analysis of Limited Liability Partnership and Company structures to help you make the right choice.",
      date: "February 5, 2024",
      author: "Rohit Agarwal",
      category: "Formation & Incorporation",
      readTime: "6 min read",
    },
    {
      id: 10,
      slug: "stock-exchange-compliance-listed-companies",
      title: "Stock Exchange Compliance for Listed Companies",
      excerpt: "Essential compliance requirements for companies listed on Indian stock exchanges and best practices.",
      date: "January 30, 2024",
      author: "Deepika Rao",
      category: "SEBI Compliance",
      readTime: "9 min read",
    },
    {
      id: 11,
      slug: "trust-registration-legal-requirements-process",
      title: "Trust Registration: Legal Requirements and Process",
      excerpt:
        "Complete guide to trust registration, including legal requirements, documentation, and regulatory compliance.",
      date: "January 25, 2024",
      author: "Suresh Kumar",
      category: "Formation & Incorporation",
      readTime: "7 min read",
    },
    {
      id: 12,
      slug: "merger-acquisition-compliance-framework",
      title: "Merger and Acquisition Compliance Framework",
      excerpt:
        "Understanding the regulatory framework for mergers and acquisitions in India and compliance requirements.",
      date: "January 20, 2024",
      author: "Anita Desai",
      category: "Corporate Law",
      readTime: "11 min read",
    },
    {
      id: 13,
      slug: "depositories-act-compliance-key-requirements",
      title: "Depositories Act Compliance: Key Requirements",
      excerpt:
        "Essential compliance requirements under the Depositories Act and their implications for market participants.",
      date: "January 15, 2024",
      author: "Manoj Tiwari",
      category: "SEBI Compliance",
      readTime: "8 min read",
    },
    {
      id: 14,
      slug: "partnership-firm-formation-legal-tax-implications",
      title: "Partnership Firm Formation: Legal and Tax Implications",
      excerpt: "Comprehensive guide to partnership firm formation, including legal requirements and tax implications.",
      date: "January 10, 2024",
      author: "Ravi Krishnan",
      category: "Formation & Incorporation",
      readTime: "6 min read",
    },
    {
      id: 15,
      slug: "foreign-branch-office-setup-india",
      title: "Foreign Branch Office Setup in India",
      excerpt: "Step-by-step guide to setting up foreign branch offices in India and compliance requirements.",
      date: "January 5, 2024",
      author: "Sanjay Mehta",
      category: "FDI & FEMA",
      readTime: "10 min read",
    },
    {
      id: 16,
      slug: "corporate-governance-best-practices-2024",
      title: "Corporate Governance Best Practices 2024",
      excerpt:
        "Latest corporate governance best practices and their implementation for better compliance and transparency.",
      date: "December 30, 2023",
      author: "Pooja Bansal",
      category: "Corporate Law",
      readTime: "9 min read",
    },
    {
      id: 17,
      slug: "investor-protection-guidelines-recent-updates",
      title: "Investor Protection Guidelines: Recent Updates",
      excerpt:
        "Recent updates to investor protection guidelines and their impact on market participants and compliance requirements.",
      date: "December 25, 2023",
      author: "Rahul Gupta",
      category: "SEBI Compliance",
      readTime: "7 min read",
    },
    {
      id: 18,
      slug: "society-registration-complete-legal-framework",
      title: "Society Registration: Complete Legal Framework",
      excerpt:
        "Understanding the legal framework for society registration, including documentation and compliance requirements.",
      date: "December 20, 2023",
      author: "Nisha Agarwal",
      category: "Formation & Incorporation",
      readTime: "8 min read",
    },
    {
      id: 19,
      slug: "fipb-approval-process-what-you-need-to-know",
      title: "FIPB Approval Process: What You Need to Know",
      excerpt:
        "Detailed guide to the Foreign Investment Promotion Board approval process for non-automatic route investments.",
      date: "December 15, 2023",
      author: "Kiran Jain",
      category: "FDI & FEMA",
      readTime: "9 min read",
    },
    {
      id: 20,
      slug: "capital-increase-procedures-companies",
      title: "Capital Increase Procedures for Companies",
      excerpt:
        "Step-by-step procedures for increasing company capital, including regulatory approvals and documentation.",
      date: "December 10, 2023",
      author: "Ashok Sharma",
      category: "Corporate Law",
      readTime: "6 min read",
    },
    {
      id: 21,
      slug: "takeover-regulations-compliance-essentials",
      title: "Takeover Regulations: Compliance Essentials",
      excerpt:
        "Essential compliance requirements under securities takeover regulations and best practices for acquirers.",
      date: "December 5, 2023",
      author: "Sunita Yadav",
      category: "SEBI Compliance",
      readTime: "10 min read",
    },
    {
      id: 22,
      slug: "winding-up-procedures-legal-practical-aspects",
      title: "Winding Up Procedures: Legal and Practical Aspects",
      excerpt:
        "Comprehensive guide to company winding up procedures, including legal requirements and practical considerations.",
      date: "November 30, 2023",
      author: "Vinod Kumar",
      category: "Corporate Law",
      readTime: "11 min read",
    },
    {
      id: 23,
      slug: "nominee-services-foreign-entities",
      title: "Nominee Services for Foreign Entities",
      excerpt:
        "Understanding nominee services for foreign branch and liaison offices in India and compliance requirements.",
      date: "November 25, 2023",
      author: "Geeta Pillai",
      category: "FDI & FEMA",
      readTime: "7 min read",
    },
    {
      id: 24,
      slug: "director-identification-number-din-complete-guide",
      title: "Director Identification Number (DIN): Complete Guide",
      excerpt:
        "Everything you need to know about obtaining and maintaining Director Identification Numbers for corporate compliance.",
      date: "November 20, 2023",
      author: "Rajiv Malhotra",
      category: "Corporate Law",
      readTime: "5 min read",
    },
    {
      id: 25,
      slug: "listed-company-suspension-revocation-process",
      title: "Listed Company Suspension Revocation Process",
      excerpt: "Detailed process for revocation of suspension for listed companies and regulatory requirements.",
      date: "November 15, 2023",
      author: "Madhuri Singh",
      category: "SEBI Compliance",
      readTime: "8 min read",
    },
    {
      id: 26,
      slug: "corporate-secretarial-services-best-practices",
      title: "Corporate Secretarial Services: Best Practices",
      excerpt:
        "Best practices for corporate secretarial services and maintaining compliance with regulatory requirements.",
      date: "November 10, 2023",
      author: "Arun Khanna",
      category: "Corporate Law",
      readTime: "9 min read",
    },
    {
      id: 27,
      slug: "foreign-exchange-management-key-compliance-areas",
      title: "Foreign Exchange Management: Key Compliance Areas",
      excerpt: "Key compliance areas under Foreign Exchange Management Act and practical implementation strategies.",
      date: "November 5, 2023",
      author: "Shweta Pandey",
      category: "FDI & FEMA",
      readTime: "8 min read",
    },
    {
      id: 28,
      slug: "share-transfer-procedures-documentation",
      title: "Share Transfer Procedures and Documentation",
      excerpt: "Complete guide to share transfer procedures, required documentation, and regulatory compliance.",
      date: "October 30, 2023",
      author: "Naveen Choudhary",
      category: "Corporate Law",
      readTime: "6 min read",
    },
    {
      id: 29,
      slug: "xbrl-taxonomy-updates-implementation",
      title: "XBRL Taxonomy Updates and Implementation",
      excerpt: "Latest XBRL taxonomy updates and their implementation for different types of corporate entities.",
      date: "October 25, 2023",
      author: "Rekha Iyer",
      category: "XBRL Services",
      readTime: "7 min read",
    },
    {
      id: 30,
      slug: "statutory-governance-private-equity-investments",
      title: "Statutory Governance for Private Equity Investments",
      excerpt:
        "Statutory and regulatory governance requirements for private equity investments and portfolio companies.",
      date: "October 20, 2023",
      author: "Sunil Verma",
      category: "Private Equity",
      readTime: "10 min read",
    },
  ]

  const categories = [
    "All",
    "SEBI Compliance",
    "FDI & FEMA",
    "Corporate Law",
    "Formation & Incorporation",
    "XBRL Services",
    "Private Equity",
    "Policy Updates",
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Hushai Consultants LLP</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105"
              >
                Services
              </Link>
              <Link href="/blog" className="text-blue-600 font-semibold">
                Blog
              </Link>
              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="px-4 py-4 space-y-3">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="block text-blue-600 font-semibold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <button
                  onClick={() => {
                    openWhatsApp()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm mt-4"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Compliance <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay informed with the latest regulatory updates, compliance best practices, and industry insights
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:scale-105"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">Our most popular and impactful compliance insights</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl group overflow-hidden"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    </div>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out bg-white rounded-xl shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl group overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center space-x-1 transition-all duration-300 hover:scale-105"
                    >
                      <span>Read</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl p-12 max-w-md mx-auto shadow-lg border border-gray-200">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter</p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest compliance insights and regulatory updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 text-gray-900 transition-all duration-300"
              />
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105">
                Subscribe
              </button>
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
              <span className="text-xl font-bold">Hushai Consultants LLP</span>
            </Link>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Hushai Consultants LLP. All rights reserved.</p>
              <p className="mt-2">Your trusted partner in corporate compliance.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}

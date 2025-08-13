"use client"
import { useEffect } from "react"
import { Shield, MessageCircle, Calendar, User, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"

export default function EVPolicyPage() {
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
    const message = encodeURIComponent(
      "Hello! I would like to know more about the E-Vehicle policy and its implications for my business.",
    )
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
              <span className="text-xl font-bold text-gray-900">Hushai Consultants LLP</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="/blog" className="text-blue-600 font-semibold">
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

      {/* Article Content */}
      <article className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blog</span>
              </Link>

              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Policy Updates
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 text-sm">8 min read</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Government approves E-Vehicle policy to promote India as a manufacturing destination for EVs
              </h1>

              <div className="flex items-center space-x-6 text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Policy Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 15, 2025</span>
                </div>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out prose prose-lg max-w-none">
            {/* Major Takeaways Box */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Major Takeaways:</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Minimum Investment Rs 4150 Cr required with no cap on maximum Investment.</li>
                <li>
                  • 3 years timeline for setting up manufacturing facilities in India, and start commercial production
                  of EVs.
                </li>
                <li>• 50% domestic value addition to be reached within 5 years at the maximum.</li>
                <li>
                  • Companies setting up manufacturing facilities for EVs to be allowed limited imports of cars at lower
                  custom duty.
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Union Government has sanctioned a scheme aimed at positioning India as a prime manufacturing hub of
              Electric Vehicles (EV), specifically targeting the production of e-vehicles (EVs) equipped with
              cutting-edge technology within the country. This policy is strategically crafted to entice investments
              from renowned global EV manufacturers like Tesla or other multinational EV manufactures to into Indian
              market.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Such an initiative promises to grant Indian consumers access to state-of-the-art technology, thereby
              bolstering the Make in India campaign. Furthermore, it seeks to fortify the EV ecosystem by fostering
              healthy competition among industry players, consequently driving up production volumes and achieving
              economies of scale. This, in turn, is anticipated to lower production costs, diminish reliance on imported
              crude oil, mitigate trade deficits, and curtail air pollution levels, particularly in urban areas, thus
              yielding favorable outcomes for public health and the environment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Key Policy Provisions</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Requirements</h3>
              <p className="text-gray-700 mb-4">
                <strong>Minimum Investment required:</strong> Rs 4150 Cr (∼USD 500 Million) without any upper investment
                limit.
              </p>
              <p className="text-gray-700">
                <strong>Timeline for manufacturing:</strong> 3 years for setting up manufacturing facilities in India,
                and to start commercial production of e-vehicles, and reach 50% domestic value addition (DVA) within 5
                years at the maximum.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Domestic Value Addition (DVA) during manufacturing:
            </h3>
            <p className="text-gray-700 mb-6">
              A localization level of 25% by the 3rd year and 50% by the 5th year will have to be achieved.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Other Relaxations & Conditions under the Policy
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Customs Duty Benefits</h4>
                <p className="text-gray-700">
                  The customs duty of 15% (as applicable to CKD units) would be applicable on vehicle of minimum CIF
                  value of USD 35,000 and above for a total period of 5 years subject to the manufacturer setting up
                  manufacturing facilities in India within a 3-year period.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Investment Limits</h4>
                <p className="text-gray-700">
                  The duty foregone on the total number of EV allowed for import would be limited to the investment made
                  or ₹6484 Cr (equal to incentive under PLI scheme) whichever is lower. A maximum of 40,000 EVs at the
                  rate of not more than 8,000 per year would be permissible if the investment is of USD 800 Mn or more.
                  The carryover of unutilized annual import limits would be permitted.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Bank Guarantee Requirements</h4>
                <p className="text-gray-700">
                  The Investment commitment made by the company will have to be backed up by a bank guarantee in lieu of
                  the custom duty forgone. The Bank guarantee will be invoked in case of non-achievement of DVA and
                  minimum investment criteria defined under the scheme guidelines.
                </p>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-2xl mt-12 mb-8">
              <h3 className="text-2xl font-bold mb-4">Need Help with EV Policy Compliance?</h3>
              <p className="text-blue-100 mb-6">
                Our experts can help you navigate the complexities of the new E-Vehicle policy and ensure your business
                takes full advantage of these opportunities.
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-50 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Get Expert Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <p className="text-xl text-gray-600">More insights on policy updates and business opportunities</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "FDI Policy Changes: Opportunities for Foreign Investors",
                  excerpt:
                    "Comprehensive guide to recent FDI policy modifications and new opportunities for foreign businesses in India.",
                  date: "March 10, 2024",
                  category: "FDI & Investment",
                },
                {
                  title: "New SEBI Regulations for Listed Companies 2024",
                  excerpt:
                    "Understanding the latest SEBI guidelines and their impact on listed companies' compliance requirements in India.",
                  date: "March 15, 2024",
                  category: "SEBI Compliance",
                },
                {
                  title: "Indian Market Entry: Strategic Planning Guide",
                  excerpt:
                    "Essential strategies for successful market entry and business expansion in India's dynamic economy.",
                  date: "March 5, 2024",
                  category: "Market Entry",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-600 text-xs">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
                    <Link
                      href="/blog"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

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
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}

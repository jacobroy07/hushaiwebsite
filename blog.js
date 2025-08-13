// Blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "ev-policy-india-manufacturing-destination",
    title: "Government approves E-Vehicle policy to promote India as a manufacturing destination for EVs",
    excerpt:
      "Major Takeaways: Minimum Investment Rs 4150 Cr required with no cap on maximum Investment. 3 years timeline for setting up manufacturing facilities in India, and start commercial production of EVs. 50% domestic value addition to be reached within 5 years at the maximum.",
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
    excerpt: "Statutory and regulatory governance requirements for private equity investments and portfolio companies.",
    date: "October 20, 2023",
    author: "Sunil Verma",
    category: "Private Equity",
    readTime: "10 min read",
  },
]

// Initialize blog functionality
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("blog.html")) {
    initBlogPage()
  }
})

function initBlogPage() {
  let currentCategory = "All"
  let currentSearchTerm = ""

  // Declare variables before using them
  const lucide = window.lucide // Assuming lucide is available globally
  const initScrollAnimations = window.initScrollAnimations // Assuming initScrollAnimations is available globally

  // Render initial posts
  renderFeaturedPosts()
  renderAllPosts()

  // Search functionality
  const searchInput = document.getElementById("search-input")
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value.toLowerCase()
      filterAndRenderPosts()
    })
  }

  // Category filter functionality
  const categoryButtons = document.querySelectorAll(".category-btn")
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      categoryButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-blue-600", "text-white", "shadow-lg", "scale-105")
        btn.classList.add("bg-white", "text-gray-700", "border", "border-gray-200")
      })

      // Add active class to clicked button
      this.classList.add("active", "bg-blue-600", "text-white", "shadow-lg", "scale-105")
      this.classList.remove("bg-white", "text-gray-700", "border", "border-gray-200")

      currentCategory = this.dataset.category
      filterAndRenderPosts()
    })
  })

  // Clear filters functionality
  const clearFiltersBtn = document.getElementById("clear-filters")
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      currentCategory = "All"
      currentSearchTerm = ""

      // Reset search input
      if (searchInput) {
        searchInput.value = ""
      }

      // Reset category buttons
      categoryButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-blue-600", "text-white", "shadow-lg", "scale-105")
        btn.classList.add("bg-white", "text-gray-700", "border", "border-gray-200")
      })

      // Activate "All" button
      const allButton = document.querySelector('[data-category="All"]')
      if (allButton) {
        allButton.classList.add("active", "bg-blue-600", "text-white", "shadow-lg", "scale-105")
        allButton.classList.remove("bg-white", "text-gray-700", "border", "border-gray-200")
      }

      filterAndRenderPosts()
    })
  }

  function filterAndRenderPosts() {
    renderAllPosts()
  }

  function renderFeaturedPosts() {
    const featuredContainer = document.getElementById("featured-posts")
    if (!featuredContainer) return

    const featuredPosts = blogPosts.filter((post) => post.featured)

    featuredContainer.innerHTML = featuredPosts
      .map(
        (post, index) => `
            <div class="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl group overflow-hidden" style="transition-delay: ${index * 200}ms;">
                <div class="p-8">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-2">
                            <i data-lucide="tag" class="h-4 w-4 text-blue-600"></i>
                            <span class="text-blue-600 text-sm font-medium">${post.category}</span>
                        </div>
                        <span class="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">${post.title}</h3>
                    <p class="text-gray-600 leading-relaxed mb-6 line-clamp-3">${post.excerpt}</p>
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div class="flex items-center space-x-4">
                            <div class="flex items-center space-x-2">
                                <i data-lucide="user" class="h-4 w-4"></i>
                                <span>${post.author}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i data-lucide="calendar" class="h-4 w-4"></i>
                                <span>${post.date}</span>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i data-lucide="clock" class="h-4 w-4"></i>
                            <span>${post.readTime}</span>
                        </div>
                    </div>
                    <button onclick="openWhatsApp()" class="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105">
                        <span>Read Article</span>
                        <i data-lucide="arrow-right" class="h-4 w-4"></i>
                    </button>
                </div>
            </div>
        `,
      )
      .join("")

    // Reinitialize icons
    if (lucide) {
      lucide.createIcons()
    }
  }

  function renderAllPosts() {
    const allPostsContainer = document.getElementById("all-posts")
    const resultsCount = document.getElementById("results-count")
    const noResults = document.getElementById("no-results")

    if (!allPostsContainer) return

    // Filter posts
    const filteredPosts = blogPosts.filter((post) => {
      const matchesSearch =
        currentSearchTerm === "" ||
        post.title.toLowerCase().includes(currentSearchTerm) ||
        post.excerpt.toLowerCase().includes(currentSearchTerm)
      const matchesCategory = currentCategory === "All" || post.category === currentCategory
      return matchesSearch && matchesCategory
    })

    // Update results count
    if (resultsCount) {
      const searchText = currentSearchTerm ? ` matching "${currentSearchTerm}"` : ""
      const categoryText = currentCategory !== "All" ? ` in ${currentCategory}` : ""
      resultsCount.textContent = `${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""} found${categoryText}${searchText}`
    }

    // Show/hide no results message
    if (filteredPosts.length === 0) {
      allPostsContainer.innerHTML = ""
      if (noResults) {
        noResults.classList.remove("hidden")
      }
      return
    } else {
      if (noResults) {
        noResults.classList.add("hidden")
      }
    }

    // Render posts
    allPostsContainer.innerHTML = filteredPosts
      .map(
        (post, index) => `
            <div class="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1500 ease-out bg-white rounded-xl shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl group overflow-hidden" style="transition-delay: ${index * 100}ms;">
                <div class="p-6">
                    <div class="flex items-center space-x-2 mb-4">
                        <i data-lucide="tag" class="h-4 w-4 text-blue-600"></i>
                        <span class="text-blue-600 text-sm font-medium">${post.category}</span>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">${post.title}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">${post.excerpt}</p>
                    <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div class="flex items-center space-x-2">
                            <i data-lucide="user" class="h-3 w-3"></i>
                            <span>${post.author}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i data-lucide="calendar" class="h-3 w-3"></i>
                            <span>${post.date}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2 text-xs text-gray-500">
                            <i data-lucide="clock" class="h-3 w-3"></i>
                            <span>${post.readTime}</span>
                        </div>
                        <button onclick="openWhatsApp()" class="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center space-x-1 transition-all duration-300 hover:scale-105">
                            <span>Read</span>
                            <i data-lucide="arrow-right" class="h-3 w-3"></i>
                        </button>
                    </div>
                </div>
            </div>
        `,
      )
      .join("")

    // Reinitialize icons and scroll animations
    if (lucide) {
      lucide.createIcons()
    }
    if (initScrollAnimations) {
      initScrollAnimations()
    }
  }
}

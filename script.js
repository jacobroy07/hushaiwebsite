// Global variables
let showMobileMenu = false

// Scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    smoothScrollTo(element)
  }
  closeMobileMenu()
}

// Enhanced WhatsApp integration
function openWhatsApp() {
  const phoneNumber = "+919820113322"
  const message = encodeURIComponent("Hello! I would like to know more about your business advisory services.")
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
}

// Mobile menu functions with enhanced animations
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  const menuIcon = document.querySelector('[data-lucide="menu"]')
  const closeIcon = document.querySelector('[data-lucide="x"]')

  showMobileMenu = !showMobileMenu

  if (showMobileMenu) {
    mobileMenu.style.maxHeight = "400px"
    mobileMenu.style.opacity = "1"
    mobileMenu.classList.remove("hidden")

    // Change icon to X
    if (menuIcon) {
      menuIcon.setAttribute("data-lucide", "x")
      if (window.lucide) {
        window.lucide.createIcons()
      }
    }
  } else {
    mobileMenu.style.maxHeight = "0"
    mobileMenu.style.opacity = "0"

    // Change icon back to menu
    if (menuIcon) {
      menuIcon.setAttribute("data-lucide", "menu")
      if (window.lucide) {
        window.lucide.createIcons()
      }
    }

    setTimeout(() => {
      mobileMenu.classList.add("hidden")
    }, 300)
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  const menuIcon = document.querySelector('[data-lucide="x"]')

  showMobileMenu = false
  mobileMenu.style.maxHeight = "0"
  mobileMenu.style.opacity = "0"

  // Change icon back to menu
  if (menuIcon) {
    menuIcon.setAttribute("data-lucide", "menu")
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }

  setTimeout(() => {
    mobileMenu.classList.add("hidden")
  }, 300)
}

// Enhanced contact form handling
function handleContactForm(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  // Validate required fields
  if (!name || !email || !message) {
    alert("Please fill in all required fields.")
    return
  }

  // Create WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hello! I'm ${name}.\n\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage: ${message}\n\nSent from Hushai Consultants website contact form.`,
  )

  // Open WhatsApp with the message
  const phoneNumber = "+919820113322"
  window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank")

  // Reset form
  event.target.reset()

  // Show success message
  alert("Thank you for your message! You will be redirected to WhatsApp to send your inquiry.")
}

// Enhanced scroll animations
function initScrollAnimations() {
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
}

// Smooth scroll polyfill for older browsers
function smoothScrollTo(element) {
  const targetPosition = element.offsetTop - 80
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = 1000
  let start = null

  function animation(currentTime) {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize scroll animations
  initScrollAnimations()

  // Add contact form event listener
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm)
  }

  // Initialize Lucide icons if available
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons()
  }

  // Add click outside to close mobile menu
  document.addEventListener("click", (event) => {
    const nav = document.querySelector("nav")
    const mobileMenuBtn = document.querySelector("button[onclick='toggleMobileMenu()']")

    if (showMobileMenu && !nav.contains(event.target) && event.target !== mobileMenuBtn) {
      closeMobileMenu()
    }
  })

  // Enhanced floating button animation
  const floatingBtn = document.querySelector(".fixed.bottom-6.right-6")
  if (floatingBtn) {
    floatingBtn.classList.add("floating-button")
  }
})

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu()
  }
})

// Add loading state management
function showLoading(element) {
  element.classList.add("loading")
  element.disabled = true
}

function hideLoading(element) {
  element.classList.remove("loading")
  element.disabled = false
}

// Export functions for global access
window.scrollToSection = scrollToSection
window.openWhatsApp = openWhatsApp
window.toggleMobileMenu = toggleMobileMenu
window.closeMobileMenu = closeMobileMenu
window.handleContactForm = handleContactForm
window.initScrollAnimations = initScrollAnimations

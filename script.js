// Global variables
let showMobileMenu = false
let lucide // Declare the lucide variable

// Scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
  closeMobileMenu()
}

// WhatsApp integration
function openWhatsApp() {
  const phoneNumber = "+919820113322"
  const message = encodeURIComponent("Hello! I would like to know more about your business advisory services.")
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
}

// Mobile menu functions
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  showMobileMenu = !showMobileMenu

  if (showMobileMenu) {
    mobileMenu.style.maxHeight = "400px"
    mobileMenu.style.opacity = "1"
  } else {
    mobileMenu.style.maxHeight = "0"
    mobileMenu.style.opacity = "0"
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  showMobileMenu = false
  mobileMenu.style.maxHeight = "0"
  mobileMenu.style.opacity = "0"
}

// Contact form handling
function handleContactForm(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  // Create WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hello! I'm ${name}.\n\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage: ${message}`,
  )

  // Open WhatsApp with the message
  const phoneNumber = "+919820113322"
  window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank")

  // Reset form
  event.target.reset()

  // Show success message
  alert("Thank you for your message! You will be redirected to WhatsApp to send your inquiry.")
}

// Scroll animations
function initScrollAnimations() {
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
})

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu()
  }
})

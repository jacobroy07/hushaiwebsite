"use client"

import { Shield, Menu, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function LayoutPreview() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Layout Structure Visualization */}
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Website Layout Structure</h1>

        {/* Navigation Layout */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📱 Navigation Bar (Fixed)</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="font-bold text-gray-900">ComplianceCore</span>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <span className="text-gray-700">Home</span>
                <span className="text-gray-700">Services</span>
                <span className="text-gray-700">About</span>
                <span className="text-gray-700">Blog</span>
                <span className="text-gray-700">Contact</span>
                <div className="bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center space-x-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>WhatsApp</span>
                </div>
              </div>
              <button className="md:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Page Layout */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🏠 Main Page Layout</h2>
          <div className="space-y-4">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">1. Hero Section</h3>
              <div className="grid lg:grid-cols-2 gap-4 text-sm text-blue-800">
                <div>
                  <p>• Large headline with company tagline</p>
                  <p>• Descriptive paragraph</p>
                  <p>• CTA buttons (Services, WhatsApp)</p>
                </div>
                <div>
                  <p>• Feature showcase cards</p>
                  <p>• Visual elements with icons</p>
                  <p>• Animated entrance effects</p>
                </div>
              </div>
            </div>

            {/* Services Preview */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">2. Services Preview</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div className="bg-white p-3 rounded border">Formation & Incorporation</div>
                <div className="bg-white p-3 rounded border">Corporate Law Compliance</div>
                <div className="bg-white p-3 rounded border">Economic Laws & FDI</div>
                <div className="bg-white p-3 rounded border">SEBI Compliance</div>
                <div className="bg-white p-3 rounded border">Private Equity Funding</div>
                <div className="bg-white p-3 rounded border">XBRL Services</div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">3. About Section</h3>
              <div className="grid lg:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="bg-blue-600 text-white p-4 rounded">
                  <p>Why Choose ComplianceCore?</p>
                  <p>• 15+ years experience</p>
                  <p>• 500+ implementations</p>
                  <p>• 24/7 support</p>
                </div>
                <div>
                  <p>Company description and value proposition</p>
                  <p>Detailed explanation of services and expertise</p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">4. Testimonials Section</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded border">
                  <div className="flex text-yellow-400 mb-2">★★★★★</div>
                  <p className="text-gray-600">"Excellent service..."</p>
                  <p className="text-gray-800 font-medium mt-2">- Sarah Johnson, CEO</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="flex text-yellow-400 mb-2">★★★★★</div>
                  <p className="text-gray-600">"Outstanding support..."</p>
                  <p className="text-gray-800 font-medium mt-2">- Michael Chen, CFO</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="flex text-yellow-400 mb-2">★★★★★</div>
                  <p className="text-gray-600">"Highly professional..."</p>
                  <p className="text-gray-800 font-medium mt-2">- Priya Sharma, Legal Director</p>
                </div>
              </div>
            </div>

            {/* Blog Preview */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">5. Latest Insights (Blog Preview)</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="border border-gray-200 p-3 rounded">
                  <p className="text-blue-600 text-xs mb-1">SEBI Compliance</p>
                  <p className="font-medium text-gray-900">New SEBI Regulations 2024</p>
                  <p className="text-gray-600 text-xs mt-1">March 15, 2024</p>
                </div>
                <div className="border border-gray-200 p-3 rounded">
                  <p className="text-blue-600 text-xs mb-1">FDI & FEMA</p>
                  <p className="font-medium text-gray-900">FDI Policy Changes</p>
                  <p className="text-gray-600 text-xs mt-1">March 10, 2024</p>
                </div>
                <div className="border border-gray-200 p-3 rounded">
                  <p className="text-blue-600 text-xs mb-1">Corporate Law</p>
                  <p className="font-medium text-gray-900">Corporate Restructuring Guide</p>
                  <p className="text-gray-600 text-xs mt-1">March 5, 2024</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">6. Contact Section</h3>
              <div className="grid lg:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-green-600" />
                    <span>info@compliancecore.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-purple-600" />
                    <span>123 Business District, NY</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium mb-2">Contact Form</p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="bg-gray-100 p-2 rounded">Name Field</div>
                    <div className="bg-gray-100 p-2 rounded">Email Field</div>
                    <div className="bg-gray-100 p-2 rounded">Company Field</div>
                    <div className="bg-gray-100 p-2 rounded">Message Field</div>
                    <div className="bg-blue-600 text-white p-2 rounded text-center">Send Message</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white p-3 rounded border">
                <p className="text-center text-gray-600 text-sm">🗺️ Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Page Layout */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🔧 Services Page Layout</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="space-y-3 text-sm text-blue-800">
              <p>
                <strong>1. Hero Section:</strong> Services overview with gradient background
              </p>
              <p>
                <strong>2. Formation/Incorporation:</strong> Company, LLP, Trust, Society formation services
              </p>
              <p>
                <strong>3. Corporate Law Compliance:</strong> Secretarial services, restructuring, M&A
              </p>
              <p>
                <strong>4. Economic Laws/FDI/FEMA:</strong> Foreign investment compliance services
              </p>
              <p>
                <strong>5. SEBI Compliance:</strong> Securities law and stock exchange compliance
              </p>
              <p>
                <strong>6. Private Equity Funding:</strong> PE funding and governance services
              </p>
              <p>
                <strong>7. XBRL Services:</strong> XBRL conversion and filing for different company types
              </p>
              <p>
                <strong>8. CTA Section:</strong> Call-to-action with consultation offer
              </p>
            </div>
          </div>
        </div>

        {/* Blog Page Layout */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📝 Blog Page Layout</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="space-y-3 text-sm text-green-800">
              <p>
                <strong>1. Hero Section:</strong> "Compliance Insights" with search introduction
              </p>
              <p>
                <strong>2. Search & Filter Bar:</strong> Search input + category filter buttons
              </p>
              <p>
                <strong>3. Featured Articles:</strong> 3 highlighted blog posts with full details
              </p>
              <p>
                <strong>4. All Articles Grid:</strong> 30+ blog posts in searchable/filterable grid
              </p>
              <p>
                <strong>5. Newsletter Signup:</strong> Email subscription with gradient background
              </p>
              <p>
                <strong>Categories:</strong> SEBI Compliance, FDI & FEMA, Corporate Law, Formation & Incorporation, XBRL
                Services, Private Equity
              </p>
            </div>
          </div>
        </div>

        {/* Footer Layout */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🦶 Footer Layout</h2>
          <div className="bg-gray-900 text-white rounded-lg p-6">
            <div className="grid md:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <span className="font-bold">ComplianceCore</span>
                </div>
                <p className="text-gray-400">Your trusted partner in corporate compliance</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <div className="space-y-1 text-gray-400">
                  <p>Formation & Incorporation</p>
                  <p>Corporate Law Compliance</p>
                  <p>SEBI Compliance</p>
                  <p>XBRL Services</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <div className="space-y-1 text-gray-400">
                  <p>About Us</p>
                  <p>Blog</p>
                  <p>Contact</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Contact Info</h4>
                <div className="space-y-1 text-gray-400">
                  <p>+1 (555) 123-4567</p>
                  <p>info@compliancecore.com</p>
                  <p>123 Business District, NY</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400">
              <p>&copy; 2024 ComplianceCore. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🎈 Floating Elements</h2>
          <div className="bg-green-100 border border-green-200 rounded-lg p-4">
            <div className="flex justify-end">
              <div className="bg-green-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                <MessageCircle className="h-5 w-5" />
              </div>
            </div>
            <p className="text-green-800 text-sm mt-2">Fixed WhatsApp button (bottom-right corner)</p>
          </div>
        </div>

        {/* Responsive Behavior */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📱 Responsive Design</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Mobile (less than 768px)</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Hamburger menu</li>
                <li>• Single column layout</li>
                <li>• Stacked hero content</li>
                <li>• Compressed spacing</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Tablet (768px to 1024px)</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• 2-column grids</li>
                <li>• Visible navigation</li>
                <li>• Medium spacing</li>
                <li>• Responsive images</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-2">Desktop (greater than 1024px)</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• 3-column grids</li>
                <li>• Full navigation bar</li>
                <li>• Optimal spacing</li>
                <li>• Enhanced animations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Color Scheme */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🎨 Color Scheme</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <div className="w-full h-12 bg-white border border-gray-200 rounded mb-2"></div>
              <p className="text-sm font-medium">White</p>
              <p className="text-xs text-gray-600">Primary Background</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 text-center">
              <div className="w-full h-12 bg-gray-50 border border-gray-200 rounded mb-2"></div>
              <p className="text-sm font-medium">Light Grey</p>
              <p className="text-xs text-gray-600">Secondary Background</p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 text-center">
              <div className="w-full h-12 bg-blue-600 rounded mb-2"></div>
              <p className="text-sm font-medium">Dark Blue</p>
              <p className="text-xs text-gray-600">Primary Accent</p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center">
              <div className="w-full h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-2"></div>
              <p className="text-sm font-medium">Light Blue</p>
              <p className="text-xs text-gray-600">Gradients & Highlights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

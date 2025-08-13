"use client"

import HushaiLogo from "./hushai-logo"

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hushai Consultants LLP</h1>
          <p className="text-xl text-gray-600">Professional Logo Design Showcase</p>
        </div>

        {/* Main Logo Display */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Primary Logo</h2>
          <div className="flex justify-center">
            <HushaiLogo size="xl" />
          </div>
        </div>

        {/* Logo Variations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Full Logo - Large */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Large Size</h3>
            <div className="flex justify-center">
              <HushaiLogo size="lg" />
            </div>
          </div>

          {/* Full Logo - Medium */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Medium Size</h3>
            <div className="flex justify-center">
              <HushaiLogo size="md" />
            </div>
          </div>

          {/* Full Logo - Small */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Small Size</h3>
            <div className="flex justify-center">
              <HushaiLogo size="sm" />
            </div>
          </div>

          {/* Icon Only */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Icon Only</h3>
            <div className="flex justify-center">
              <HushaiLogo size="lg" variant="icon" />
            </div>
          </div>

          {/* Text Only */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Text Only</h3>
            <div className="flex justify-center">
              <HushaiLogo size="lg" variant="text" />
            </div>
          </div>

          {/* Favicon Size */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Favicon Size</h3>
            <div className="flex justify-center items-center h-16">
              <HushaiLogo size="sm" variant="icon" />
            </div>
          </div>
        </div>

        {/* Dark Background Variations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-white mb-6">On Dark Background</h3>
            <div className="flex justify-center">
              <HushaiLogo size="lg" className="filter brightness-110" />
            </div>
          </div>

          <div className="bg-blue-900 rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-white mb-6">On Brand Background</h3>
            <div className="flex justify-center">
              <HushaiLogo size="lg" className="filter brightness-110" />
            </div>
          </div>
        </div>

        {/* Logo Usage Guidelines */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Logo Design Elements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Shield Symbol</h4>
              <p className="text-sm text-gray-600">Represents protection, trust, and security in business advisory</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Letter H</h4>
              <p className="text-sm text-gray-600">Stylized H for Hushai, integrated into the shield design</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Accent Dot</h4>
              <p className="text-sm text-gray-600">Golden accent representing excellence and premium service</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-800 mb-2">Blue Gradient</h4>
              <p className="text-sm text-gray-600">Professional blue tones conveying trust and expertise</p>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Brand Color Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-blue-600 w-full h-20 rounded-lg mb-3"></div>
              <h4 className="font-semibold text-gray-800">Primary Blue</h4>
              <p className="text-sm text-gray-600">#2563EB</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 w-full h-20 rounded-lg mb-3"></div>
              <h4 className="font-semibold text-gray-800">Dark Blue</h4>
              <p className="text-sm text-gray-600">#1E40AF</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-full h-20 rounded-lg mb-3"></div>
              <h4 className="font-semibold text-gray-800">Accent Gold</h4>
              <p className="text-sm text-gray-600">#FCD34D</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 w-full h-20 rounded-lg mb-3"></div>
              <h4 className="font-semibold text-gray-800">Text Dark</h4>
              <p className="text-sm text-gray-600">#111827</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Typography</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-blue-900 text-3xl">Hushai Consultants</h4>
              <p className="text-gray-600">Primary: Inter Bold - Clean, modern, professional</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-600 text-lg tracking-wider">LLP</h4>
              <p className="text-gray-600">Secondary: Inter Medium - Spaced for clarity</p>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Usage Examples</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Card */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Business Card</h4>
              <div className="bg-white p-4 rounded shadow-md">
                <HushaiLogo size="sm" />
                <div className="mt-4 text-sm">
                  <p className="font-semibold text-gray-800">John Doe</p>
                  <p className="text-gray-600">Senior Consultant</p>
                  <p className="text-gray-600 mt-2">john@hushaiconsultants.com</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Letterhead */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Letterhead</h4>
              <div className="bg-white p-4 rounded shadow-md">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <HushaiLogo size="sm" />
                  <div className="text-right text-xs text-gray-600">
                    <p>123 Business District</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>Dear Client,</p>
                  <p className="mt-2">Thank you for choosing Hushai Consultants LLP...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

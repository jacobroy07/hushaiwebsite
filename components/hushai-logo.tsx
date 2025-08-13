"use client"

interface HushaiLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "full" | "icon" | "text"
  className?: string
}

export default function HushaiLogo({ size = "md", variant = "full", className = "" }: HushaiLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
    xl: "h-16",
  }

  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
    xl: "h-12 w-12",
  }

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  }

  if (variant === "icon") {
    return (
      <div className={`relative ${className}`}>
        <div className="relative">
          {/* Main shield background */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-2 shadow-lg">
            <div className="relative">
              {/* Inner design */}
              <div className="bg-white/20 rounded-md p-1">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* H letter stylized */}
                    <div className="text-white font-bold text-lg leading-none">H</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "text") {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className={`font-bold text-blue-900 ${textSizes[size]} leading-tight`}>Hushai Consultants</span>
        <span className="text-blue-600 text-sm font-medium tracking-wide">LLP</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width={size === "sm" ? "32" : size === "md" ? "40" : size === "lg" ? "48" : "56"}
          height={size === "sm" ? "32" : size === "md" ? "40" : size === "lg" ? "48" : "56"}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Background shield */}
          <path
            d="M28 4L48 12V28C48 40 28 52 28 52C28 52 8 40 8 28V12L28 4Z"
            fill="url(#gradient1)"
            stroke="url(#gradient2)"
            strokeWidth="1"
          />

          {/* Inner design elements */}
          <path
            d="M28 10L42 16V28C42 36 28 44 28 44C28 44 14 36 14 28V16L28 10Z"
            fill="url(#gradient3)"
            opacity="0.9"
          />

          {/* H letter design */}
          <path
            d="M20 20V36M36 20V36M20 28H36"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Accent dot */}
          <circle cx="40" cy="18" r="3" fill="#FCD34D" />

          {/* Subtle pattern */}
          <path d="M24 24L32 24M24 32L32 32" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" />

          <defs>
            <linearGradient id="gradient1" x1="8" y1="4" x2="48" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="gradient2" x1="8" y1="4" x2="48" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="gradient3" x1="14" y1="10" x2="42" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" stopOpacity="0.3" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Company Name */}
      <div className="flex flex-col">
        <span className={`font-bold text-blue-900 ${textSizes[size]} leading-tight tracking-tight`}>
          Hushai Consultants
        </span>
        <span className="text-blue-600 text-sm font-medium tracking-wider">LLP</span>
      </div>
    </div>
  )
}

"use client"

import { useState, useTransition } from "react"
import { submitContactForm } from "@/app/actions/contact"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface ContactFormProps {
  isModal?: boolean
  onClose?: () => void
}

export default function ContactForm({ isModal = false, onClose }: ContactFormProps) {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const response = await submitContactForm(formData)
      setResult(response)

      if (response.success && isModal && onClose) {
        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose()
          setResult(null)
        }, 2000)
      }
    })
  }

  const resetForm = () => {
    setResult(null)
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {result && (
        <div
          className={`p-4 rounded-lg flex items-center space-x-3 ${
            result.success
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {result.success ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
          <p className="text-sm font-medium">{result.success ? result.message : result.error}</p>
        </div>
      )}

      <div>
        <label htmlFor={`${isModal ? "modal-" : ""}name`} className="block text-sm font-medium text-blue-800 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id={`${isModal ? "modal-" : ""}name`}
          name="name"
          required
          disabled={isPending}
          className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor={`${isModal ? "modal-" : ""}email`} className="block text-sm font-medium text-blue-800 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id={`${isModal ? "modal-" : ""}email`}
          name="email"
          required
          disabled={isPending}
          className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor={`${isModal ? "modal-" : ""}company`} className="block text-sm font-medium text-blue-800 mb-2">
          Company
        </label>
        <input
          type="text"
          id={`${isModal ? "modal-" : ""}company`}
          name="company"
          disabled={isPending}
          className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor={`${isModal ? "modal-" : ""}message`} className="block text-sm font-medium text-blue-800 mb-2">
          Message *
        </label>
        <textarea
          id={`${isModal ? "modal-" : ""}message`}
          name="message"
          rows={4}
          required
          disabled={isPending}
          className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Tell us about your business goals and compliance needs..."
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          disabled={isPending}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isPending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message</span>
          )}
        </button>

        {result && !result.success && (
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-4 border border-blue-300 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </form>
  )
}

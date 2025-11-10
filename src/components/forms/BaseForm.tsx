import { useState, FormEvent, useEffect } from 'react'
import Turnstile from 'react-turnstile'
import { TURNSTILE_SITE_KEY } from '@/config/turnstile'
import { motion } from 'framer-motion'

export interface BaseFormData {
  fullName: string
  phone: string
  email: string
  companyName: string
  [key: string]: string
}

interface BaseFormProps {
  formType: 'market-research' | 'cold-calling' | 'data-generation' | 'skip-tracing' | 'acquisitions-dispositions' | 'contact' | 'custom-package' | 'market-strategy' | 'appointment-setting'
  children: React.ReactNode
  onSubmit: (data: BaseFormData, turnstileToken: string) => Promise<void>
  initialData: BaseFormData
}

export default function BaseForm({ formType, children, onSubmit, initialData }: BaseFormProps) {
  const [formData, setFormData] = useState<BaseFormData>(initialData)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isMounted, setIsMounted] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!turnstileToken) {
      alert('Please complete the security verification')
      return
    }

    if (!consentGiven) {
      alert('Please agree to receive communications from Leads Up')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await onSubmit(formData, turnstileToken)
      setSubmitStatus('success')
      // Reset form
      setFormData(initialData)
      setTurnstileToken('')
      setConsentGiven(false)
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Base Fields */}
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Full Name <span className="text-energetic-pink">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Phone Number <span className="text-energetic-pink">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Email Address <span className="text-energetic-pink">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Company Name <span className="text-energetic-pink">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
            placeholder="Your Company LLC"
          />
        </div>

        {/* Render additional fields */}
        {typeof children === 'function' ? children({ formData, setFormData }) : children}
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
        <input
          type="checkbox"
          id="consent"
          checked={consentGiven}
          onChange={(e) => setConsentGiven(e.target.checked)}
          className="mt-1 h-5 w-5 rounded border-white/20 bg-white/10 text-action-blue focus:ring-2 focus:ring-action-blue/50 cursor-pointer"
        />
        <label htmlFor="consent" className="text-sm text-slate-200/80 leading-relaxed cursor-pointer">
          I consent to receive marketing text messages and emails, such as Lead Generation, from Leads Up at the phone number and email I provided, including messages sent via auto dialer. <span className="text-energetic-pink">*</span>
        </label>
      </div>

      {/* Turnstile */}
      <div className="flex justify-center py-4">
        {isMounted ? (
          <Turnstile
            sitekey={TURNSTILE_SITE_KEY}
            onVerify={(token) => setTurnstileToken(token)}
            onError={() => console.error('Turnstile error')}
            theme="dark"
          />
        ) : (
          <div className="h-16 w-64 bg-white/5 rounded-lg animate-pulse" />
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || !turnstileToken || !consentGiven}
        whileHover={{ scale: isSubmitting || !turnstileToken || !consentGiven ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting || !turnstileToken || !consentGiven ? 1 : 0.98 }}
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-action-blue to-energetic-pink text-white font-semibold text-lg shadow-[0_20px_60px_rgba(61,130,247,0.5)] hover:shadow-[0_25px_70px_rgba(61,130,247,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </motion.button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-vibrant-green/20 border border-vibrant-green text-vibrant-green text-center font-medium"
        >
          ✓ Thank you! We'll be in touch within 24 hours.
        </motion.div>
      )}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-energetic-pink/20 border border-energetic-pink text-energetic-pink text-center font-medium"
        >
          ✗ Something went wrong. Please try again or call us at +1-551-358-4982
        </motion.div>
      )}
    </form>
  )
}

export function FormField({ label, name, value, onChange, placeholder, required = false, type = 'text' }: {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  type?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-200 mb-2">
        {label} {required && <span className="text-energetic-pink">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
        placeholder={placeholder}
      />
    </div>
  )
}

export function FormSelect({ label, name, value, onChange, options, required = false }: {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-200 mb-2">
        {label} {required && <span className="text-energetic-pink">*</span>}
      </label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition [&>option]:bg-slate-900 [&>option]:text-slate-100 [&>option]:py-2"
        style={{ colorScheme: 'dark' }}
      >
        <option value="" className="bg-slate-900 text-slate-400">Select...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-100">{opt.label}</option>
        ))}
      </select>
    </div>
  )
}

export function FormTextarea({ label, name, value, onChange, placeholder, required = false, rows = 4 }: {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  rows?: number
}) {
  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-slate-200 mb-2">
        {label} {required && <span className="text-energetic-pink">*</span>}
      </label>
      <textarea
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition resize-none"
        placeholder={placeholder}
      />
    </div>
  )
}

# Forms Implementation Guide

This guide will help you complete the implementation of all custom forms with Resend email integration and Cloudflare Turnstile bot protection.

## ✅ What's Already Done

1. ✅ Installed dependencies: `resend` and `react-turnstile`
2. ✅ Created API endpoint at `/api/submit-form.ts` with full Resend integration
3. ✅ Fixed navbar with all services and industries dropdowns
4. ✅ Fixed hero gradient (darker top-left corner)
5. ✅ Balanced audio samples layout

## 🔧 Setup Required

### 1. Configure Environment Variables in Cloudflare

Add these environment variables in your Cloudflare Pages/Workers dashboard:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
TURNSTILE_SECRET_KEY=0x4AAAxxxxxxxxxxxxxxxxx
```

Get these keys from:
- Resend API Key: https://resend.com/api-keys
- Turnstile Secret: https://dash.cloudflare.com/turnstile

### 2. Configure Turnstile Public Key

Create a file `/src/config/turnstile.ts`:

```typescript
export const TURNSTILE_SITE_KEY = '0x4AAAxxxxxxxxxxxxxxxxx' // Your Cloudflare Turnstile Site Key (public)
```

### 3. Verify Resend Sender Domain

In your Resend dashboard, verify the domain `theleadsup.com` or update the `from` field in `/api/submit-form.ts` line 215 to match your verified domain.

## 📋 Forms to Implement

### Form Specifications

#### 1. Market Research Form (Homepage)
**Location:** Replaces or enhances existing homepage contact section
**Fields:**
- Full Name (required)
- Phone Number (required)
- Email Address (required)
- Company Name (required)
- Desired Areas (optional)
- Investing Strategy (optional)
- How Did You Hear About Us? (optional)

#### 2. Cold Calling Service Form
**Location:** `/services/cold-calling` page
**Fields:**
- Full Name (required)
- Phone Number (required)
- Email Address (required)
- Company Name (required)
- Desired Areas (optional)
- Investing Strategy (optional)
- How many callers are you interested in? (optional)
- How many deals looking to close a month? (optional)
- Marketing monthly budget? (optional)
- How Did You Hear About Us? (optional)

#### 3. Data Generation Form
**Location:** `/services/data-generation` page
**Fields:**
- Full Name (required)
- Phone Number (required)
- Email Address (required)
- Company Name (required)
- Desired Areas (optional)
- Volume of Leads Needed "5,000 minimum" (optional)
- Investing Strategy (optional)
- How Did You Hear About Us? (optional)

#### 4. Skip Tracing Form
**Location:** `/services/skip-tracing` page
**Fields:**
- Full Name (required)
- Phone Number (required)
- Email Address (required)
- Company Name (required)
- Number of records to be skip traced? (optional)
- How Did You Hear About Us? (optional)

#### 5. Acquisitions & Dispositions Form
**Location:** `/services/acquisitions-dispositions` page
**Fields:**
- Full Name (required)
- Phone Number (required)
- Email Address (required)
- Company Name (required)
- Investing Strategy (optional)
- How many acq managers are you interested in? (optional)
- How many deals looking to close a month? (optional)
- Do you have a consistent pipeline of leads? If yes, how many leads a month? (optional)
- How Did You Hear About Us? (optional)

#### 6. Updated Contact Form
**Location:** `/contact` page and other general forms
**Fields:**
- Full Name (required)
- Phone Number (required)
- Email Address (required)
- Company Name (required)
- **Message (textarea - NEW)** (optional)
- How Did You Hear About Us? (optional)

## 🎨 Example Form Component

Here's a complete example of the Cold Calling form that you can adapt for other forms:

```typescript
// src/components/forms/ColdCallingForm.tsx
import { useState } from 'react'
import { Turnstile } from 'react-turnstile'
import { TURNSTILE_SITE_KEY } from '@/config/turnstile'

export default function ColdCallingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    desiredAreas: '',
    investingStrategy: '',
    numberOfCallers: '',
    dealsPerMonth: '',
    monthlyBudget: '',
    howDidYouHear: '',
  })
  const [turnstileToken, setTurnstileToken] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!turnstileToken) {
      alert('Please complete the captcha')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'cold-calling',
          turnstileToken,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          companyName: '',
          desiredAreas: '',
          investingStrategy: '',
          numberOfCallers: '',
          dealsPerMonth: '',
          monthlyBudget: '',
          howDidYouHear: '',
        })
        setTurnstileToken('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}
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

        {/* Phone */}
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

        {/* Email */}
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

        {/* Company Name */}
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

        {/* Desired Areas */}
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Desired Areas
          </label>
          <input
            type="text"
            value={formData.desiredAreas}
            onChange={(e) => setFormData({ ...formData, desiredAreas: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
            placeholder="e.g., Tampa Bay, FL"
          />
        </div>

        {/* Investing Strategy */}
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Investing Strategy
          </label>
          <select
            value={formData.investingStrategy}
            onChange={(e) => setFormData({ ...formData, investingStrategy: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
          >
            <option value="">Select strategy...</option>
            <option value="Wholesaling">Wholesaling</option>
            <option value="Fix & Flip">Fix & Flip</option>
            <option value="Buy & Hold">Buy & Hold</option>
            <option value="Agent">Real Estate Agent</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Number of Callers */}
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            How many callers are you interested in?
          </label>
          <input
            type="text"
            value={formData.numberOfCallers}
            onChange={(e) => setFormData({ ...formData, numberOfCallers: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
            placeholder="e.g., 2-3 callers"
          />
        </div>

        {/* Deals Per Month */}
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            How many deals looking to close a month?
          </label>
          <input
            type="text"
            value={formData.dealsPerMonth}
            onChange={(e) => setFormData({ ...formData, dealsPerMonth: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
            placeholder="e.g., 3-5 deals"
          />
        </div>

        {/* Monthly Budget */}
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Marketing monthly budget?
          </label>
          <input
            type="text"
            value={formData.monthlyBudget}
            onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 placeholder-slate-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
            placeholder="e.g., $5,000 - $10,000"
          />
        </div>

        {/* How Did You Hear */}
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            How did you hear about us?
          </label>
          <select
            value={formData.howDidYouHear}
            onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-slate-100 focus:border-action-blue focus:ring-2 focus:ring-action-blue/50 transition"
          >
            <option value="">Select source...</option>
            <option value="Google Search">Google Search</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral">Referral</option>
            <option value="YouTube">YouTube</option>
            <option value="Podcast">Podcast</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Turnstile */}
      <div className="flex justify-center">
        <Turnstile
          sitekey={TURNSTILE_SITE_KEY}
          onVerify={(token) => setTurnstileToken(token)}
          theme="dark"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !turnstileToken}
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-action-blue to-energetic-pink text-white font-semibold text-lg shadow-[0_20px_60px_rgba(61,130,247,0.5)] hover:shadow-[0_25px_70px_rgba(61,130,247,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 rounded-xl bg-vibrant-green/20 border border-vibrant-green text-vibrant-green text-center">
          Thank you! We'll be in touch shortly.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 rounded-xl bg-energetic-pink/20 border border-energetic-pink text-energetic-pink text-center">
          Something went wrong. Please try again or call us directly.
        </div>
      )}
    </form>
  )
}
```

## 🚀 Next Steps

1. **Create `/src/config/turnstile.ts`** with your Turnstile site key
2. **Create the form components** in `/src/components/forms/` directory
   - Use the example above as a template
   - Adjust fields based on the specifications for each form
3. **Integrate forms into pages:**
   - Homepage: Add Market Research form
   - Service pages: Add respective forms
   - Contact page: Update with message textarea
4. **Test locally** before deploying
5. **Deploy** and verify emails are being sent to `submissions@leadsupcallcenter.com`

## 📧 Email Template Customization

The email templates in `/api/submit-form.ts` are fully customizable. Each form type has its own styled HTML email template with:
- Gradient header
- Professional table layout
- Color-coded fields
- Submission timestamp
- Reply-to functionality (emails go to submission email, replies go to customer)

## 🔒 Security Features

- ✅ Cloudflare Turnstile bot protection
- ✅ Server-side token verification
- ✅ IP address tracking
- ✅ Rate limiting (via Cloudflare)
- ✅ Input validation
- ✅ Secure environment variables

## 📝 Notes

- All forms use the same API endpoint (`/api/submit-form.ts`)
- Form type is specified in the `formType` field
- Email templates automatically adjust based on form type
- Turnstile widget uses dark theme to match your site
- All submissions go to `submissions@leadsupcallcenter.com`
- Customer email is set as reply-to for easy responses

## Need Help?

If you encounter any issues:
1. Check Cloudflare environment variables are set correctly
2. Verify Resend API key has sending permissions
3. Confirm sender domain is verified in Resend
4. Check browser console for any errors
5. Test Turnstile widget is loading correctly

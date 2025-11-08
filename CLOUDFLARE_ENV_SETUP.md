# Cloudflare Pages Environment Variables Setup Guide

## 🚨 IMPORTANT: Form Submission Error Fix

If you're seeing a **400 Bad Request** error when submitting forms, it's because the required environment variables are not set in Cloudflare Pages. Follow this guide to fix it.

## ✅ What You Need

You need to set up two environment variables in your Cloudflare Pages dashboard:

1. **`RESEND_API_KEY`** - For sending form submission emails
2. **`TURNSTILE_SECRET_KEY`** - For verifying Cloudflare Turnstile (bot protection)

---

## 📋 Step-by-Step Setup

### Step 1: Get Your Resend API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Sign in or create a free account
3. Click **"Create API Key"**
4. Give it a name (e.g., "LeadsUp Forms Production")
5. Select **"Sending access"** permission
6. Click **"Add"**
7. **Copy the API key** (it starts with `re_`) - you won't be able to see it again!

**Example:** `re_123abc456def789ghi012jkl345mno678`

### Step 2: Verify Your Domain in Resend

1. In Resend Dashboard, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain: `theleadsup.com`
4. Follow the DNS verification steps (add TXT, MX, and DKIM records to your DNS)
5. Wait for verification (usually takes a few minutes)

> **Note:** The form currently sends from `forms@theleadsup.com`. If you haven't verified this domain, either:
> - Verify `theleadsup.com` in Resend, OR
> - Change the `from` email in `functions/api/submit-form.ts` line 250 to use a verified domain

### Step 3: Get Your Cloudflare Turnstile Secret Key

1. Go to [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Find your Turnstile site (or create a new one)
3. Click on your site to view details
4. You'll see two keys:
   - **Site Key** (starts with `0x4AAA...`) - This is already configured in your code
   - **Secret Key** (starts with `0x4AAA...`) - **This is what you need**
5. **Copy the Secret Key**

**Example:** `0x4AAAAAAABbbbCCCCddddEEEEffff1234`

> **Important:** The Site Key (public) is different from the Secret Key (private). You need the **Secret Key** for this step.

### Step 4: Add Environment Variables to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **"Workers & Pages"** in the left sidebar
3. Click on your Pages project: **"the-leads-up-marketing-site"** (or your deployed site name)
4. Click **"Settings"** tab
5. Scroll down to **"Environment variables"**
6. Click **"Add variables"**

#### Add First Variable: RESEND_API_KEY

1. **Variable name:** `RESEND_API_KEY`
2. **Value:** Paste your Resend API key (e.g., `re_123abc456def789...`)
3. **Type:** Plain text (NOT encrypted)
4. **Environment:** Select **"Production"** (and optionally "Preview" if you want to test)
5. Click **"Save"**

#### Add Second Variable: TURNSTILE_SECRET_KEY

1. Click **"Add variable"** again
2. **Variable name:** `TURNSTILE_SECRET_KEY`
3. **Value:** Paste your Cloudflare Turnstile Secret Key (e.g., `0x4AAA...`)
4. **Type:** Plain text
5. **Environment:** Select **"Production"** (and optionally "Preview")
6. Click **"Save"**

### Step 5: Redeploy Your Site

**Important:** Environment variables only take effect after a new deployment.

1. In Cloudflare Pages dashboard, go to **"Deployments"** tab
2. Click the **"..."** menu next to your latest deployment
3. Click **"Retry deployment"**
4. Or push a new commit to your repository to trigger automatic deployment

---

## 🧪 Testing the Forms

After setting the environment variables and redeploying:

1. Go to your website: `https://leadsupcallcenter.com` or `https://theleadsup.com`
2. Navigate to the Contact page or Homepage
3. Fill out a form
4. Complete the Cloudflare Turnstile (security check)
5. Submit the form

**Expected Result:**
- ✅ You should see a success message: "Thank you! We'll be in touch within 24 hours."
- ✅ You should receive an email at `submissions@leadsupcallcenter.com` and `adnanelgamasy@gmail.com`

**If you still see an error:**
- Check the Network tab in Chrome DevTools (F12)
- Look at the response from `/api/submit-form`
- The error message will now show specific details about what went wrong
- Common issues:
  - `"Missing Turnstile configuration"` → TURNSTILE_SECRET_KEY not set correctly
  - `"Missing email configuration"` → RESEND_API_KEY not set correctly
  - `"Security verification failed"` → Turnstile token is invalid or expired
  - Email sending error → Domain not verified in Resend

---

## 📊 Viewing Logs (Troubleshooting)

To view detailed error logs:

1. Go to Cloudflare Pages dashboard
2. Click on your project
3. Go to **"Functions"** tab
4. Click on **"Real-time logs"** (if available) or **"Logpush"**
5. You'll see console.log output including Turnstile verification details

---

## 🔒 Security Notes

- ✅ Environment variables are **never exposed** to the client (browser)
- ✅ The Secret Key stays server-side only
- ✅ API keys are **not committed to Git** (they're only in Cloudflare)
- ✅ Cloudflare Turnstile protects against bot submissions
- ✅ All submissions are verified before sending emails

---

## 📧 Email Recipient Configuration

Currently, form submissions are sent to:
- `submissions@leadsupcallcenter.com`
- `adnanelgamasy@gmail.com`

To change recipients, edit: `functions/api/submit-form.ts` line 251

---

## ✅ Checklist

- [ ] Resend account created
- [ ] Resend API Key obtained
- [ ] Domain verified in Resend
- [ ] Cloudflare Turnstile Secret Key obtained
- [ ] Both environment variables added to Cloudflare Pages
- [ ] Site redeployed
- [ ] Forms tested and working
- [ ] Test email received

---

## 🆘 Still Having Issues?

If forms still aren't working after following all steps:

1. **Check environment variable names** - They must be EXACTLY:
   - `RESEND_API_KEY` (not `RESEND_KEY` or `resend_api_key`)
   - `TURNSTILE_SECRET_KEY` (not `TURNSTILE_SECRET` or `turnstile_secret_key`)

2. **Check the error message** - The improved error handling now shows specific error details:
   - Open Chrome DevTools (F12)
   - Go to Network tab
   - Submit a form
   - Click on the `submit-form` request
   - Look at the Response tab

3. **Verify Resend domain** - Make sure `theleadsup.com` is verified with green checkmarks for all DNS records

4. **Check Turnstile site key** - Verify that `src/config/turnstile.ts` has the correct Site Key (public key, starts with `0x4AAA...`)

5. **Test Turnstile** - Make sure the Turnstile widget loads and you can complete the challenge

---

## 📝 Quick Reference

| Variable Name | Where to Get It | Example Format |
|--------------|-----------------|----------------|
| `RESEND_API_KEY` | [Resend Dashboard](https://resend.com/api-keys) | `re_abc123...` |
| `TURNSTILE_SECRET_KEY` | [Cloudflare Turnstile](https://dash.cloudflare.com/turnstile) | `0x4AAA...` |

---

## 🎯 Summary

1. Get Resend API Key → Add to Cloudflare Pages
2. Get Turnstile Secret Key → Add to Cloudflare Pages
3. Redeploy site
4. Test forms
5. ✅ Forms working!

---

Last Updated: November 7, 2025

// API endpoint for form submissions with Resend integration
// This runs on Cloudflare Workers or similar serverless platform

import { Resend } from 'resend'

// Environment variables (set these in Cloudflare dashboard):
// RESEND_API_KEY - Your Resend API key
// TURNSTILE_SECRET_KEY - Your Cloudflare Turnstile secret key

const resend = new Resend(process.env.RESEND_API_KEY)

// Form type definitions
export interface FormSubmission {
  formType: 'market-research' | 'cold-calling' | 'data-generation' | 'skip-tracing' | 'acquisitions-dispositions' | 'contact'
  fullName: string
  phone: string
  email: string
  companyName: string
  desiredAreas?: string
  investingStrategy?: string
  howDidYouHear?: string
  numberOfCallers?: string
  dealsPerMonth?: string
  monthlyBudget?: string
  leadsVolume?: string
  recordsToTrace?: string
  acqManagers?: string
  consistentPipeline?: string
  leadsPerMonth?: string
  message?: string
  turnstileToken: string
}

// Verify Turnstile token
async function verifyTurnstileToken(token: string, ip: string): Promise<boolean> {
  const formData = new FormData()
  formData.append('secret', process.env.TURNSTILE_SECRET_KEY!)
  formData.append('response', token)
  formData.append('remoteip', ip)

  const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  })

  const outcome = await result.json()
  return outcome.success
}

// Generate email HTML based on form type
function generateEmailHTML(data: FormSubmission): string {
  const baseInfo = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="background: linear-gradient(135deg, #3D82F7 0%, #E91E8C 100%); padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New ${data.formType.replace(/-/g, ' ').toUpperCase()} Form Submission</h1>
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px; border-bottom: 2px solid #3D82F7; padding-bottom: 10px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; background-color: #f9f9f9;"><strong>Full Name:</strong></td>
              <td style="padding: 10px;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f9f9f9;"><strong>Email:</strong></td>
              <td style="padding: 10px;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f9f9f9;"><strong>Phone:</strong></td>
              <td style="padding: 10px;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f9f9f9;"><strong>Company:</strong></td>
              <td style="padding: 10px;">${data.companyName}</td>
            </tr>
          </table>
        </div>
  `

  let formSpecificFields = ''

  switch (data.formType) {
    case 'market-research':
      formSpecificFields = `
        <div style="margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px; border-bottom: 2px solid #3D82F7; padding-bottom: 10px;">Project Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${data.desiredAreas ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Desired Areas:</strong></td><td style="padding: 10px;">${data.desiredAreas}</td></tr>` : ''}
            ${data.investingStrategy ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Investing Strategy:</strong></td><td style="padding: 10px;">${data.investingStrategy}</td></tr>` : ''}
            ${data.howDidYouHear ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>How Did You Hear About Us:</strong></td><td style="padding: 10px;">${data.howDidYouHear}</td></tr>` : ''}
          </table>
        </div>
      `
      break

    case 'cold-calling':
      formSpecificFields = `
        <div style="margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px; border-bottom: 2px solid #3D82F7; padding-bottom: 10px;">Cold Calling Requirements</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${data.desiredAreas ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Desired Areas:</strong></td><td style="padding: 10px;">${data.desiredAreas}</td></tr>` : ''}
            ${data.investingStrategy ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Investing Strategy:</strong></td><td style="padding: 10px;">${data.investingStrategy}</td></tr>` : ''}
            ${data.numberOfCallers ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Number of Callers:</strong></td><td style="padding: 10px;">${data.numberOfCallers}</td></tr>` : ''}
            ${data.dealsPerMonth ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Deals Per Month Goal:</strong></td><td style="padding: 10px;">${data.dealsPerMonth}</td></tr>` : ''}
            ${data.monthlyBudget ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Monthly Marketing Budget:</strong></td><td style="padding: 10px;">${data.monthlyBudget}</td></tr>` : ''}
            ${data.howDidYouHear ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>How Did You Hear About Us:</strong></td><td style="padding: 10px;">${data.howDidYouHear}</td></tr>` : ''}
          </table>
        </div>
      `
      break

    case 'data-generation':
      formSpecificFields = `
        <div style="margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px; border-bottom: 2px solid #3D82F7; padding-bottom: 10px;">Data Generation Requirements</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${data.desiredAreas ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Desired Areas:</strong></td><td style="padding: 10px;">${data.desiredAreas}</td></tr>` : ''}
            ${data.leadsVolume ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Volume of Leads Needed:</strong></td><td style="padding: 10px;">${data.leadsVolume}</td></tr>` : ''}
            ${data.investingStrategy ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Investing Strategy:</strong></td><td style="padding: 10px;">${data.investingStrategy}</td></tr>` : ''}
            ${data.howDidYouHear ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>How Did You Hear About Us:</strong></td><td style="padding: 10px;">${data.howDidYouHear}</td></tr>` : ''}
          </table>
        </div>
      `
      break

    case 'skip-tracing':
      formSpecificFields = `
        <div style="margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px; border-bottom: 2px solid #3D82F7; padding-bottom: 10px;">Skip Tracing Requirements</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${data.recordsToTrace ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Records to Trace:</strong></td><td style="padding: 10px;">${data.recordsToTrace}</td></tr>` : ''}
            ${data.howDidYouHear ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>How Did You Hear About Us:</strong></td><td style="padding: 10px;">${data.howDidYouHear}</td></tr>` : ''}
          </table>
        </div>
      `
      break

    case 'acquisitions-dispositions':
      formSpecificFields = `
        <div style="margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px; border-bottom: 2px solid #3D82F7; padding-bottom: 10px;">Acquisitions & Dispositions Requirements</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${data.investingStrategy ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Investing Strategy:</strong></td><td style="padding: 10px;">${data.investingStrategy}</td></tr>` : ''}
            ${data.acqManagers ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Number of Acq Managers:</strong></td><td style="padding: 10px;">${data.acqManagers}</td></tr>` : ''}
            ${data.dealsPerMonth ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Deals Per Month Goal:</strong></td><td style="padding: 10px;">${data.dealsPerMonth}</td></tr>` : ''}
            ${data.consistentPipeline ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Consistent Pipeline:</strong></td><td style="padding: 10px;">${data.consistentPipeline}</td></tr>` : ''}
            ${data.leadsPerMonth ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>Leads Per Month:</strong></td><td style="padding: 10px;">${data.leadsPerMonth}</td></tr>` : ''}
            ${data.howDidYouHear ? `<tr><td style="padding: 10px; background-color: #f9f9f9;"><strong>How Did You Hear About Us:</strong></td><td style="padding: 10px;">${data.howDidYouHear}</td></tr>` : ''}
          </table>
        </div>
      `
      break

    case 'contact':
      formSpecificFields = `
        ${data.message ? `
        <div style="margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 18px; border-bottom: 2px solid #3D82F7; padding-bottom: 10px;">Message</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        ` : ''}
        ${data.howDidYouHear ? `
        <div style="margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; background-color: #f9f9f9;"><strong>How Did You Hear About Us:</strong></td>
              <td style="padding: 10px;">${data.howDidYouHear}</td>
            </tr>
          </table>
        </div>
        ` : ''}
      `
      break
  }

  const footer = `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #888;">
          <p style="font-size: 12px;">This email was sent from The Leads Up website form.</p>
          <p style="font-size: 12px;">Submission Time: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  `

  return baseInfo + formSpecificFields + footer
}

// Main form submission handler
export async function POST(request: Request) {
  try {
    const data: FormSubmission = await request.json()

    // Get client IP
    const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || 'unknown'

    // Verify Turnstile token
    const isValidToken = await verifyTurnstileToken(data.turnstileToken, ip)
    if (!isValidToken) {
      return new Response(JSON.stringify({ error: 'Invalid captcha token' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Send email via Resend
    const emailHTML = generateEmailHTML(data)

    await resend.emails.send({
      from: 'LeadsUp Forms <forms@theleadsup.com>',
      to: ['submissions@leadsupcallcenter.com', 'adnanelgamasy@gmail.com'],
      subject: `New ${data.formType.replace(/-/g, ' ').toUpperCase()} Form Submission - ${data.fullName}`,
      html: emailHTML,
      replyTo: data.email,
    })

    return new Response(JSON.stringify({ success: true, message: 'Form submitted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return new Response(JSON.stringify({ error: 'Failed to submit form' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

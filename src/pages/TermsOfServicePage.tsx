import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900">
      <EnhancedHeader />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-plus-jakarta-sans text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
              Terms of Service
            </h1>
            <p className="text-slate-200/60 font-inter mb-12">
              Effective Date: November 8, 2025
            </p>

            <div className="space-y-8 text-slate-200/80 font-inter leading-relaxed">
              {/* Introduction */}
              <section>
                <p className="mb-4">
                  Welcome to LeadsUp Call Center ("LeadsUp," "we," "our," or "us").
                </p>
                <p>
                  These Terms of Service ("Terms") govern your access to and use of our website, services, and communications, including lead generation, outbound marketing, data services, and appointment setting. By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
                </p>
              </section>

              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  1. Services Overview
                </h2>
                <p>
                  LeadsUp provides cold calling, lead generation, data sourcing, skip tracing, market research, and related business development services for real estate and other industries. All services are provided according to the terms outlined in our agreements, service packages, and communications.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  2. Use of Services
                </h2>
                <p className="mb-4">
                  You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations.
                </p>
                <p className="mb-3">You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use LeadsUp's services to send or request unlawful, abusive, or misleading communications.</li>
                  <li>Attempt to interfere with or disrupt our systems, servers, or networks.</li>
                  <li>Use the website or our content for resale, reproduction, or competitive purposes without prior written consent.</li>
                </ul>
                <p className="mt-4">
                  LeadsUp reserves the right to suspend or terminate service if improper, unethical, or illegal use is detected.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  3. Payments and Billing
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payments for all LeadsUp services are due in advance, according to the selected plan or custom agreement.</li>
                  <li>Fees are non-refundable, except as expressly stated in a written agreement.</li>
                  <li>Subscription renewals or ongoing services will continue unless canceled in writing prior to the next billing cycle.</li>
                  <li>Late or missed payments may result in temporary suspension of service until resolved.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  4. Client Responsibilities
                </h2>
                <p className="mb-3">As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate business and contact information for campaign setup.</li>
                  <li>Supply data or criteria required to execute your campaigns.</li>
                  <li>Cooperate with LeadsUp's team for meetings, strategy sessions, and reporting.</li>
                  <li>Refrain from sharing LeadsUp's internal processes, scripts, or data externally.</li>
                </ul>
                <p className="mt-4">
                  You are responsible for ensuring your campaigns comply with your local regulations, including Do-Not-Call (DNC) laws and marketing disclosure requirements, unless LeadsUp has agreed in writing to manage compliance on your behalf.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  5. Communication Consent
                </h2>
                <p className="mb-4">
                  By engaging with LeadsUp through our website or forms, you consent to receive calls, SMS messages, and emails regarding service updates, offers, and support.
                </p>
                <p>
                  You can opt out at any time by replying "STOP" to SMS, clicking "unsubscribe" in emails, or contacting support@leadsupcallcenter.com
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  6. Confidentiality and Data Handling
                </h2>
                <p className="mb-4">
                  LeadsUp treats all client data as confidential.
                </p>
                <p className="mb-3">
                  We will not disclose, share, or resell client data, leads, or campaign results except:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>When authorized by the client in writing.</li>
                  <li>When required by law or court order.</li>
                  <li>When necessary to fulfill service functions (e.g., data processing, CRM integration) under confidentiality agreements.</li>
                </ul>
                <p className="mt-4">
                  For more details, please refer to our <a href="/privacy-policy" className="text-action-blue hover:underline">Privacy Policy</a>.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="mb-4">
                  LeadsUp will make every reasonable effort to deliver quality results; however, we do not guarantee specific outcomes or conversion rates.
                </p>
                <p className="mb-4">
                  In no event shall LeadsUp, its affiliates, or staff be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.
                </p>
                <p>
                  Our total liability for any claim shall not exceed the total fees paid by the client during the 30 days preceding the event giving rise to the claim.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  8. Intellectual Property
                </h2>
                <p className="mb-4">
                  All content, materials, graphics, and trademarks displayed on the LeadsUp website or in our materials are the property of LeadsUp Call Center.
                </p>
                <p>
                  Clients may use deliverables provided (e.g., reports, data) for internal business purposes only. Unauthorized reproduction or resale is strictly prohibited.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  9. Termination of Service
                </h2>
                <p className="mb-4">
                  Either party may terminate the service agreement with written notice as specified in the contract.
                </p>
                <p className="mb-3">
                  LeadsUp reserves the right to immediately terminate service in cases of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Non-payment.</li>
                  <li>Breach of these Terms.</li>
                  <li>Misuse of data or unethical campaign activity.</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  10. Changes to These Terms
                </h2>
                <p>
                  We may update or modify these Terms from time to time. The latest version will always be available on our website. Continued use of our services after updates constitutes acceptance of the revised Terms.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  11. Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and interpreted under the laws of the State of Wyoming, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Wyoming, USA.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-2xl font-plus-jakarta-sans font-bold text-slate-50 mb-4">
                  12. Contact Us
                </h2>
                <p className="mb-3">
                  If you have questions or concerns about these Terms or our services, please contact us:
                </p>
                <ul className="space-y-2">
                  <li>📧 Email: <a href="mailto:support@leadsupcallcenter.com" className="text-action-blue hover:underline">support@leadsupcallcenter.com</a></li>
                  <li>📞 Phone: <a href="tel:+16466400558" className="text-action-blue hover:underline">(646) 640-0558</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

import BaseForm, { FormTextarea, FormSelect, BaseFormData } from './BaseForm'

const targetMarketOptions = [
  { value: 'Real Estate - Wholesaling', label: 'Real Estate - Wholesaling' },
  { value: 'Real Estate - Fix & Flip', label: 'Real Estate - Fix & Flip' },
  { value: 'Real Estate - Buy & Hold', label: 'Real Estate - Buy & Hold' },
  { value: 'Solar', label: 'Solar' },
  { value: 'Roofing', label: 'Roofing' },
  { value: 'Medical Insurance', label: 'Medical Insurance' },
  { value: 'Automotive', label: 'Automotive' },
  { value: 'Other', label: 'Other' },
]

const howDidYouHearOptions = [
  { value: 'Google Search', label: 'Google Search' },
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Instagram', label: 'Instagram' },
  { value: 'LinkedIn', label: 'LinkedIn' },
  { value: 'Referral', label: 'Referral' },
  { value: 'YouTube', label: 'YouTube' },
  { value: 'Podcast', label: 'Podcast' },
  { value: 'Other', label: 'Other' },
]

const initialData: BaseFormData = {
  fullName: '',
  phone: '',
  email: '',
  companyName: '',
  message: '',
  targetMarket: '',
  howDidYouHear: '',
}

export default function MarketResearchForm() {
  const handleSubmit = async (data: BaseFormData, turnstileToken: string) => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        formType: 'market-research',
        turnstileToken,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
  }

  return (
    <BaseForm
      formType="market-research"
      initialData={initialData}
      onSubmit={handleSubmit}
    >
      {({ formData, setFormData }: { formData: BaseFormData; setFormData: (data: BaseFormData) => void }) => (
        <>
          <FormSelect
            label="Target Market / Industry"
            name="targetMarket"
            value={formData.targetMarket || ''}
            onChange={(value) => setFormData({ ...formData, targetMarket: value })}
            options={targetMarketOptions}
            required
          />

          <FormTextarea
            label="Tell us about your target market and business goals"
            name="message"
            value={formData.message || ''}
            onChange={(value) => setFormData({ ...formData, message: value })}
            placeholder="What areas are you targeting? What are your investment or business goals? Any specific challenges you're facing?"
            rows={5}
          />

          <FormSelect
            label="How did you hear about us?"
            name="howDidYouHear"
            value={formData.howDidYouHear || ''}
            onChange={(value) => setFormData({ ...formData, howDidYouHear: value })}
            options={howDidYouHearOptions}
          />
        </>
      )}
    </BaseForm>
  )
}

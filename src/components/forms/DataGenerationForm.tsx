import BaseForm, { FormField, FormSelect, BaseFormData } from './BaseForm'

const investingStrategyOptions = [
  { value: 'Wholesaling', label: 'Wholesaling' },
  { value: 'Fix & Flip', label: 'Fix & Flip' },
  { value: 'Buy & Hold', label: 'Buy & Hold' },
  { value: 'Real Estate Agent', label: 'Real Estate Agent' },
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
  desiredAreas: '',
  leadsVolume: '',
  investingStrategy: '',
  howDidYouHear: '',
}

export default function DataGenerationForm() {
  const handleSubmit = async (data: BaseFormData, turnstileToken: string) => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        formType: 'data-generation',
        turnstileToken,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
  }

  return (
    <BaseForm
      formType="data-generation"
      initialData={initialData}
      onSubmit={handleSubmit}
    >
      {({ formData, setFormData }: { formData: BaseFormData; setFormData: (data: BaseFormData) => void }) => (
        <>
          <FormField
            label="Desired Areas"
            name="desiredAreas"
            value={formData.desiredAreas || ''}
            onChange={(value) => setFormData({ ...formData, desiredAreas: value })}
            placeholder="e.g., Tampa Bay, FL"
          />

          <FormField
            label="Volume of Leads Needed (5,000 minimum)"
            name="leadsVolume"
            value={formData.leadsVolume || ''}
            onChange={(value) => setFormData({ ...formData, leadsVolume: value })}
            placeholder="e.g., 10,000 leads"
          />

          <FormSelect
            label="Investing Strategy"
            name="investingStrategy"
            value={formData.investingStrategy || ''}
            onChange={(value) => setFormData({ ...formData, investingStrategy: value })}
            options={investingStrategyOptions}
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

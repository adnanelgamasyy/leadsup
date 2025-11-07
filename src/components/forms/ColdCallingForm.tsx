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
  investingStrategy: '',
  numberOfCallers: '',
  dealsPerMonth: '',
  monthlyBudget: '',
  howDidYouHear: '',
}

export default function ColdCallingForm() {
  const handleSubmit = async (data: BaseFormData, turnstileToken: string) => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        formType: 'cold-calling',
        turnstileToken,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
  }

  return (
    <BaseForm
      formType="cold-calling"
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

          <FormSelect
            label="Investing Strategy"
            name="investingStrategy"
            value={formData.investingStrategy || ''}
            onChange={(value) => setFormData({ ...formData, investingStrategy: value })}
            options={investingStrategyOptions}
          />

          <FormField
            label="How many callers are you interested in?"
            name="numberOfCallers"
            value={formData.numberOfCallers || ''}
            onChange={(value) => setFormData({ ...formData, numberOfCallers: value })}
            placeholder="e.g., 2-3 callers"
          />

          <FormField
            label="How many deals looking to close a month?"
            name="dealsPerMonth"
            value={formData.dealsPerMonth || ''}
            onChange={(value) => setFormData({ ...formData, dealsPerMonth: value })}
            placeholder="e.g., 3-5 deals"
          />

          <FormField
            label="Marketing monthly budget?"
            name="monthlyBudget"
            value={formData.monthlyBudget || ''}
            onChange={(value) => setFormData({ ...formData, monthlyBudget: value })}
            placeholder="e.g., $5,000 - $10,000"
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

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
  investingStrategy: '',
  acqManagers: '',
  dealsPerMonth: '',
  consistentPipeline: '',
  leadsPerMonth: '',
  howDidYouHear: '',
}

export default function AcquisitionsDispositionsForm() {
  const handleSubmit = async (data: BaseFormData, turnstileToken: string) => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        formType: 'acquisitions-dispositions',
        turnstileToken,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      const error = new Error(errorData.error || 'Failed to submit form')
      ;(error as any).response = { json: async () => errorData }
      throw error
    }
  }

  return (
    <BaseForm
      formType="acquisitions-dispositions"
      initialData={initialData}
      onSubmit={handleSubmit}
    >
      {({ formData, setFormData }: { formData: BaseFormData; setFormData: (data: BaseFormData) => void }) => (
        <>
          <FormSelect
            label="Investing Strategy"
            name="investingStrategy"
            value={formData.investingStrategy || ''}
            onChange={(value) => setFormData({ ...formData, investingStrategy: value })}
            options={investingStrategyOptions}
          />

          <FormField
            label="How many acq managers are you interested in?"
            name="acqManagers"
            value={formData.acqManagers || ''}
            onChange={(value) => setFormData({ ...formData, acqManagers: value })}
            placeholder="e.g., 2 managers"
          />

          <FormField
            label="How many deals looking to close a month?"
            name="dealsPerMonth"
            value={formData.dealsPerMonth || ''}
            onChange={(value) => setFormData({ ...formData, dealsPerMonth: value })}
            placeholder="e.g., 3-5 deals"
          />

          <FormField
            label="Do you have a consistent pipeline of leads?"
            name="consistentPipeline"
            value={formData.consistentPipeline || ''}
            onChange={(value) => setFormData({ ...formData, consistentPipeline: value })}
            placeholder="e.g., Yes - 50 leads/month"
          />

          <FormField
            label="If yes, how many leads a month?"
            name="leadsPerMonth"
            value={formData.leadsPerMonth || ''}
            onChange={(value) => setFormData({ ...formData, leadsPerMonth: value })}
            placeholder="e.g., 50 leads"
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

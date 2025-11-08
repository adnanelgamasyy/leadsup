import BaseForm, { FormField, FormSelect, BaseFormData } from './BaseForm'

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
  recordsToTrace: '',
  howDidYouHear: '',
}

export default function SkipTracingForm() {
  const handleSubmit = async (data: BaseFormData, turnstileToken: string) => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        formType: 'skip-tracing',
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
      formType="skip-tracing"
      initialData={initialData}
      onSubmit={handleSubmit}
    >
      {({ formData, setFormData }: { formData: BaseFormData; setFormData: (data: BaseFormData) => void }) => (
        <>
          <FormField
            label="Number of records to be skip traced?"
            name="recordsToTrace"
            value={formData.recordsToTrace || ''}
            onChange={(value) => setFormData({ ...formData, recordsToTrace: value })}
            placeholder="e.g., 1,000 records"
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

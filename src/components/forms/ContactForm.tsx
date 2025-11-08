import BaseForm, { FormTextarea, FormSelect, BaseFormData } from './BaseForm'

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
  howDidYouHear: '',
}

export default function ContactForm() {
  const handleSubmit = async (data: BaseFormData, turnstileToken: string) => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        formType: 'contact',
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
      formType="contact"
      initialData={initialData}
      onSubmit={handleSubmit}
    >
      {({ formData, setFormData }: { formData: BaseFormData; setFormData: (data: BaseFormData) => void }) => (
        <>
          <FormTextarea
            label="Message"
            name="message"
            value={formData.message || ''}
            onChange={(value) => setFormData({ ...formData, message: value })}
            placeholder="Tell us about your needs..."
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

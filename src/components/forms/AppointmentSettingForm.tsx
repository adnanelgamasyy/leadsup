import BaseForm, { FormField, FormSelect, FormTextarea, BaseFormData } from './BaseForm'

const investingStrategyOptions = [
  { value: 'Wholesaling', label: 'Wholesaling' },
  { value: 'Fix & Flip', label: 'Fix & Flip' },
  { value: 'Buy & Hold', label: 'Buy & Hold' },
  { value: 'Real Estate Agent', label: 'Real Estate Agent' },
  { value: 'Other', label: 'Other' },
]

const appointmentsPerMonthOptions = [
  { value: '10-20', label: '10-20 appointments' },
  { value: '20-50', label: '20-50 appointments' },
  { value: '50-100', label: '50-100 appointments' },
  { value: '100+', label: '100+ appointments' },
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
  appointmentsPerMonth: '',
  howDidYouHear: '',
  additionalInfo: '',
}

export default function AppointmentSettingForm() {
  const handleSubmit = async (data: BaseFormData, turnstileToken: string) => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        formType: 'appointment-setting',
        turnstileToken,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
  }

  return (
    <BaseForm
      formType="appointment-setting"
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

          <FormSelect
            label="Desired Appointments Per Month"
            name="appointmentsPerMonth"
            value={formData.appointmentsPerMonth || ''}
            onChange={(value) => setFormData({ ...formData, appointmentsPerMonth: value })}
            options={appointmentsPerMonthOptions}
          />

          <FormSelect
            label="How did you hear about us?"
            name="howDidYouHear"
            value={formData.howDidYouHear || ''}
            onChange={(value) => setFormData({ ...formData, howDidYouHear: value })}
            options={howDidYouHearOptions}
          />

          <FormTextarea
            label="Additional Information"
            name="additionalInfo"
            value={formData.additionalInfo || ''}
            onChange={(value) => setFormData({ ...formData, additionalInfo: value })}
            placeholder="Tell us more about your appointment setting needs..."
            rows={4}
          />
        </>
      )}
    </BaseForm>
  )
}

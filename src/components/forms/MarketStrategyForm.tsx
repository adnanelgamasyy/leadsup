import BaseForm, { FormField, FormSelect, BaseFormData } from './BaseForm'

export default function MarketStrategyForm() {
  const initialData: BaseFormData = {
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    desiredAreas: '',
    investingStrategy: '',
  }

  const handleSubmit = async (data: BaseFormData, turnstileToken: string) => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        formType: 'market-strategy',
        turnstileToken,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
  }

  return (
    <BaseForm
      formType="market-strategy"
      initialData={initialData}
      onSubmit={handleSubmit}
    >
      {({ formData, setFormData }: { formData: BaseFormData; setFormData: (data: BaseFormData) => void }) => (
        <>
          <FormField
            label="Desired Areas/Zip Codes"
            name="desiredAreas"
            value={formData.desiredAreas || ''}
            onChange={(value) => setFormData({ ...formData, desiredAreas: value })}
            placeholder="e.g., Miami, FL or 33101, 33102"
            required
          />
          <FormSelect
            label="Investing Strategy"
            name="investingStrategy"
            value={formData.investingStrategy || ''}
            onChange={(value) => setFormData({ ...formData, investingStrategy: value })}
            options={[
              { value: 'wholesaling', label: 'Wholesaling' },
              { value: 'fix-and-flip', label: 'Fix & Flip' },
              { value: 'buy-and-hold', label: 'Buy & Hold' },
              { value: 'creative-finance', label: 'Creative Finance' },
              { value: 'other', label: 'Other' },
            ]}
            required
          />
        </>
      )}
    </BaseForm>
  )
}

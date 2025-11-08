import BaseForm, { FormField, BaseFormData } from './BaseForm'

interface CustomPackageFormProps {
  callers: string
  managers: string
}

export default function CustomPackageForm({ callers, managers }: CustomPackageFormProps) {
  const initialData: BaseFormData = {
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    coldCallers: callers,
    acquisitionManagers: managers,
  }

  const handleSubmit = async (data: BaseFormData, turnstileToken: string) => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        formType: 'custom-package',
        turnstileToken,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
  }

  return (
    <BaseForm
      formType="custom-package"
      initialData={initialData}
      onSubmit={handleSubmit}
    >
      {({ formData, setFormData }: { formData: BaseFormData; setFormData: (data: BaseFormData) => void }) => (
        <>
          <FormField
            label="Number of Cold Callers"
            name="coldCallers"
            value={formData.coldCallers || ''}
            onChange={(value) => setFormData({ ...formData, coldCallers: value })}
            placeholder="e.g., 3"
          />

          <FormField
            label="Number of Acquisition Managers"
            name="acquisitionManagers"
            value={formData.acquisitionManagers || ''}
            onChange={(value) => setFormData({ ...formData, acquisitionManagers: value })}
            placeholder="e.g., 1"
          />
        </>
      )}
    </BaseForm>
  )
}

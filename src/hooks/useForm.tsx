/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ChangeEvent, FormEvent, useState } from 'react'

export type FieldValidation = {
  condition: (value: string) => boolean
  message: string
}[]

type ErroRecord<T> = Record<keyof T, string[]>
type ValidatedRecord<T> = Record<keyof T, { valid: boolean }>

export const useForm = <T extends Record<string, any>>(options?: {
  initialValues?: Partial<T>
  validations?: Partial<Record<keyof T, FieldValidation>>
  onSubmit?: () => void
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T)
  const [errors, setErrors] = useState<ErroRecord<T>>({} as ErroRecord<T>)
  const [validated, setValidated] = useState<ValidatedRecord<T>>(
    {} as ValidatedRecord<T>
  )
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (key: keyof T) => (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setData({
      ...data,
      [key]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validations = options?.validations

    setErrors({} as ErroRecord<T>)
    setValidated({} as ValidatedRecord<T>)

    if (validations) {
      for (const field in validations) {
        const fieldValue = String(data[field]) ?? ''

        if (validations[field]) {
          let fieldErrors: string[] = [] // Move a linha para dentro deste bloco

          for (const validation of validations[field]!) {
            const { condition, message } = validation

            if (condition(fieldValue) && fieldErrors.indexOf(message) === -1) {
              fieldErrors.push(message)
            } else {
              fieldErrors = fieldErrors.filter((error) => error !== message)
            }
          }

          if (fieldErrors.length > 0) {
            setValidated((prev) => ({ ...prev, [field]: { valid: false } }))
            setErrors((prevErrors) => ({ ...prevErrors, [field]: fieldErrors }))
          }
          setValidated((prev) => ({ ...prev, [field]: { valid: true } }))
        }
      }
    }

    if (options?.onSubmit) {
      options.onSubmit()
    }
  }

  return {
    handleSubmit,
    handleChange,
    setIsSubmitting,
    data,
    errors,
    isSubmitting,
    validated
  }
}

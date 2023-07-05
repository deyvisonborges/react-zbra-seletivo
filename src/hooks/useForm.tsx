/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ChangeEvent, FormEvent, useState } from 'react'

/* eslint-disable no-prototype-builtins */
export type FieldValidation = {
  condition: (value: string) => boolean
  message: string
}[]

type ErroRecord<T extends {}> = Record<
  keyof Record<keyof T, string[]>,
  string[]
>

export const useForm = <TFields extends Record<string, unknown>>(options?: {
  initialValues?: Partial<TFields>
  validations?: Partial<Record<keyof TFields, FieldValidation>>
}) => {
  const [data, setData] = useState(options?.initialValues || ({} as TFields))
  const [errors, setErrors] = useState<ErroRecord<TFields>>(
    {} as ErroRecord<TFields>
  )

  const handleChange =
    (key: keyof TFields) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setData((prev) => ({ ...prev, [key]: value }))
    }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const fieldsErrors: ErroRecord<TFields> = {} as ErroRecord<TFields>

    for (const field in options?.validations) {
      if (options.validations.hasOwnProperty(field)) {
        const fieldValidations = options.validations[field]
        const fieldValue = String(data[field]) ?? ''
        let fieldErrors: string[] = []

        for (const validation of fieldValidations!) {
          const { condition, message } = validation

          if (condition(fieldValue) && fieldErrors.indexOf(message) === -1) {
            fieldErrors.push(message)
          } else {
            fieldErrors = fieldErrors.filter((error) => error !== message)
          }
        }

        if (fieldErrors.length > 0) {
          fieldsErrors[field] = fieldErrors
        }
      }

      if (fieldsErrors) {
        setErrors((prev) => ({ ...prev, ...fieldsErrors }))
        return
      } else {
        setErrors({} as ErroRecord<TFields>)
      }
    }
  }

  return { handleSubmit, handleChange, data, errors }
}

import { createFieldValidations } from './utils/createFieldValidations'

export const passwordValidations = createFieldValidations([
  {
    condition: (value) => value.length <= 0,
    message: 'Este campo é obrigatório'
  },
  {
    condition: (value) => value.length > 6 || value.length < 6,
    message: 'A senha deve ter 6 dígitos'
  }
])

import { createFieldValidations } from './utils/createFieldValidations'

export const nameValidations = createFieldValidations([
  {
    condition: (value) => value.length <= 0,
    message: 'Este campo é obrigatório'
  }
])

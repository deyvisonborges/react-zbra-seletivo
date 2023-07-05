import { createFieldValidations } from './utils/createFieldValidations'
import { validateEmail } from './utils/validators/validateEmail'

export const emailValidations = createFieldValidations([
  {
    condition: (value) => value.length <= 0,
    message: 'Este campo é obrigatório'
  },
  {
    condition: (value) => !validateEmail(value),
    message: 'O e-mail informado é inválido'
  }
])

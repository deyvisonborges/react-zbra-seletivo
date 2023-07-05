import { createFieldValidations } from './utils/createFieldValidations'
import { hasAdjacent } from './utils/hasAdjacent'
import { validateOrdenation } from './utils/validators/validateOrdenation'
import { validatePasswordRange } from './utils/validators/validatePasswordRange'

export const passwordValidations = createFieldValidations([
  {
    condition: (value) => value.length <= 0,
    message: 'Este campo é obrigatório'
  },
  {
    condition: (value) => value.length > 6 || value.length < 6,
    message: 'A senha deve conter 6 dígitos'
  },
  {
    condition: (value) => !hasAdjacent(Number(value)),
    message: 'Senha deve conter 2 dígitos adjacentes iguais'
  },
  {
    condition: (value) => !validateOrdenation(value),
    message:
      'A senha deve conter dígitos numa sequência crescrente ou do mesmo valor'
  },
  {
    condition: (value) => !validatePasswordRange(Number(value)),
    message: 'A senha deve estar entre os números 184759 e 856920'
  }
])

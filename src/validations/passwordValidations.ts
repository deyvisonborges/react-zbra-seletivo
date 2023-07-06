import { createFieldValidations } from './utils/createFieldValidations'
import { validateHasAdjacent } from './utils/validators/validateHasAdjacent'
import { validateOrdination } from './utils/validators/validateOrdination'
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
    condition: (value) => !validateHasAdjacent(Number(value)),
    message: 'Senha deve conter 2 dígitos adjacentes iguais'
  },
  {
    condition: (value) => !validateOrdination(value),
    message:
      'A senha deve conter dígitos numa sequência crescrente ou do mesmo valor'
  },
  {
    condition: (value) => !validatePasswordRange(Number(value)),
    message: 'A senha deve estar entre os números 184759 e 856920'
  }
])

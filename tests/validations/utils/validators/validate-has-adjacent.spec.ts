import { describe, test, expect } from 'vitest'
import { validateHasAdjacent } from '../../../../src/validations/utils/validators/validateHasAdjacent'

describe('validator / validateHasAdjacent', () => {
  test('should return true if number has adjacent digits', () => {
    const result = validateHasAdjacent(112233)
    expect(result).toBe(true)
  })

  test('should return false if number does not have adjacent digits', () => {
    const result = validateHasAdjacent(123456)
    expect(result).toBe(false)
  })
})

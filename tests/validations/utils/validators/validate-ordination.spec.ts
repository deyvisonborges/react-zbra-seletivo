import { describe, test, expect } from 'vitest'
import { validateOrdination } from '../../../../src/validations/utils/validators/validateOrdination'

describe('validateOrdination', () => {
  test('should return true if string is in ascending order', () => {
    const result = validateOrdination('123456')
    expect(result).toBe(true)
  })

  test('should return false if string is not in ascending order', () => {
    const result = validateOrdination('654321')
    expect(result).toBe(false)
  })
})

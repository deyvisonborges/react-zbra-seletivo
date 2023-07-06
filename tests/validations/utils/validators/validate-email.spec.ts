import { describe, test, expect } from 'vitest'
import { validateEmail } from '../../../../src/validations/utils/validators/validateEmail'

describe('validator / validateEmail', () => {
  test('should return true for valid email', () => {
    const result = validateEmail('deyv@email.com')
    expect(result).toBe(true)
  })

  test('should return false for invalid email', () => {
    const result = validateEmail('@emailaleatorio.com')
    expect(result).toBe(false)
  })
})

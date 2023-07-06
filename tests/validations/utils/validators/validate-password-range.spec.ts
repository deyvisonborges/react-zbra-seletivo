import { describe, test, expect } from 'vitest'
import { validatePasswordRange } from '../../../../src/validations/utils/validators/validatePasswordRange'

describe('validatePasswordRange', () => {
  test('should return true if password is within the range', () => {
    const result = validatePasswordRange(500000)
    expect(result).toBe(true)
  })

  test('should return false if password is below the range', () => {
    const result = validatePasswordRange(100000)
    expect(result).toBe(false)
  })

  test('should return false if password is above the range', () => {
    const result = validatePasswordRange(900000)
    expect(result).toBe(false)
  })
})

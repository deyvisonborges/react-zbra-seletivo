import { describe, expect, test } from 'vitest'
import { onlyNumbers } from '../../../../src/validations/utils/sanitizers/onlyNumber'

describe('sanitizer / onlyNumbers', () => {
  test('should remove non-numeric characters', () => {
    const result = onlyNumbers('123abc456def')
    expect(result).toBe('123456')
  })
})

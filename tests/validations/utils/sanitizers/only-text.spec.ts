import { onlyText } from '../../../../src/validations/utils/sanitizers/onlyText'

describe('sanitizer / onlyText', () => {
  test('should remove numeric characters', () => {
    const result = onlyText('123abc456def')
    expect(result).toBe('abcdef')
  })
})

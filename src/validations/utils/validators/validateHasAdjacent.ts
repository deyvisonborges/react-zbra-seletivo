export function validateHasAdjacent(value: number): boolean {
  const digits = String(value)

  for (let i = 0; i < digits.length - 1; i++) {
    if (Number(digits[i]) === Number(digits[i + 1])) {
      return true
    }
  }

  return false
}

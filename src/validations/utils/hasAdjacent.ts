export function hasAdjacent(value: number) {
  const digits = String(value)

  for (let i = 0; i < digits.length - 1; i++) {
    if (Math.abs(Number(digits[i]) - Number(digits[i + 1])) === 1) {
      return true
    }
  }

  return false
}

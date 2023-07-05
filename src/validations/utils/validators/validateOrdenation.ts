export function validateOrdenation(value: string): boolean {
  let isValid = true

  for (let i = 0; i < value.length - 1; i++) {
    if (value[i] > value[i + 1]) {
      isValid = false
      break
    }
  }

  return isValid
}

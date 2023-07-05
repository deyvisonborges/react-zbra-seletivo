export function onlyNumbers(value: string | number) {
  return String(value).replace(/\D/g, '')
}

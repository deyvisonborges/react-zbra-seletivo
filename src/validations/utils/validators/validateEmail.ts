export function validateEmail(value: string) {
  const rgx = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
  if (rgx.test(value)) return true
  return false
}

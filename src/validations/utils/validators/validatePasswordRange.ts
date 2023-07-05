export function validatePasswordRange(password: number): boolean {
  const minPassword = 184759
  const maxPassword = 856920

  return password >= minPassword && password <= maxPassword
}

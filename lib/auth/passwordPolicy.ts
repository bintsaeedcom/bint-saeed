export const PASSWORD_MIN_LENGTH = 8

export type PasswordValidationResult =
  | { ok: true }
  | { ok: false; error: string }

/** Shared email/password policy for register + login validation. */
export function validatePassword(password: string): PasswordValidationResult {
  if (!password || typeof password !== 'string') {
    return { ok: false, error: 'Password is required.' }
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    return { ok: false, error: `Password must be at least ${PASSWORD_MIN_LENGTH} characters.` }
  }
  if (!/[A-Z]/.test(password)) {
    return { ok: false, error: 'Password must include at least one capital letter.' }
  }
  if (!/[0-9]/.test(password)) {
    return { ok: false, error: 'Password must include at least one number.' }
  }
  return { ok: true }
}

export function passwordsMatch(password: string, confirmPassword: string): boolean {
  return password === confirmPassword
}

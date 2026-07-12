export type AuthProvider = 'email' | 'google'

export type VerifyPayload = {
  email: string
  passwordHash: string
  name: string
}

/** One-shot password reset token payload (email only — hash set on submit). */
export type PasswordResetPayload = {
  email: string
}

export type VerifiedUserRecord = {
  passwordHash?: string
  name: string
  verifiedAt: string
  authProvider: AuthProvider
  googleId?: string
  picture?: string
}

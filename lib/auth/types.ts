export type VerifyPayload = {
  email: string
  passwordHash: string
  name?: string
}

export type VerifiedUserRecord = {
  passwordHash: string
  name?: string
  verifiedAt: string
}

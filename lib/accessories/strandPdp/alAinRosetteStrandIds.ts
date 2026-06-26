export const AL_AIN_ROSETTE_STRAND_IDS = [
  'signature-strand-sunstone',
  'signature-strand-rose-quartz',
  'signature-strand-malachite',
  'signature-strand-lapis-lazuli',
] as const

export type AlAinRosetteStrandId = (typeof AL_AIN_ROSETTE_STRAND_IDS)[number]

const SET = new Set<string>(AL_AIN_ROSETTE_STRAND_IDS)

export function isAlAinRosetteStrandId(id: string): id is AlAinRosetteStrandId {
  return SET.has(id)
}

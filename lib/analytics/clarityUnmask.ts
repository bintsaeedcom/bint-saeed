/**
 * Microsoft Clarity Balanced masking hides numbers (prices look like "0,000 AED" in recordings).
 * Public catalogue prices are not PII — unmask them so session review matches what shoppers see.
 * @see https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-masking
 */
export const clarityUnmaskPriceProps = {
  'data-clarity-unmask': 'true',
} as const

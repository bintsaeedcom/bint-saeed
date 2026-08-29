import { buildReadablePlace, type PlaceLocationInput } from '@/lib/geo/resolvePlaceNames'

export type VisitorLocationParts = PlaceLocationInput

/** e.g. "Khalifa City, Abu Dhabi, United Arab Emirates" */
export function formatVisitorLocation(location: VisitorLocationParts): string {
  return buildReadablePlace(location).line
}

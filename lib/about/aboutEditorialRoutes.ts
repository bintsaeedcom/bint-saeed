/** About Us editorial pages that share flush hero + topic nav chrome */
export const ABOUT_EDITORIAL_ROUTES = [
  '/about',
  '/the-codes',
  '/craftsmanship',
  '/personalisation',
  '/giving-forward',
  '/contact',
] as const

export function isAboutEditorialRoute(pathname: string): boolean {
  return (ABOUT_EDITORIAL_ROUTES as readonly string[]).includes(pathname)
}

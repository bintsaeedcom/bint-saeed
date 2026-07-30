/** Google Tag Manager container — set NEXT_PUBLIC_GTM_CONTAINER_ID to override. */
export const GTM_CONTAINER_ID =
  process.env.NEXT_PUBLIC_GTM_CONTAINER_ID?.trim() || 'GTM-PS953D4R'

export function isGtmConfigured(): boolean {
  return /^GTM-[A-Z0-9]+$/i.test(GTM_CONTAINER_ID)
}

/**
 * Inline boot: Consent Mode defaults (denied) then official GTM snippet.
 * Must run as high in <head> as possible, before any tags fire.
 */
export function buildGtmHeadBootstrapScript(containerId: string): string {
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w.gtag=w.gtag||function(){w[l].push(arguments);};
w.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${containerId}');`
}

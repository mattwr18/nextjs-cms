export const fallbackLng = 'de';
export const languages = [fallbackLng, 'en'];
export const defaultNS = 'translation';
export const cookieName = 'preferredLanguage';

export function getOptions(lng: string = fallbackLng, ns: string = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

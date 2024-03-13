'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { languages } from '@/app/i18n/settings';

export default function LanguageSwitcher({ lng }: { lng: string }) {
  const pathname = usePathname();
  const regexFromMyArray = new RegExp(languages.join('|'), 'gi');
  const searchParams = useSearchParams();

  const newPath = (l: string) => {
    const clonedPathname = pathname;
    const params = searchParams.toString();

    if (searchParams) {
      return `${clonedPathname.replace(regexFromMyArray, l)}?${params}`;
    }
    return `${clonedPathname.replace(regexFromMyArray, l)}`;
  };

  return (
    <>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={newPath(l)}>{l}</Link>
            </span>
          );
        })}
    </>
  );
}

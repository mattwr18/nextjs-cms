'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { languages } from '@/app/i18n/settings';

export default function LanguageSwitcher({ lng }: { lng: string }) {
  const pathname = usePathname();
  const regexFromMyArray = new RegExp(languages.join('|'), 'gi');
  const searchParams = useSearchParams();

  return (
    <>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link
                href={`${pathname.replace(regexFromMyArray, l)}?${searchParams}`}
              >
                {l}
              </Link>
            </span>
          );
        })}
    </>
  );
}

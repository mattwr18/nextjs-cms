'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import styles from './PageHeader.module.scss';

export default function PageHeader({
  children,
  className,
  tabBarItems,
}: {
  children: React.ReactNode;
  className?: string;
  tabBarItems?: Array<{
    name: string;
    count?: number;
    searchParam?: { name: string; value: string };
  }>;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const tabBarListItemClass = (searchParam?: { name: string; value: string }) => {
    if (!searchParam) return styles.tabBarListItem;
    if (searchParams.get(searchParam.name) == searchParam.value) {
      return `${styles.activeTabBarListItem}`;
    }
    return styles.tabBarListItem;
  };
  return (
    <header className={`${styles.pageHeader} ${className ? className : ''}`}>
      {tabBarItems ? (
        <>
          <div className={styles.flexBox}>{children}</div>
          <div>
            <nav>
              <ul className={styles.tabBarList}>
                {tabBarItems.map(({ name, count, searchParam }) => (
                  <li key={name} className={tabBarListItemClass(searchParam)}>
                    {searchParam ? (
                      <Link
                        className={styles.tabBarButtons}
                        href={`${pathname}?${createQueryString(searchParam.name, searchParam.value)}`}
                      >
                        {name}
                      </Link>
                    ) : (
                      <button className={styles.tabBarButtons}>{name}</button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      ) : (
        children
      )}
    </header>
  );
}

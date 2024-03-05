import Link from 'next/link';
import { useTranslation } from '@/app/i18n';
import styles from './NavBar.module.scss';

export default async function NavBar({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);
  const navLinks = [
    { name: t('nav-bar-links.dashboard'), href: `/${lng}` },
    { name: t('nav-bar-links.contributors'), href: `/${lng}/contributors` },
    { name: t('nav-bar-links.dialogue'), href: `/${lng}/requests` },
  ];

  return (
    <nav className={styles.mainHeader}>
      <ul className={styles.list}>
        {navLinks.map(({ name, href }) => {
          return (
            <li key={name} className={styles.listItem}>
              <Link href={href} className={styles.link}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

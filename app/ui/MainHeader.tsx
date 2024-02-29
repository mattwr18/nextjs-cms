import Link from 'next/link';
import styles from './MainHeader.module.scss';

export default function MainHeader() {
  const navLinks = [
    { name: 'Dashboard', href: '/' },
    { name: 'Contributors', href: '/contributors' },
    { name: 'Dialog', href: '/requests' },
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

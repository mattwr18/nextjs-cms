import Link from 'next/link';
import styles from './MainHeader.module.scss';

export default function MainHeader() {
  return (
    <nav className={styles.mainHeader}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href='/' className={styles.link}>
            Dashboard
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/contributors' className={styles.link}>
            Community
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/requests' className={styles.link}>
            Dialog
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/admin' className={styles.link}>
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

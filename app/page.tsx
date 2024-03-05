import Link from 'next/link';
import PageHeader from './ui/PageHeader';
import styles from './page.module.scss';

export default function Page() {
  return (
    <main className={styles.main}>
      <PageHeader className={styles.pageHeader}>
        <h1>Guten Morgen, Matthew</h1>
        <Link href='/requests/new' className={styles.newRequestLink}>
          Neue Frage stellen
        </Link>
      </PageHeader>
    </main>
  );
}

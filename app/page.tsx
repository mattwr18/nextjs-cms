import PageHeader from './ui/PageHeader';
import styles from './page.module.scss';

export default function Page() {
  return (
    <main className={styles.main}>
      <PageHeader>
        <h1>Guten Morgen, Matthew</h1>
      </PageHeader>
    </main>
  );
}

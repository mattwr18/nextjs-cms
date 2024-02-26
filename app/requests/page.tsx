import Link from 'next/link';
import PageHeader from '../ui/PageHeader';
import styles from './page.module.scss';

const tabBarItems = () => {
  return [{ name: 'Gestellt' }, { name: 'Geplant' }];
};

export default function Page() {
  return (
    <main className={styles.main}>
      <PageHeader tabBarItems={tabBarItems()}>
        <div>
          <h1>Fragen</h1>
          <p>Die besten Fragen an deine Community</p>
        </div>
        <Link href='/' className={styles.newRequestLink}>
          Neue Frage stellen
        </Link>
      </PageHeader>
    </main>
  );
}

import { fetchContributors } from '../lib/data';
import PageHeader from '../ui/PageHeader';
import CopyButton from '../ui/CopyButton';
import ContributorsList from '../ui/ContributorsList';
import styles from './page.module.scss';

const tabBarItems = () => {
  return [
    { name: 'Aktiv' },
    { name: 'Inaktiv' },
    { name: 'Abbestellt' },
    { name: 'filtern' },
  ];
};

export default async function Page() {
  const contributors = await fetchContributors();

  return (
    <main className={styles.main}>
      <PageHeader tabBarItems={tabBarItems()}>
        <div>
          <h1>Mitglieder</h1>
          <p>Das sind die Mitglieder deiner Community</p>
        </div>
        <CopyButton text='Einladung kopieren' />
      </PageHeader>
      <section className={styles.contributorsListSection}>
        <ContributorsList contributors={contributors} />
      </section>
    </main>
  );
}

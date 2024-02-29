import {
  fetchContributors,
  fetchActiveContributorsCount,
  fetchInactiveContributorsCount,
  fetchUnsubscribedContributorsCount,
} from '../lib/data';
import PageHeader from '../ui/PageHeader';
import CopyButton from '../ui/CopyButton';
import ContributorsList from '../ui/ContributorsList';
import styles from './page.module.scss';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    state?: string;
  };
}) {
  const query = searchParams?.state || '';
  const [
    activeContributorsCount,
    inactiveContributorsCount,
    unsubscribedContributorsCount,
  ] = await Promise.all([
    fetchActiveContributorsCount(),
    fetchInactiveContributorsCount(),
    fetchUnsubscribedContributorsCount(),
  ]);
  const contributors = await fetchContributors(query);
  console.log('activeContributorsCount', activeContributorsCount);
  const tabBarItems = [
    {
      name: 'Aktiv',
      count: activeContributorsCount,
      searchParam: { name: 'state', value: 'active' },
    },
    {
      name: 'Inaktiv',
      count: inactiveContributorsCount,
      searchParam: { name: 'state', value: 'inactive' },
    },
    {
      name: 'Abbestellt',
      count: unsubscribedContributorsCount,
      searchParam: { name: 'state', value: 'unsubscribed' },
    },
    { name: 'filtern' },
  ];

  return (
    <main className={styles.main}>
      <PageHeader tabBarItems={tabBarItems}>
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

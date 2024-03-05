import Link from 'next/link';
import {
  fetchRequests,
  fetchSentRequestsCount,
  fetchPlannedRequestsCount,
} from '../lib/data';
import PageHeader from '../ui/PageHeader';
import RequestsList from '../ui/RequestsList';
import styles from './page.module.scss';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const query = searchParams?.filter || '';

  const [sentRequestsCount, plannedRequestsCount] = await Promise.all([
    fetchSentRequestsCount(),
    fetchPlannedRequestsCount(),
  ]);
  const tabBarItems = [
    {
      name: 'Gestellt',
      count: sentRequestsCount,
      searchParam: { name: 'filter', value: 'sent' },
    },
    {
      name: 'Geplant',
      count: plannedRequestsCount,
      searchParam: { name: 'filter', value: 'planned' },
    },
  ];

  const requests = await fetchRequests(query);

  return (
    <main className={styles.main}>
      <PageHeader tabBarItems={tabBarItems}>
        <div>
          <h1>Fragen</h1>
          <p>Die besten Fragen an deine Community</p>
        </div>
        <Link href='/requests/new' className={styles.newRequestLink}>
          Neue Frage stellen
        </Link>
      </PageHeader>
      <section className={styles.requestsListSection}>
        <RequestsList requests={requests} />
      </section>
    </main>
  );
}

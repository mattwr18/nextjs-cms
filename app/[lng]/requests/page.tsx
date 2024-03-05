import Link from 'next/link';
import { useTranslation } from '@/app/i18n';
import {
  fetchRequests,
  fetchSentRequestsCount,
  fetchPlannedRequestsCount,
} from '@/app/[lng]/lib/data';
import PageHeader from '@/app/[lng]/ui/PageHeader';
import RequestsList from '@/app/[lng]/ui/RequestsList';
import styles from './page.module.scss';

export default async function Page({
  searchParams,
  params: { lng },
}: {
  searchParams?: {
    filter?: string;
  };
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng, 'requests');
  const query = searchParams?.filter || '';

  const [sentRequestsCount, plannedRequestsCount] = await Promise.all([
    fetchSentRequestsCount(),
    fetchPlannedRequestsCount(),
  ]);
  const tabBarItems = [
    {
      name: t('tab-bar-items.sent'),
      count: sentRequestsCount,
      searchParam: { name: 'filter', value: 'sent' },
    },
    {
      name: t('tab-bar-items.planned'),
      count: plannedRequestsCount,
      searchParam: { name: 'filter', value: 'planned' },
    },
  ];

  const requests = await fetchRequests(query);

  return (
    <main className={styles.main}>
      <PageHeader tabBarItems={tabBarItems}>
        <div>
          <h1>{t('main-heading')}</h1>
          <p>{t('header-explanation')}</p>
        </div>
        <Link href={`/${lng}/requests/new`} className={styles.newRequestLink}>
          {t('new-request-button-text')}
        </Link>
      </PageHeader>
      <section className={styles.requestsListSection}>
        <RequestsList requests={requests} lng={lng} />
      </section>
    </main>
  );
}

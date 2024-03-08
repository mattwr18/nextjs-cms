import Link from 'next/link';
import { useTranslation } from '@/app/i18n';
import { findManyRequest, requestsCount } from '@/app/lib/data';
import { getClient } from '@/app/lib/ApolloClient';
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

  const [
    {
      data: { countRequest: sentRequestsCount },
    },
    {
      data: { countRequest: plannedRequestsCount },
    },
  ] = await Promise.all([
    getClient().query({
      query: requestsCount,
      variables: { filter: { broadcasted_at: { not: null } } },
    }),
    getClient().query({
      query: requestsCount,
      variables: {
        filter: { schedule_send_for: { gt: new Date().toISOString() } },
      },
    }),
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
  const filter =
    query == 'planned'
      ? { schedule_send_for: { gt: new Date().toISOString() } }
      : { broadcasted_at: { not: null } };
  const {
    data: { findManyRequest: requests },
  } = await getClient().query({
    query: findManyRequest,
    variables: { filter },
  });
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

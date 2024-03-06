import { useTranslation } from '@/app/i18n';
import {
  fetchContributors,
  fetchActiveContributorsCount,
  fetchInactiveContributorsCount,
  fetchUnsubscribedContributorsCount,
} from '@/app/lib/data';
import PageHeader from '@/app/[lng]/ui/PageHeader';
import CopyButton from '@/app/[lng]/ui/CopyButton';
import ContributorsList from '@/app/[lng]/ui/ContributorsList';
import styles from './page.module.scss';

export default async function Page({
  searchParams,
  params: { lng },
}: {
  searchParams?: {
    state?: string;
  };
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, 'contributors');
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
  const tabBarItems = [
    {
      name: t('tab-bar-items.active'),
      count: activeContributorsCount,
      searchParam: { name: 'state', value: 'active' },
    },
    {
      name: t('tab-bar-items.inactive'),
      count: inactiveContributorsCount,
      searchParam: { name: 'state', value: 'inactive' },
    },
    {
      name: t('tab-bar-items.unsubscribed'),
      count: unsubscribedContributorsCount,
      searchParam: { name: 'state', value: 'unsubscribed' },
    },
    { name: t('tab-bar-items.filter') },
  ];

  return (
    <main className={styles.main}>
      <PageHeader tabBarItems={tabBarItems}>
        <div>
          <h1>{t('main-heading')}</h1>
          <p>{t('header-explanation')}</p>
        </div>
        <CopyButton text={t('copy-button-text')} />
      </PageHeader>
      <section className={styles.contributorsListSection}>
        <ContributorsList contributors={contributors} lng={lng} />
      </section>
    </main>
  );
}

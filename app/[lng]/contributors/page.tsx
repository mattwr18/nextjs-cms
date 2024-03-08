import { useTranslation } from '@/app/i18n';
import { getClient } from '@/app/lib/ApolloClient';
import {
  findManyContributor,
  contributorsCount,
} from '@/app/api/graphql/queries';
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
    {
      data: { countContributor: activeContributorsCount },
    },
    {
      data: { countContributor: inactiveContributorsCount },
    },
    {
      data: { countContributor: unsubscribedContributorsCount },
    },
  ] = await Promise.all([
    getClient().query({
      query: contributorsCount,
      variables: { where: { deactivated_at: null, unsubscribed_at: null } },
    }),
    getClient().query({
      query: contributorsCount,
      variables: { where: { deactivated_at: { not: null } } },
    }),
    getClient().query({
      query: contributorsCount,
      variables: { where: { unsubscribed_at: { not: null } } },
    }),
  ]);

  const where = () => {
    switch (query) {
      case 'inactive':
        return { deactivated_at: { not: null } };
      case 'unsubscribed':
        return { unsubscribed_at: { not: null } };
      default:
        return { deactivated_at: null, unsubscribed_at: null };
    }
  };
  const {
    data: { findManyContributor: contributors },
  } = await getClient().query({
    query: findManyContributor,
    variables: { where: where() },
  });
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

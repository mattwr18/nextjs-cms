import ContributorRow from './ContributorRow';
import { getClient } from '@/app/lib/ApolloClient';
import { findManyContributor } from '@/app/api/graphql/queries';
import styles from './ContributorsList.module.scss';

export default async function ContributorsList({
  query,
  lng,
}: {
  query: string;
  lng: string;
}) {
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
  console.log('contributors', contributors);
  return (
    <ul className={styles.list}>
      {contributors.map((contributor) => {
        return (
          <li key={contributor.id}>
            <ContributorRow contributor={contributor} lng={lng} />
          </li>
        );
      })}
    </ul>
  );
}

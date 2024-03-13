import { getClient } from '@/app/lib/ApolloClient';
import { findManyRequest } from '@/app/api/graphql/queries';
import RequestRow from './RequestRow';
import styles from './RequestsList.module.scss';

export default async function RequestsList({
  query,
  lng,
}: {
  query: string;
  lng: string;
}) {
  const where =
    query == 'planned'
      ? { schedule_send_for: { gt: new Date().toISOString() } }
      : { broadcasted_at: { not: null } };
  const {
    data: { findManyRequest: requests },
  } = await getClient().query({
    query: findManyRequest,
    variables: { where },
  });
  return (
    <ul className={styles.requestList}>
      {requests.map((request) => {
        return (
          <li key={request.id} className={styles.requestListItem}>
            <RequestRow request={request} lng={lng} />
          </li>
        );
      })}
    </ul>
  );
}

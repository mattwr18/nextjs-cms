import { Request } from '@/app/[lng]/lib/definitions';
import RequestRow from './RequestRow';
import styles from './RequestsList.module.scss';

export default function RequestsList({
  requests,
  lng,
}: {
  requests: Array<Request>;
  lng: string;
}) {
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

import { Request } from '../lib/definitions';
import RequestRow from './RequestRow';
import styles from './RequestsList.module.scss';

export default function RequestsList({
  requests,
}: {
  requests: Array<Request>;
}) {
  return (
    <ul className={styles.requestList}>
      {requests.map((request) => {
        return (
          <li key={request.id} className={styles.requestListItem}>
            <RequestRow request={request} />
          </li>
        );
      })}
    </ul>
  );
}

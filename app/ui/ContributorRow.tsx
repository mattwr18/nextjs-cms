import Link from 'next/link';
import Avatar from './Avatar';
import { fullName } from '../lib/utils';
import styles from './ContributorRow.module.scss';

export default function ContributorRow({
  contributor,
}: {
  contributor: { id: string; first_name: string; last_name: string };
}) {
  return (
    <Link href={`/contributors/${contributor.id}`} className={styles.row}>
      <Avatar record={contributor} />
      <div>
        <strong>
          {fullName({
            firstName: contributor.first_name,
            lastName: contributor.last_name,
          })}
        </strong>
      </div>
    </Link>
  );
}

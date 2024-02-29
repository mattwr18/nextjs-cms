import Link from 'next/link';
import Avatar from './Avatar';
import { fullName, contributorChannels } from '../lib/utils';
import { Contributor } from '../lib/definitions';
import styles from './ContributorRow.module.scss';

export default function ContributorRow({
  contributor,
}: {
  contributor: Contributor;
}) {
  return (
    <Link href={`/contributors/${contributor.id}`} className={styles.row}>
      <Avatar record={contributor} />
      <div>
        <strong className={styles.name}>
          {fullName({
            firstName: contributor.first_name,
            lastName: contributor.last_name,
          })}
        </strong>
        <span className={styles.channel}>
          via {contributorChannels(contributor)}
        </span>
      </div>
    </Link>
  );
}

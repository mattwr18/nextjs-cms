import Link from 'next/link';
import Avatar from './Avatar';
import styles from './ContributorRow.module.scss';

export default function ContributorRow({
  contributor,
}: {
  contributor: { id: string; first_name: string; last_name: string };
}) {
  const fullName = (contributor: {
    id: string;
    first_name: string;
    last_name: string;
  }) => {
    return `${contributor.first_name} ${contributor.last_name}`;
  };
  return (
    <Link href={`/contributors/${contributor.id}`} className={styles.row}>
      <Avatar record={contributor} />
      <div>
        <strong>{fullName(contributor)}</strong>
      </div>
    </Link>
  );
}

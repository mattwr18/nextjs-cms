import Link from 'next/link';
import { fetchContributorById } from '@/app/lib/data';
import { fullName } from '@/app/lib/utils';
import Avatar from '@/app/ui/Avatar';
import styles from './page.module.scss';

export default async function Page({ params }: { params: { id: string } }) {
  const contributor = await fetchContributorById(params.id);

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <Avatar record={contributor} />
        <div>
          <h1 className={styles.mainHeader}>
            {fullName({
              firstName: contributor.first_name,
              lastName: contributor.last_name,
            })}
          </h1>
          <p>Mitglied seit 06.02.2024</p>
          <Link
            href={`/contributors/${params.id}/edit`}
            className={styles.headerLink}
          >
            Stammdaten bearbeiten
          </Link>
        </div>
      </header>
    </main>
  );
}

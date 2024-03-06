import Link from 'next/link';
import { useTranslation } from '@/app/i18n';
import { fetchContributorById } from '@/app/lib/data';
import { fullName } from '@/app/lib/utils';
import Avatar from '@/app/[lng]/ui/Avatar';
import styles from './page.module.scss';

export default async function Page({
  params: { id, lng },
}: {
  params: { id: string; lng: string };
}) {
  const { t } = await useTranslation(lng, 'contributor');
  const contributor = await fetchContributorById(id);
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
          <p>
            {t('contributor-since-date', {
              date: contributor.created_at.toLocaleDateString('de'),
              interpolation: { escapeValue: false },
            })}
          </p>
          <Link
            href={`/${lng}/contributors/${id}/edit`}
            className={styles.headerLink}
          >
            {t('edit-main-info')}
          </Link>
        </div>
      </header>
    </main>
  );
}

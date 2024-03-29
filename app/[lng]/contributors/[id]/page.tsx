import Link from 'next/link';
import { useTranslation } from '@/app/i18n';
import { getClient } from '@/app/lib/ApolloClient';
import { findUniqueContributor } from '@/app/api/graphql/queries';
import { fullName } from '@/app/lib/utils';
import Avatar from '@/app/[lng]/ui/Avatar';
import styles from './page.module.scss';

export default async function Page({
  params: { id, lng },
}: {
  params: { id: string; lng: string };
}) {
  const { t } = await useTranslation(lng, 'contributor');
  const {
    data: { findUniqueContributor: contributor },
  } = await getClient().query({
    query: findUniqueContributor,
    variables: { where: { id } },
  });
  if (!contributor) {
    return (
      <main>
        <h1>{t('not-found')}</h1>
      </main>
    );
  }
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
              date: new Date(contributor.created_at).toLocaleDateString('de'),
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

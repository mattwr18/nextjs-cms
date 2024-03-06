import Link from 'next/link';
import { Suspense } from 'react';
import { useTranslation } from '../i18n';
import PageHeader from './ui/PageHeader';
import styles from './page.module.scss';

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <main className={styles.main}>
      <Suspense>
        <PageHeader className={styles.pageHeader}>
          <h1>{t('main-heading', { firstName: 'Matthew' })}</h1>
          <Link href={`/${lng}/requests/new`} className={styles.newRequestLink}>
            {t('new-request-button-text')}
          </Link>
        </PageHeader>
      </Suspense>
    </main>
  );
}

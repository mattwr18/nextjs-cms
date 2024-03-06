import { Suspense } from 'react';
import { useTranslation } from '@/app/i18n';
import PageHeader from '@/app/[lng]/ui/PageHeader';
import RequestForm from '@/app/[lng]/ui/RequestForm';

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, 'request');
  return (
    <main>
      <Suspense>
        <PageHeader>
          <h1>{t('new-request.main-heading')}</h1>
          <p>{t('new-request.header-explanation')}</p>
        </PageHeader>
      </Suspense>
      <RequestForm lng={lng} />
    </main>
  );
}

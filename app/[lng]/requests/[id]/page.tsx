import { getClient } from '@/app/lib/ApolloClient';
import { useTranslation } from '@/app/i18n';
import { findUniqueRequest } from '@/app/api/graphql/queries';

export default async function Page({
  params: { id, lng },
}: {
  params: { id: string; lng: string };
}) {
  const { t } = await useTranslation(lng, 'request');
  const {
    data: { findUniqueRequest: request },
  } = await getClient().query({
    query: findUniqueRequest,
    variables: { where: { id } },
  });
  if (!request) {
    return (
      <main>
        <h1>{t('not-found')}</h1>
      </main>
    );
  }
  return (
    <main>
      <header>
        <h1>{request.title}</h1>
      </header>
    </main>
  );
}

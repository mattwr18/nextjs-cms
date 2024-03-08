import { getClient } from '@/app/lib/ApolloClient';
import { findUniqueRequest } from '@/app/api/graphql/queries';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const {
    data: { findUniqueRequest: request },
  } = await getClient().query({
    query: findUniqueRequest,
    variables: { where: { id } },
  });

  return (
    <main>
      <header>
        <h1>{request.title}</h1>
      </header>
    </main>
  );
}

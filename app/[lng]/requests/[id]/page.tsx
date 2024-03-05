import { fetchRequestById } from '@/app/[lng]/lib/data';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const request = await fetchRequestById(id);

  return (
    <main>
      <header>
        <h1>{request.title}</h1>
      </header>
    </main>
  );
}

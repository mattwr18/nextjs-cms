import { fetchRequestById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const request = await fetchRequestById(params.id);

  return (
    <main>
      <header>
        <h1>{request.title}</h1>
      </header>
    </main>
  );
}

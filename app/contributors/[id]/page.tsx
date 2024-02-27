import { fetchContributorById } from '@/app/lib/data';
import Avatar from '@/app/ui/Avatar';

export default async function Page({ params }: { params: { id: string } }) {
  const contributor = await fetchContributorById(params.id);

  return (
    <header>
      <Avatar record={contributor} />
      <h1>{contributor.first_name}</h1>
    </header>
  );
}

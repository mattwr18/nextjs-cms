import ContributorRow from './ContributorRow';
import { Contributor } from '@/app/[lng]/lib/definitions';

import styles from './ContributorsList.module.scss';

export default function ContributorsList({
  contributors,
  lng,
}: {
  contributors: Array<Contributor>;
  lng: string;
}) {
  return (
    <ul className={styles.list}>
      {contributors.map((contributor) => {
        return (
          <li key={contributor.id}>
            <ContributorRow contributor={contributor} lng={lng} />
          </li>
        );
      })}
    </ul>
  );
}

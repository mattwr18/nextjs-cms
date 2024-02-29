import ContributorRow from './ContributorRow';
import { Contributor } from '../lib/definitions';

import styles from './ContributorsList.module.scss';

export default function ContributorsList({
  contributors,
}: {
  contributors: Array<Contributor>;
}) {
  return (
    <ul className={styles.list}>
      {contributors.map((contributor) => {
        return (
          <li key={contributor.id}>
            <ContributorRow contributor={contributor} />
          </li>
        );
      })}
    </ul>
  );
}

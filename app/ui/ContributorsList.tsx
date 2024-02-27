import ContributorRow from './ContributorRow';
import styles from './ContributorsList.module.scss';

export default function ContributorsList({
  contributors,
}: {
  contributors: Array<{ id: string; first_name: string; last_name: string }>;
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

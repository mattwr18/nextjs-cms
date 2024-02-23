import styles from './PageHeader.module.scss';

export default function PageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <header className={styles.pageHeader}>{children}</header>;
}

import styles from './PageHeader.module.scss';

export default function PageHeader({
  children,
  className,
  tabBarItems,
}: {
  children: React.ReactNode;
  className?: string;
  tabBarItems?: Array<{ name: string }>;
}) {
  return (
    <header className={`${styles.pageHeader} ${className ? className : ''}`}>
      {tabBarItems ? (
        <>
          <div className={styles.flexBox}>{children}</div>
          <div>
            <nav>
              <ul className={styles.tabBarList}>
                {tabBarItems.map(({ name }) => (
                  <li key={name} className={styles.tabBarListItem}>
                    <button className={styles.tabBarButtons}>{name}</button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      ) : (
        children
      )}
    </header>
  );
}

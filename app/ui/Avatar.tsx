import styles from './Avatar.module.scss';

export default function Avatar({
  record,
}: {
  record: { id: string; first_name: string; last_name: string };
}) {
  const colorFromId = (id: string) => {
    const colors = ['#F4C317', '#0898FF', '#67D881', '#F4177A'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const initials = (record: {
    id: string;
    first_name: string;
    last_name: string;
  }) => {
    if (!record) return '?';

    const initials = record.first_name.charAt(0) + record.last_name.charAt(0);

    if (initials.length < 1) return '?';

    return initials;
  };
  return (
    <svg
      className={styles.avatar}
      style={{ backgroundColor: colorFromId(record.id) }}
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <text x='50' y='50'>
        {initials(record)}
      </text>
    </svg>
  );
}

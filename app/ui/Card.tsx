import styles from './Card.module.scss';

export default function Card({ children }: { children: React.ReactNode }) {
  return <article className={styles.card}>{children}</article>;
}

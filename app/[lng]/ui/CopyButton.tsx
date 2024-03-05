import styles from './CopyButton.module.scss';

export default function CopyButton({ text }: { text: string }) {
  return <button className={styles.copyButton}>{text}</button>;
}

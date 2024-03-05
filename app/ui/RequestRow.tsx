import Link from 'next/link';
import { Request } from '../lib/definitions';
import Card from './Card';
import styles from './RequestRow.module.scss';

export default function RequestRow({ request }: { request: Request }) {
  const footerText = () => {
    let text = '';
    const localeOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    console.log('request', request.broadcasted_at);
    if (request.broadcasted_at) {
      text = `Frage gestellt ${request.broadcasted_at.toLocaleDateString('de', localeOptions)} Uhr`;
    } else {
      text = `Frage geplant für ${request.schedule_send_for.toLocaleDateString('de', localeOptions)} Uhr`;
    }
    return text;
  };
  return (
    <Link href={`/requests/${request.id}`} className={styles.row}>
      <Card>
        <h2>{request.title}</h2>
        <p className={styles.textWrapper}>{request.text}</p>
        <footer>
          <p>{footerText()}</p>
        </footer>
      </Card>
    </Link>
  );
}

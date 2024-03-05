import Link from 'next/link';
import { useTranslation } from '@/app/i18n';
import { Request } from '@/app/[lng]/lib/definitions';
import Card from './Card';
import styles from './RequestRow.module.scss';

export default async function RequestRow({
  request: { id, title, text, broadcasted_at, schedule_send_for },
  lng,
}: {
  request: Request;
  lng: string;
}) {
  const { t } = await useTranslation(lng, 'request');
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
    if (broadcasted_at) {
      text = t('request-sent-at', {
        date: broadcasted_at.toLocaleDateString(lng, localeOptions),
      });
    } else {
      text = t('request-planned-for', {
        date: schedule_send_for.toLocaleDateString(lng, localeOptions),
      });
    }
    return text;
  };
  return (
    <Link href={`/${lng}/requests/${id}`} className={styles.row}>
      <Card>
        <h2>{title}</h2>
        <p className={styles.textWrapper}>{text}</p>
        <footer>
          <p>{footerText()}</p>
        </footer>
      </Card>
    </Link>
  );
}

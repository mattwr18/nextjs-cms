import Link from 'next/link';
import { useTranslation } from '@/app/i18n';
import { fullName, contributorChannels } from '@/app/lib/utils';
import Avatar from './Avatar';
import styles from './ContributorRow.module.scss';

export default async function ContributorRow({
  contributor,
  lng,
}: {
  contributor: {
    id: string;
    first_name: string;
    last_name: string;
    email?: string | null | undefined;
    signal_phone_number?: string | null;
    telegram_id?: bigint | null;
    threema_id?: string | null;
    whats_app_phone_number?: string | null;
  };
  lng: string;
}) {
  const { t } = await useTranslation(lng, 'contributor');
  return (
    <Link
      href={`/${lng}/contributors/${contributor.id}`}
      className={styles.row}
    >
      <Avatar record={contributor} />
      <div>
        <strong className={styles.name}>
          {fullName({
            firstName: contributor.first_name,
            lastName: contributor.last_name,
          })}
        </strong>
        <span className={styles.channel}>
          {t('channel', { channel: contributorChannels(contributor) })}
        </span>
      </div>
    </Link>
  );
}

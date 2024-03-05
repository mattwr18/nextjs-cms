import { useTranslation } from '@/app/i18n';
import { Trans } from 'react-i18next/TransWithoutContext';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Footer.module.scss';

export default async function Footer({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, 'footer');

  return (
    <footer className={styles.footer}>
      <Trans
        i18nKey='language-switcher'
        t={t}
        defaultValue='Wechseln von <bold>{{lng}}</bold> nach: '
        values={{ lng }}
        components={{ bold: <strong /> }}
      />
      <LanguageSwitcher lng={lng} />
    </footer>
  );
}

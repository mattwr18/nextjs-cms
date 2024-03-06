import { useTranslation } from '@/app/i18n';
import { convertToDateTimeLocalString } from '@/app/lib/utils';

import styles from './RequestForm.module.scss';

export default async function RequestForm({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, 'request', {
    keyPrefix: 'new-request.form',
  });
  const initialState = { message: null, errors: {} };
  
  return (
    <section className={styles.requestFormSection}>
      <form>
        <label htmlFor='title' className={styles.label}>
          {t('title.label')}
        </label>
        <p className={styles.helpText}>{t('title.help-text')}</p>
        <input
          id='title'
          type='text'
          placeholder={t('title.placeholder')}
          className={styles.input}
          required
        />
        <label htmlFor='text' className={styles.label}>
          {t('text.label')}
        </label>
        <p className={styles.helpText}>{t('text.help-text')}</p>
        <textarea
          id='text'
          placeholder={t('text.placeholder')}
          className={styles.textarea}
          required
        />
        <label htmlFor='schedule-send-for' className={styles.label}>
          {t('schedule-send-for.label')}
        </label>
        <input
          id='schedule-send-for'
          type='datetime-local'
          placeholder={t('schedule-send-for.placeholder')}
          className={styles.input}
          defaultValue={convertToDateTimeLocalString(new Date())}
        />
        <button className={styles.button}>
          {t('submit-button')}
        </button>
      </form>
    </section>
  );
}

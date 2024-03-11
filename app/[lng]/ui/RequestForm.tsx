'use client';

import { useFormState } from 'react-dom';
import { useTranslation } from '@/app/i18n/client';
import { convertToDateTimeLocalString } from '@/app/lib/utils';
import { createRequest } from '@/app/lib/actions';

import styles from './RequestForm.module.scss';

export default function RequestForm({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, 'request', {
    keyPrefix: 'new-request.form',
  });
  const initialState = { message: '', errors: {} };
  const createRequestWithLng = createRequest.bind(null, lng);
  const [state, dispatch] = useFormState(createRequestWithLng, initialState);

  return (
    <section className={styles.requestFormSection}>
      <form action={dispatch}>
        <fieldset className={styles.fieldset}>
          <label htmlFor='title' className={styles.label}>
            {t('title.label')}
          </label>
          <p className={styles.helpText}>{t('title.help-text')}</p>
          <input
            id='title'
            name='title'
            type='text'
            placeholder={t('title.placeholder')}
            className={styles.input}
            // required
            aria-describedby='title-error'
          />
          {state.errors?.title && (
            <div id='title-error' aria-live='polite' aria-atomic='true'>
              {state.errors.title.map((error: string) => (
                <p className={styles.errorMessage} key={error}>
                  {error}
                </p>
              ))}
            </div>
          )}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor='text' className={styles.label}>
            {t('text.label')}
          </label>
          <p className={styles.helpText}>{t('text.help-text')}</p>
          <textarea
            id='text'
            name='text'
            placeholder={t('text.placeholder')}
            className={styles.textarea}
            required
            aria-describedby='text-error'
          />
          {state.errors?.text && (
            <div id='text-error' aria-live='polite' aria-atomic='true'>
              {state.errors.text.map((error: string) => (
                <p className={styles.errorMessage} key={error}>
                  {error}
                </p>
              ))}
            </div>
          )}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor='schedule-send-for' className={styles.label}>
            {t('schedule-send-for.label')}
          </label>
          <input
            id='schedule-send-for'
            name='schedule_send_for'
            type='datetime-local'
            placeholder={t('schedule-send-for.placeholder')}
            className={styles.input}
            defaultValue={convertToDateTimeLocalString(new Date())}
            aria-describedby='schedule-send-for-error'
          />
          {state.errors?.schedule_send_for && (
            <div
              id='schedule-send-for-error'
              aria-live='polite'
              aria-atomic='true'
            >
              {state.errors.schedule_send_for.map((error: string) => (
                <p className={styles.errorMessage} key={error}>
                  {error}
                </p>
              ))}
            </div>
          )}
        </fieldset>
        <button className={styles.button}>{t('submit-button')}</button>
      </form>
    </section>
  );
}

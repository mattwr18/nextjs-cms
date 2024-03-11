'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getClient } from './ApolloClient';
import { createOneRequest } from '@/app/api/graphql/mutations';
import { useTranslation } from '@/app/i18n';

const RequestFormSchema = z.object({
  title: z.string().refine((data) => data.trim() !== '', {
    message: 'Titel erforderlich',
  }),
  text: z
    .string()
    .max(1500)
    .refine((data) => data.trim() !== '', {
      message: 'Text erforderlich',
    }),
  schedule_send_for: z.string(),
  // tags: z.array(z.string()),
});

export type State = {
  errors?: {
    form?: string[];
    title?: string[];
    text?: string[];
    schedule_send_for?: string[];
  };
  message?: string | null;
};

export const createRequest = async (
  lng: string,
  prevState: State,
  formData: FormData,
): Promise<State> => {
  console.log('lng', lng, 'formData', formData);
  const { t } = await useTranslation(lng, 'error');
  const validatedFields = RequestFormSchema.safeParse({
    title: formData.get('title'),
    text: formData.get('text'),
    schedule_send_for: formData.get('schedule_send_for'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    data: { title, text, schedule_send_for },
  } = validatedFields;

  const ISOString = new Date(schedule_send_for).toISOString();

  try {
    const {
      data: { createOneRequest: request },
    } = await getClient().mutate({
      mutation: createOneRequest,
      variables: {
        data: {
          title,
          text,
          schedule_send_for: ISOString,
          user: { connect: { id: 'd30e90e9-168f-4481-aef5-d1abeb592621' } },
        },
      },
    });
  } catch (error) {
    return {
      message: `Database error: ${error}`,
    };
  }
  const path =
    ISOString > new Date().toISOString()
      ? `/${lng}/requests?filter=planned`
      : `/${lng}/requests`;
  revalidatePath(path);
  redirect(path);
};

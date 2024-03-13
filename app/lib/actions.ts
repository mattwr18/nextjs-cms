'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getClient } from './ApolloClient';
import { createOneRequest } from '@/app/api/graphql/mutations';

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
  errors?:
    | {
        form?: string[] | undefined;
        title?: string[] | undefined;
        text?: string[] | undefined;
        schedule_send_for?: string[] | undefined;
      }
    | undefined;
  message?: string | null | undefined;
};

export const createRequest = async (
  lng: string,
  prevState: State,
  formData: FormData,
): Promise<State> => {
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

  const { data } = await getClient().mutate({
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

  if (data && data?.createOneRequest?.id) {
    const path =
      ISOString > new Date().toISOString()
        ? `/${lng}/requests?filter=planned`
        : `/${lng}/requests`;
    revalidatePath(path);
    redirect(path);
  } else {
    return {
      errors: { form: ['Database error'] },
    };
  }
};

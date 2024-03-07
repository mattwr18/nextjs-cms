import { builder } from '../builder';

builder.prismaObject('Contributor', {
  fields: (t) => ({
    id: t.exposeID('id'),
    first_name: t.exposeString('first_name'),
    last_name: t.exposeString('last_name'),
    email: t.exposeString('email', { nullable: true }),
    telegram_chat_id: t.expose('telegram_chat_id', {
      type: 'BigInt',
      nullable: true,
    }),
    created_at: t.expose('created_at', { type: 'DateTime' }),
    updated_at: t.expose('updated_at', { type: 'DateTime' }),
    username: t.exposeString('username', { nullable: true }),
    telegram_id: t.expose('telegram_id', { type: 'BigInt', nullable: true }),
    note: t.exposeString('note', { nullable: true }),
    zip_code: t.exposeString('note', { nullable: true }),
    city: t.exposeString('note', { nullable: true }),
    phone: t.exposeString('note', { nullable: true }),
    deactivated_at: t.expose('deactivated_at', {
      type: 'DateTime',
      nullable: true,
    }),
    threema_id: t.exposeString('threema_id', { nullable: true }),
    data_processing_consented_at: t.expose('data_processing_consented_at', {
      type: 'DateTime',
      nullable: true,
    }),
    telegram_onboarding_token: t.exposeString('telegram_onboarding_token', {
      nullable: true,
    }),
    signal_phone_number: t.exposeString('signal_phone_number', {
      nullable: true,
    }),
    signal_onboarding_completed_at: t.expose('signal_onboarding_completed_at', {
      type: 'DateTime',
      nullable: true,
    }),
    additional_email: t.exposeString('additional_email', { nullable: true }),
    additional_consent_given_at: t.expose('additional_consent_given_at', {
      type: 'DateTime',
      nullable: true,
    }),
    organization_id: t.exposeString('organization_id', { nullable: true }),
    whats_app_phone_number: t.exposeString('whats_app_phone_number', {
      nullable: true,
    }),
    whats_app_message_template_responded_at: t.expose(
      'whats_app_message_template_responded_at',
      { type: 'DateTime', nullable: true },
    ),
    deactivated_by_user_id: t.exposeString('deactivated_by_user_id', {
      nullable: true,
    }),
    deactivated_by_admin: t.exposeBoolean('deactivated_by_admin'),
    whats_app_message_template_sent_at: t.expose(
      'whats_app_message_template_sent_at',
      { type: 'DateTime', nullable: true },
    ),
    unsubscribed_at: t.expose('unsubscribed_at', {
      type: 'DateTime',
      nullable: true,
    }),
    tags: t.relation('tags'),
  }),
});

builder.queryField('contributors', (t) =>
  t.prismaField({
    type: ['Contributor'],
    resolve: (query, _parent, _args, _ctx) =>
      prisma.contributor.findMany({ ...query }),
  }),
);

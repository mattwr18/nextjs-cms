import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const ContributorObject = definePrismaObject('Contributor', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(ContributorIdFieldObject),
    first_name: t.field(ContributorFirst_nameFieldObject),
    last_name: t.field(ContributorLast_nameFieldObject),
    email: t.field(ContributorEmailFieldObject),
    telegram_chat_id: t.field(ContributorTelegram_chat_idFieldObject),
    created_at: t.field(ContributorCreated_atFieldObject),
    updated_at: t.field(ContributorUpdated_atFieldObject),
    username: t.field(ContributorUsernameFieldObject),
    telegram_id: t.field(ContributorTelegram_idFieldObject),
    note: t.field(ContributorNoteFieldObject),
    zip_code: t.field(ContributorZip_codeFieldObject),
    city: t.field(ContributorCityFieldObject),
    phone: t.field(ContributorPhoneFieldObject),
    deactivated_at: t.field(ContributorDeactivated_atFieldObject),
    threema_id: t.field(ContributorThreema_idFieldObject),
    data_processing_consented_at: t.field(
      ContributorData_processing_consented_atFieldObject,
    ),
    telegram_onboarding_token: t.field(
      ContributorTelegram_onboarding_tokenFieldObject,
    ),
    signal_phone_number: t.field(ContributorSignal_phone_numberFieldObject),
    signal_onboarding_completed_at: t.field(
      ContributorSignal_onboarding_completed_atFieldObject,
    ),
    additional_email: t.field(ContributorAdditional_emailFieldObject),
    additional_consent_given_at: t.field(
      ContributorAdditional_consent_given_atFieldObject,
    ),
    organization_id: t.field(ContributorOrganization_idFieldObject),
    whats_app_phone_number: t.field(
      ContributorWhats_app_phone_numberFieldObject,
    ),
    whats_app_message_template_responded_at: t.field(
      ContributorWhats_app_message_template_responded_atFieldObject,
    ),
    deactivated_by_user_id: t.field(
      ContributorDeactivated_by_user_idFieldObject,
    ),
    deactivated_by_admin: t.field(ContributorDeactivated_by_adminFieldObject),
    whats_app_message_template_sent_at: t.field(
      ContributorWhats_app_message_template_sent_atFieldObject,
    ),
    unsubscribed_at: t.field(ContributorUnsubscribed_atFieldObject),
    tags: t.relation('tags', ContributorTagsFieldObject(t)),
  }),
});

export const ContributorIdFieldObject = defineFieldObject('Contributor', {
  type: 'ID',
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const ContributorFirst_nameFieldObject = defineFieldObject(
  'Contributor',
  {
    type: 'String',
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.first_name,
  },
);

export const ContributorLast_nameFieldObject = defineFieldObject(
  'Contributor',
  {
    type: 'String',
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.last_name,
  },
);

export const ContributorEmailFieldObject = defineFieldObject('Contributor', {
  type: 'String',
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.email,
});

export const ContributorTelegram_chat_idFieldObject = defineFieldObject(
  'Contributor',
  {
    type: Inputs.Bigint,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.telegram_chat_id,
  },
);

export const ContributorCreated_atFieldObject = defineFieldObject(
  'Contributor',
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.created_at,
  },
);

export const ContributorUpdated_atFieldObject = defineFieldObject(
  'Contributor',
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.updated_at,
  },
);

export const ContributorUsernameFieldObject = defineFieldObject('Contributor', {
  type: 'String',
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.username,
});

export const ContributorTelegram_idFieldObject = defineFieldObject(
  'Contributor',
  {
    type: Inputs.Bigint,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.telegram_id,
  },
);

export const ContributorNoteFieldObject = defineFieldObject('Contributor', {
  type: 'String',
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.note,
});

export const ContributorZip_codeFieldObject = defineFieldObject('Contributor', {
  type: 'String',
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.zip_code,
});

export const ContributorCityFieldObject = defineFieldObject('Contributor', {
  type: 'String',
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.city,
});

export const ContributorPhoneFieldObject = defineFieldObject('Contributor', {
  type: 'String',
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.phone,
});

export const ContributorDeactivated_atFieldObject = defineFieldObject(
  'Contributor',
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.deactivated_at,
  },
);

export const ContributorThreema_idFieldObject = defineFieldObject(
  'Contributor',
  {
    type: 'String',
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.threema_id,
  },
);

export const ContributorData_processing_consented_atFieldObject =
  defineFieldObject('Contributor', {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.data_processing_consented_at,
  });

export const ContributorTelegram_onboarding_tokenFieldObject =
  defineFieldObject('Contributor', {
    type: 'String',
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.telegram_onboarding_token,
  });

export const ContributorSignal_phone_numberFieldObject = defineFieldObject(
  'Contributor',
  {
    type: 'String',
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.signal_phone_number,
  },
);

export const ContributorSignal_onboarding_completed_atFieldObject =
  defineFieldObject('Contributor', {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.signal_onboarding_completed_at,
  });

export const ContributorAdditional_emailFieldObject = defineFieldObject(
  'Contributor',
  {
    type: 'String',
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.additional_email,
  },
);

export const ContributorAdditional_consent_given_atFieldObject =
  defineFieldObject('Contributor', {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.additional_consent_given_at,
  });

export const ContributorOrganization_idFieldObject = defineFieldObject(
  'Contributor',
  {
    type: 'String',
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.organization_id,
  },
);

export const ContributorWhats_app_phone_numberFieldObject = defineFieldObject(
  'Contributor',
  {
    type: 'String',
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.whats_app_phone_number,
  },
);

export const ContributorWhats_app_message_template_responded_atFieldObject =
  defineFieldObject('Contributor', {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.whats_app_message_template_responded_at,
  });

export const ContributorDeactivated_by_user_idFieldObject = defineFieldObject(
  'Contributor',
  {
    type: 'String',
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.deactivated_by_user_id,
  },
);

export const ContributorDeactivated_by_adminFieldObject = defineFieldObject(
  'Contributor',
  {
    type: 'Boolean',
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.deactivated_by_admin,
  },
);

export const ContributorWhats_app_message_template_sent_atFieldObject =
  defineFieldObject('Contributor', {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.whats_app_message_template_sent_at,
  });

export const ContributorUnsubscribed_atFieldObject = defineFieldObject(
  'Contributor',
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.unsubscribed_at,
  },
);

export const ContributorTagsFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.TagWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.TagOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.TagWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.TagScalarFieldEnum], required: false }),
}));

export const ContributorTagsFieldObject = defineRelationFunction(
  'Contributor',
  (t) =>
    defineRelationObject('Contributor', 'tags', {
      description: undefined,
      nullable: false,
      args: ContributorTagsFieldArgs,
      query: (args) => ({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
    }),
);

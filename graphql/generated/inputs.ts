// @ts-nocheck
import { Prisma } from '.prisma/client';

import { builder } from '../builder';

type Filters = {
  string: Prisma.StringFieldUpdateOperationsInput;
  nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
  dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
  nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
  int: Prisma.IntFieldUpdateOperationsInput;
  nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
  bool: Prisma.BoolFieldUpdateOperationsInput;
  nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
  bigInt: Prisma.BigIntFieldUpdateOperationsInput;
  nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
  bytes: Prisma.BytesFieldUpdateOperationsInput;
  nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
  float: Prisma.FloatFieldUpdateOperationsInput;
  nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
  decimal: Prisma.DecimalFieldUpdateOperationsInput;
  nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};

type ApplyFilters<InputField> = {
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
      ? Filters[F]
      : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never]
    ? T[K]
    : ApplyFilters<T[K]>;
};

export const DateTime = builder.scalarType('DateTime', {
  parseValue: (value) => {
    try {
      const date = new Date(value);
      if (date.toString() === 'Invalid Date') throw new Error('Invalid Date');
      return date;
    } catch (error) {
      throw new Error('Invalid Date');
    }
  },
  serialize: (value) => (value ? new Date(value) : null),
});

export const Bigint = builder.scalarType('BigInt', {
  serialize: (value) => value.toString(),
  parseValue: (value) => {
    try {
      return BigInt(value);
    } catch (error) {
      throw new Error('Invalid Bigint');
    }
  },
});

export const TransactionIsolationLevel = builder.enumType(
  'TransactionIsolationLevel',
  {
    values: [
      'ReadUncommitted',
      'ReadCommitted',
      'RepeatableRead',
      'Serializable',
    ] as const,
  },
);

export const UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
  values: [
    'id',
    'first_name',
    'last_name',
    'email',
    'password',
    'role',
    'created_at',
    'updated_at',
  ] as const,
});

export const TagScalarFieldEnum = builder.enumType('TagScalarFieldEnum', {
  values: ['id', 'name', 'created_at', 'updated_at'] as const,
});

export const ContributorScalarFieldEnum = builder.enumType(
  'ContributorScalarFieldEnum',
  {
    values: [
      'id',
      'first_name',
      'last_name',
      'email',
      'telegram_chat_id',
      'created_at',
      'updated_at',
      'username',
      'telegram_id',
      'note',
      'zip_code',
      'city',
      'phone',
      'deactivated_at',
      'threema_id',
      'data_processing_consented_at',
      'telegram_onboarding_token',
      'signal_phone_number',
      'signal_onboarding_completed_at',
      'additional_email',
      'additional_consent_given_at',
      'organization_id',
      'whats_app_phone_number',
      'whats_app_message_template_responded_at',
      'deactivated_by_user_id',
      'deactivated_by_admin',
      'whats_app_message_template_sent_at',
      'unsubscribed_at',
    ] as const,
  },
);

export const RequestScalarFieldEnum = builder.enumType(
  'RequestScalarFieldEnum',
  {
    values: [
      'id',
      'title',
      'text',
      'created_at',
      'updated_at',
      'user_id',
      'schedule_send_for',
      'broadcasted_at',
    ] as const,
  },
);

export const SortOrder = builder.enumType('SortOrder', {
  values: ['asc', 'desc'] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ['default', 'insensitive'] as const,
});

export const NullsOrder = builder.enumType('NullsOrder', {
  values: ['first', 'last'] as const,
});

export const Role = builder.enumType('Role', {
  values: ['USER', 'ADMIN'] as const,
});

export const UserWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [UserWhereInput] }),
  OR: t.field({ required: false, type: [UserWhereInput] }),
  NOT: t.field({ required: false, type: [UserWhereInput] }),
  id: t.field({ required: false, type: StringFilter }),
  first_name: t.field({ required: false, type: StringFilter }),
  last_name: t.field({ required: false, type: StringFilter }),
  email: t.field({ required: false, type: StringFilter }),
  password: t.field({ required: false, type: StringFilter }),
  role: t.field({ required: false, type: EnumRoleFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  requests: t.field({ required: false, type: RequestListRelationFilter }),
});
export const UserWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserWhereInput>,
    false
  >('UserWhereInput')
  .implement({
    fields: UserWhereInputFields,
  });

export const UserOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  password: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  requests: t.field({
    required: false,
    type: RequestOrderByRelationAggregateInput,
  }),
});
export const UserOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithRelationInput>,
    false
  >('UserOrderByWithRelationInput')
  .implement({
    fields: UserOrderByWithRelationInputFields,
  });

export const UserWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  email: t.string({ required: false }),
  AND: t.field({ required: false, type: [UserWhereInput] }),
  OR: t.field({ required: false, type: [UserWhereInput] }),
  NOT: t.field({ required: false, type: [UserWhereInput] }),
  first_name: t.field({ required: false, type: StringFilter }),
  last_name: t.field({ required: false, type: StringFilter }),
  password: t.field({ required: false, type: StringFilter }),
  role: t.field({ required: false, type: EnumRoleFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  requests: t.field({ required: false, type: RequestListRelationFilter }),
});
export const UserWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserWhereUniqueInput>,
    false
  >('UserWhereUniqueInput')
  .implement({
    fields: UserWhereUniqueInputFields,
  });

export const UserOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  password: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  _count: t.field({ required: false, type: UserCountOrderByAggregateInput }),
  _max: t.field({ required: false, type: UserMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: UserMinOrderByAggregateInput }),
});
export const UserOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithAggregationInput>,
    false
  >('UserOrderByWithAggregationInput')
  .implement({
    fields: UserOrderByWithAggregationInputFields,
  });

export const UserScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [UserScalarWhereWithAggregatesInput] }),
  OR: t.field({ required: false, type: [UserScalarWhereWithAggregatesInput] }),
  NOT: t.field({ required: false, type: [UserScalarWhereWithAggregatesInput] }),
  id: t.field({ required: false, type: StringWithAggregatesFilter }),
  first_name: t.field({ required: false, type: StringWithAggregatesFilter }),
  last_name: t.field({ required: false, type: StringWithAggregatesFilter }),
  email: t.field({ required: false, type: StringWithAggregatesFilter }),
  password: t.field({ required: false, type: StringWithAggregatesFilter }),
  role: t.field({ required: false, type: EnumRoleWithAggregatesFilter }),
  created_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updated_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
});
export const UserScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserScalarWhereWithAggregatesInput>,
    false
  >('UserScalarWhereWithAggregatesInput')
  .implement({
    fields: UserScalarWhereWithAggregatesInputFields,
  });

export const TagWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [TagWhereInput] }),
  OR: t.field({ required: false, type: [TagWhereInput] }),
  NOT: t.field({ required: false, type: [TagWhereInput] }),
  id: t.field({ required: false, type: StringFilter }),
  name: t.field({ required: false, type: StringFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  contributors: t.field({
    required: false,
    type: ContributorListRelationFilter,
  }),
  requests: t.field({ required: false, type: RequestListRelationFilter }),
});
export const TagWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagWhereInput>,
    false
  >('TagWhereInput')
  .implement({
    fields: TagWhereInputFields,
  });

export const TagOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  contributors: t.field({
    required: false,
    type: ContributorOrderByRelationAggregateInput,
  }),
  requests: t.field({
    required: false,
    type: RequestOrderByRelationAggregateInput,
  }),
});
export const TagOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagOrderByWithRelationInput>,
    false
  >('TagOrderByWithRelationInput')
  .implement({
    fields: TagOrderByWithRelationInputFields,
  });

export const TagWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  name: t.string({ required: false }),
  AND: t.field({ required: false, type: [TagWhereInput] }),
  OR: t.field({ required: false, type: [TagWhereInput] }),
  NOT: t.field({ required: false, type: [TagWhereInput] }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  contributors: t.field({
    required: false,
    type: ContributorListRelationFilter,
  }),
  requests: t.field({ required: false, type: RequestListRelationFilter }),
});
export const TagWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagWhereUniqueInput>,
    false
  >('TagWhereUniqueInput')
  .implement({
    fields: TagWhereUniqueInputFields,
  });

export const TagOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  _count: t.field({ required: false, type: TagCountOrderByAggregateInput }),
  _max: t.field({ required: false, type: TagMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: TagMinOrderByAggregateInput }),
});
export const TagOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagOrderByWithAggregationInput>,
    false
  >('TagOrderByWithAggregationInput')
  .implement({
    fields: TagOrderByWithAggregationInputFields,
  });

export const TagScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [TagScalarWhereWithAggregatesInput] }),
  OR: t.field({ required: false, type: [TagScalarWhereWithAggregatesInput] }),
  NOT: t.field({ required: false, type: [TagScalarWhereWithAggregatesInput] }),
  id: t.field({ required: false, type: StringWithAggregatesFilter }),
  name: t.field({ required: false, type: StringWithAggregatesFilter }),
  created_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updated_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
});
export const TagScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagScalarWhereWithAggregatesInput>,
    false
  >('TagScalarWhereWithAggregatesInput')
  .implement({
    fields: TagScalarWhereWithAggregatesInputFields,
  });

export const ContributorWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [ContributorWhereInput] }),
  OR: t.field({ required: false, type: [ContributorWhereInput] }),
  NOT: t.field({ required: false, type: [ContributorWhereInput] }),
  id: t.field({ required: false, type: StringFilter }),
  first_name: t.field({ required: false, type: StringFilter }),
  last_name: t.field({ required: false, type: StringFilter }),
  email: t.field({ required: false, type: StringNullableFilter }),
  telegram_chat_id: t.field({ required: false, type: BigIntNullableFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  username: t.field({ required: false, type: StringNullableFilter }),
  telegram_id: t.field({ required: false, type: BigIntNullableFilter }),
  note: t.field({ required: false, type: StringNullableFilter }),
  zip_code: t.field({ required: false, type: StringNullableFilter }),
  city: t.field({ required: false, type: StringNullableFilter }),
  phone: t.field({ required: false, type: StringNullableFilter }),
  deactivated_at: t.field({ required: false, type: DateTimeNullableFilter }),
  threema_id: t.field({ required: false, type: StringNullableFilter }),
  data_processing_consented_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  telegram_onboarding_token: t.field({
    required: false,
    type: StringNullableFilter,
  }),
  signal_phone_number: t.field({ required: false, type: StringNullableFilter }),
  signal_onboarding_completed_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  additional_email: t.field({ required: false, type: StringNullableFilter }),
  additional_consent_given_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  organization_id: t.field({ required: false, type: StringNullableFilter }),
  whats_app_phone_number: t.field({
    required: false,
    type: StringNullableFilter,
  }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  deactivated_by_user_id: t.field({
    required: false,
    type: StringNullableFilter,
  }),
  deactivated_by_admin: t.field({ required: false, type: BoolFilter }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  unsubscribed_at: t.field({ required: false, type: DateTimeNullableFilter }),
  tags: t.field({ required: false, type: TagListRelationFilter }),
});
export const ContributorWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorWhereInput>,
    false
  >('ContributorWhereInput')
  .implement({
    fields: ContributorWhereInputFields,
  });

export const ContributorOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  telegram_chat_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  username: t.field({ required: false, type: SortOrder }),
  telegram_id: t.field({ required: false, type: SortOrder }),
  note: t.field({ required: false, type: SortOrder }),
  zip_code: t.field({ required: false, type: SortOrder }),
  city: t.field({ required: false, type: SortOrder }),
  phone: t.field({ required: false, type: SortOrder }),
  deactivated_at: t.field({ required: false, type: SortOrder }),
  threema_id: t.field({ required: false, type: SortOrder }),
  data_processing_consented_at: t.field({ required: false, type: SortOrder }),
  telegram_onboarding_token: t.field({ required: false, type: SortOrder }),
  signal_phone_number: t.field({ required: false, type: SortOrder }),
  signal_onboarding_completed_at: t.field({ required: false, type: SortOrder }),
  additional_email: t.field({ required: false, type: SortOrder }),
  additional_consent_given_at: t.field({ required: false, type: SortOrder }),
  organization_id: t.field({ required: false, type: SortOrder }),
  whats_app_phone_number: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: SortOrder,
  }),
  deactivated_by_user_id: t.field({ required: false, type: SortOrder }),
  deactivated_by_admin: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: SortOrder,
  }),
  unsubscribed_at: t.field({ required: false, type: SortOrder }),
  tags: t.field({ required: false, type: TagOrderByRelationAggregateInput }),
});
export const ContributorOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorOrderByWithRelationInput>,
    false
  >('ContributorOrderByWithRelationInput')
  .implement({
    fields: ContributorOrderByWithRelationInputFields,
  });

export const ContributorWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  AND: t.field({ required: false, type: [ContributorWhereInput] }),
  OR: t.field({ required: false, type: [ContributorWhereInput] }),
  NOT: t.field({ required: false, type: [ContributorWhereInput] }),
  first_name: t.field({ required: false, type: StringFilter }),
  last_name: t.field({ required: false, type: StringFilter }),
  email: t.field({ required: false, type: StringNullableFilter }),
  telegram_chat_id: t.field({ required: false, type: BigIntNullableFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  username: t.field({ required: false, type: StringNullableFilter }),
  telegram_id: t.field({ required: false, type: BigIntNullableFilter }),
  note: t.field({ required: false, type: StringNullableFilter }),
  zip_code: t.field({ required: false, type: StringNullableFilter }),
  city: t.field({ required: false, type: StringNullableFilter }),
  phone: t.field({ required: false, type: StringNullableFilter }),
  deactivated_at: t.field({ required: false, type: DateTimeNullableFilter }),
  threema_id: t.field({ required: false, type: StringNullableFilter }),
  data_processing_consented_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  telegram_onboarding_token: t.field({
    required: false,
    type: StringNullableFilter,
  }),
  signal_phone_number: t.field({ required: false, type: StringNullableFilter }),
  signal_onboarding_completed_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  additional_email: t.field({ required: false, type: StringNullableFilter }),
  additional_consent_given_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  organization_id: t.field({ required: false, type: StringNullableFilter }),
  whats_app_phone_number: t.field({
    required: false,
    type: StringNullableFilter,
  }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  deactivated_by_user_id: t.field({
    required: false,
    type: StringNullableFilter,
  }),
  deactivated_by_admin: t.field({ required: false, type: BoolFilter }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  unsubscribed_at: t.field({ required: false, type: DateTimeNullableFilter }),
  tags: t.field({ required: false, type: TagListRelationFilter }),
});
export const ContributorWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorWhereUniqueInput>,
    false
  >('ContributorWhereUniqueInput')
  .implement({
    fields: ContributorWhereUniqueInputFields,
  });

export const ContributorOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  telegram_chat_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  username: t.field({ required: false, type: SortOrder }),
  telegram_id: t.field({ required: false, type: SortOrder }),
  note: t.field({ required: false, type: SortOrder }),
  zip_code: t.field({ required: false, type: SortOrder }),
  city: t.field({ required: false, type: SortOrder }),
  phone: t.field({ required: false, type: SortOrder }),
  deactivated_at: t.field({ required: false, type: SortOrder }),
  threema_id: t.field({ required: false, type: SortOrder }),
  data_processing_consented_at: t.field({ required: false, type: SortOrder }),
  telegram_onboarding_token: t.field({ required: false, type: SortOrder }),
  signal_phone_number: t.field({ required: false, type: SortOrder }),
  signal_onboarding_completed_at: t.field({ required: false, type: SortOrder }),
  additional_email: t.field({ required: false, type: SortOrder }),
  additional_consent_given_at: t.field({ required: false, type: SortOrder }),
  organization_id: t.field({ required: false, type: SortOrder }),
  whats_app_phone_number: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: SortOrder,
  }),
  deactivated_by_user_id: t.field({ required: false, type: SortOrder }),
  deactivated_by_admin: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: SortOrder,
  }),
  unsubscribed_at: t.field({ required: false, type: SortOrder }),
  _count: t.field({
    required: false,
    type: ContributorCountOrderByAggregateInput,
  }),
  _avg: t.field({ required: false, type: ContributorAvgOrderByAggregateInput }),
  _max: t.field({ required: false, type: ContributorMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: ContributorMinOrderByAggregateInput }),
  _sum: t.field({ required: false, type: ContributorSumOrderByAggregateInput }),
});
export const ContributorOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorOrderByWithAggregationInput>,
    false
  >('ContributorOrderByWithAggregationInput')
  .implement({
    fields: ContributorOrderByWithAggregationInputFields,
  });

export const ContributorScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [ContributorScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [ContributorScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [ContributorScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: StringWithAggregatesFilter }),
  first_name: t.field({ required: false, type: StringWithAggregatesFilter }),
  last_name: t.field({ required: false, type: StringWithAggregatesFilter }),
  email: t.field({ required: false, type: StringNullableWithAggregatesFilter }),
  telegram_chat_id: t.field({
    required: false,
    type: BigIntNullableWithAggregatesFilter,
  }),
  created_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updated_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  username: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  telegram_id: t.field({
    required: false,
    type: BigIntNullableWithAggregatesFilter,
  }),
  note: t.field({ required: false, type: StringNullableWithAggregatesFilter }),
  zip_code: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  city: t.field({ required: false, type: StringNullableWithAggregatesFilter }),
  phone: t.field({ required: false, type: StringNullableWithAggregatesFilter }),
  deactivated_at: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
  threema_id: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  data_processing_consented_at: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
  telegram_onboarding_token: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  signal_phone_number: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  signal_onboarding_completed_at: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
  additional_email: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  additional_consent_given_at: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
  organization_id: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  whats_app_phone_number: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
  deactivated_by_user_id: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  deactivated_by_admin: t.field({
    required: false,
    type: BoolWithAggregatesFilter,
  }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
  unsubscribed_at: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
});
export const ContributorScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorScalarWhereWithAggregatesInput>,
    false
  >('ContributorScalarWhereWithAggregatesInput')
  .implement({
    fields: ContributorScalarWhereWithAggregatesInputFields,
  });

export const RequestWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [RequestWhereInput] }),
  OR: t.field({ required: false, type: [RequestWhereInput] }),
  NOT: t.field({ required: false, type: [RequestWhereInput] }),
  id: t.field({ required: false, type: StringFilter }),
  title: t.field({ required: false, type: StringFilter }),
  text: t.field({ required: false, type: StringNullableFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  user_id: t.field({ required: false, type: StringFilter }),
  schedule_send_for: t.field({ required: false, type: DateTimeFilter }),
  broadcasted_at: t.field({ required: false, type: DateTimeNullableFilter }),
  user: t.field({ required: false, type: UserWhereInput }),
  tags: t.field({ required: false, type: TagListRelationFilter }),
});
export const RequestWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestWhereInput>,
    false
  >('RequestWhereInput')
  .implement({
    fields: RequestWhereInputFields,
  });

export const RequestOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  text: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  user_id: t.field({ required: false, type: SortOrder }),
  schedule_send_for: t.field({ required: false, type: SortOrder }),
  broadcasted_at: t.field({ required: false, type: SortOrder }),
  user: t.field({ required: false, type: UserOrderByWithRelationInput }),
  tags: t.field({ required: false, type: TagOrderByRelationAggregateInput }),
});
export const RequestOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestOrderByWithRelationInput>,
    false
  >('RequestOrderByWithRelationInput')
  .implement({
    fields: RequestOrderByWithRelationInputFields,
  });

export const RequestWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  AND: t.field({ required: false, type: [RequestWhereInput] }),
  OR: t.field({ required: false, type: [RequestWhereInput] }),
  NOT: t.field({ required: false, type: [RequestWhereInput] }),
  title: t.field({ required: false, type: StringFilter }),
  text: t.field({ required: false, type: StringNullableFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  user_id: t.field({ required: false, type: StringFilter }),
  schedule_send_for: t.field({ required: false, type: DateTimeFilter }),
  broadcasted_at: t.field({ required: false, type: DateTimeNullableFilter }),
  user: t.field({ required: false, type: UserWhereInput }),
  tags: t.field({ required: false, type: TagListRelationFilter }),
});
export const RequestWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestWhereUniqueInput>,
    false
  >('RequestWhereUniqueInput')
  .implement({
    fields: RequestWhereUniqueInputFields,
  });

export const RequestOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  text: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  user_id: t.field({ required: false, type: SortOrder }),
  schedule_send_for: t.field({ required: false, type: SortOrder }),
  broadcasted_at: t.field({ required: false, type: SortOrder }),
  _count: t.field({ required: false, type: RequestCountOrderByAggregateInput }),
  _max: t.field({ required: false, type: RequestMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: RequestMinOrderByAggregateInput }),
});
export const RequestOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestOrderByWithAggregationInput>,
    false
  >('RequestOrderByWithAggregationInput')
  .implement({
    fields: RequestOrderByWithAggregationInputFields,
  });

export const RequestScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [RequestScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [RequestScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [RequestScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: StringWithAggregatesFilter }),
  title: t.field({ required: false, type: StringWithAggregatesFilter }),
  text: t.field({ required: false, type: StringNullableWithAggregatesFilter }),
  created_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updated_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  user_id: t.field({ required: false, type: StringWithAggregatesFilter }),
  schedule_send_for: t.field({
    required: false,
    type: DateTimeWithAggregatesFilter,
  }),
  broadcasted_at: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
});
export const RequestScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestScalarWhereWithAggregatesInput>,
    false
  >('RequestScalarWhereWithAggregatesInput')
  .implement({
    fields: RequestScalarWhereWithAggregatesInputFields,
  });

export const UserCreateInputFields = (t: any) => ({
  id: t.string({ required: false }),
  first_name: t.string({ required: true }),
  last_name: t.string({ required: true }),
  email: t.string({ required: true }),
  password: t.string({ required: true }),
  role: t.field({ required: false, type: Role }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  requests: t.field({
    required: false,
    type: RequestCreateNestedManyWithoutUserInput,
  }),
});
export const UserCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateInput>,
    false
  >('UserCreateInput')
  .implement({
    fields: UserCreateInputFields,
  });

export const UserUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  first_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  last_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  email: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  password: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  role: t.field({ required: false, type: EnumRoleFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  requests: t.field({
    required: false,
    type: RequestUpdateManyWithoutUserNestedInput,
  }),
});
export const UserUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateInput>,
    false
  >('UserUpdateInput')
  .implement({
    fields: UserUpdateInputFields,
  });

export const UserCreateManyInputFields = (t: any) => ({
  id: t.string({ required: false }),
  first_name: t.string({ required: true }),
  last_name: t.string({ required: true }),
  email: t.string({ required: true }),
  password: t.string({ required: true }),
  role: t.field({ required: false, type: Role }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
});
export const UserCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateManyInput>,
    false
  >('UserCreateManyInput')
  .implement({
    fields: UserCreateManyInputFields,
  });

export const UserUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  first_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  last_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  email: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  password: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  role: t.field({ required: false, type: EnumRoleFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
});
export const UserUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyMutationInput>,
    false
  >('UserUpdateManyMutationInput')
  .implement({
    fields: UserUpdateManyMutationInputFields,
  });

export const TagCreateInputFields = (t: any) => ({
  id: t.string({ required: false }),
  name: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  contributors: t.field({
    required: false,
    type: ContributorCreateNestedManyWithoutTagsInput,
  }),
  requests: t.field({
    required: false,
    type: RequestCreateNestedManyWithoutTagsInput,
  }),
});
export const TagCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagCreateInput>,
    false
  >('TagCreateInput')
  .implement({
    fields: TagCreateInputFields,
  });

export const TagUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  contributors: t.field({
    required: false,
    type: ContributorUpdateManyWithoutTagsNestedInput,
  }),
  requests: t.field({
    required: false,
    type: RequestUpdateManyWithoutTagsNestedInput,
  }),
});
export const TagUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateInput>,
    false
  >('TagUpdateInput')
  .implement({
    fields: TagUpdateInputFields,
  });

export const TagCreateManyInputFields = (t: any) => ({
  id: t.string({ required: false }),
  name: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
});
export const TagCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagCreateManyInput>,
    false
  >('TagCreateManyInput')
  .implement({
    fields: TagCreateManyInputFields,
  });

export const TagUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
});
export const TagUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateManyMutationInput>,
    false
  >('TagUpdateManyMutationInput')
  .implement({
    fields: TagUpdateManyMutationInputFields,
  });

export const ContributorCreateInputFields = (t: any) => ({
  id: t.string({ required: false }),
  first_name: t.string({ required: true }),
  last_name: t.string({ required: true }),
  email: t.string({ required: false }),
  telegram_chat_id: t.field({ required: false, type: Bigint }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  username: t.string({ required: false }),
  telegram_id: t.field({ required: false, type: Bigint }),
  note: t.string({ required: false }),
  zip_code: t.string({ required: false }),
  city: t.string({ required: false }),
  phone: t.string({ required: false }),
  deactivated_at: t.field({ required: false, type: DateTime }),
  threema_id: t.string({ required: false }),
  data_processing_consented_at: t.field({ required: false, type: DateTime }),
  telegram_onboarding_token: t.string({ required: false }),
  signal_phone_number: t.string({ required: false }),
  signal_onboarding_completed_at: t.field({ required: false, type: DateTime }),
  additional_email: t.string({ required: false }),
  additional_consent_given_at: t.field({ required: false, type: DateTime }),
  organization_id: t.string({ required: false }),
  whats_app_phone_number: t.string({ required: false }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: DateTime,
  }),
  deactivated_by_user_id: t.string({ required: false }),
  deactivated_by_admin: t.boolean({ required: false }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: DateTime,
  }),
  unsubscribed_at: t.field({ required: false, type: DateTime }),
  tags: t.field({
    required: false,
    type: TagCreateNestedManyWithoutContributorsInput,
  }),
});
export const ContributorCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorCreateInput>,
    false
  >('ContributorCreateInput')
  .implement({
    fields: ContributorCreateInputFields,
  });

export const ContributorUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  first_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  last_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  telegram_chat_id: t.field({
    required: false,
    type: NullableBigIntFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  username: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  telegram_id: t.field({
    required: false,
    type: NullableBigIntFieldUpdateOperationsInput,
  }),
  note: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  zip_code: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  city: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  phone: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  deactivated_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  threema_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  data_processing_consented_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  telegram_onboarding_token: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  signal_phone_number: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  signal_onboarding_completed_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  additional_email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  additional_consent_given_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  organization_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  whats_app_phone_number: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  deactivated_by_user_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  deactivated_by_admin: t.field({
    required: false,
    type: BoolFieldUpdateOperationsInput,
  }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  unsubscribed_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  tags: t.field({
    required: false,
    type: TagUpdateManyWithoutContributorsNestedInput,
  }),
});
export const ContributorUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorUpdateInput>,
    false
  >('ContributorUpdateInput')
  .implement({
    fields: ContributorUpdateInputFields,
  });

export const ContributorCreateManyInputFields = (t: any) => ({
  id: t.string({ required: false }),
  first_name: t.string({ required: true }),
  last_name: t.string({ required: true }),
  email: t.string({ required: false }),
  telegram_chat_id: t.field({ required: false, type: Bigint }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  username: t.string({ required: false }),
  telegram_id: t.field({ required: false, type: Bigint }),
  note: t.string({ required: false }),
  zip_code: t.string({ required: false }),
  city: t.string({ required: false }),
  phone: t.string({ required: false }),
  deactivated_at: t.field({ required: false, type: DateTime }),
  threema_id: t.string({ required: false }),
  data_processing_consented_at: t.field({ required: false, type: DateTime }),
  telegram_onboarding_token: t.string({ required: false }),
  signal_phone_number: t.string({ required: false }),
  signal_onboarding_completed_at: t.field({ required: false, type: DateTime }),
  additional_email: t.string({ required: false }),
  additional_consent_given_at: t.field({ required: false, type: DateTime }),
  organization_id: t.string({ required: false }),
  whats_app_phone_number: t.string({ required: false }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: DateTime,
  }),
  deactivated_by_user_id: t.string({ required: false }),
  deactivated_by_admin: t.boolean({ required: false }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: DateTime,
  }),
  unsubscribed_at: t.field({ required: false, type: DateTime }),
});
export const ContributorCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorCreateManyInput>,
    false
  >('ContributorCreateManyInput')
  .implement({
    fields: ContributorCreateManyInputFields,
  });

export const ContributorUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  first_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  last_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  telegram_chat_id: t.field({
    required: false,
    type: NullableBigIntFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  username: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  telegram_id: t.field({
    required: false,
    type: NullableBigIntFieldUpdateOperationsInput,
  }),
  note: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  zip_code: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  city: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  phone: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  deactivated_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  threema_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  data_processing_consented_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  telegram_onboarding_token: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  signal_phone_number: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  signal_onboarding_completed_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  additional_email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  additional_consent_given_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  organization_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  whats_app_phone_number: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  deactivated_by_user_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  deactivated_by_admin: t.field({
    required: false,
    type: BoolFieldUpdateOperationsInput,
  }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  unsubscribed_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
});
export const ContributorUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorUpdateManyMutationInput>,
    false
  >('ContributorUpdateManyMutationInput')
  .implement({
    fields: ContributorUpdateManyMutationInputFields,
  });

export const RequestCreateInputFields = (t: any) => ({
  id: t.string({ required: false }),
  title: t.string({ required: true }),
  text: t.string({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  schedule_send_for: t.field({ required: true, type: DateTime }),
  broadcasted_at: t.field({ required: false, type: DateTime }),
  user: t.field({
    required: true,
    type: UserCreateNestedOneWithoutRequestsInput,
  }),
  tags: t.field({
    required: false,
    type: TagCreateNestedManyWithoutRequestsInput,
  }),
});
export const RequestCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateInput>,
    false
  >('RequestCreateInput')
  .implement({
    fields: RequestCreateInputFields,
  });

export const RequestUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  text: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  schedule_send_for: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  broadcasted_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  user: t.field({
    required: false,
    type: UserUpdateOneRequiredWithoutRequestsNestedInput,
  }),
  tags: t.field({
    required: false,
    type: TagUpdateManyWithoutRequestsNestedInput,
  }),
});
export const RequestUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateInput>,
    false
  >('RequestUpdateInput')
  .implement({
    fields: RequestUpdateInputFields,
  });

export const RequestCreateManyInputFields = (t: any) => ({
  id: t.string({ required: false }),
  title: t.string({ required: true }),
  text: t.string({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  user_id: t.string({ required: true }),
  schedule_send_for: t.field({ required: true, type: DateTime }),
  broadcasted_at: t.field({ required: false, type: DateTime }),
});
export const RequestCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateManyInput>,
    false
  >('RequestCreateManyInput')
  .implement({
    fields: RequestCreateManyInputFields,
  });

export const RequestUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  text: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  schedule_send_for: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  broadcasted_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
});
export const RequestUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateManyMutationInput>,
    false
  >('RequestUpdateManyMutationInput')
  .implement({
    fields: RequestUpdateManyMutationInputFields,
  });

export const StringFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedStringFilter }),
});
export const StringFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringFilter>,
    false
  >('StringFilter')
  .implement({
    fields: StringFilterFields,
  });

export const EnumRoleFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Role }),
  in: t.field({ required: false, type: [Role] }),
  notIn: t.field({ required: false, type: [Role] }),
  not: t.field({ required: false, type: Role }),
});
export const EnumRoleFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.EnumRoleFilter>,
    false
  >('EnumRoleFilter')
  .implement({
    fields: EnumRoleFilterFields,
  });

export const DateTimeFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const DateTimeFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeFilter>,
    false
  >('DateTimeFilter')
  .implement({
    fields: DateTimeFilterFields,
  });

export const RequestListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: RequestWhereInput }),
  some: t.field({ required: false, type: RequestWhereInput }),
  none: t.field({ required: false, type: RequestWhereInput }),
});
export const RequestListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestListRelationFilter>,
    false
  >('RequestListRelationFilter')
  .implement({
    fields: RequestListRelationFilterFields,
  });

export const RequestOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const RequestOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestOrderByRelationAggregateInput>,
    false
  >('RequestOrderByRelationAggregateInput')
  .implement({
    fields: RequestOrderByRelationAggregateInputFields,
  });

export const UserCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  password: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
});
export const UserCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCountOrderByAggregateInput>,
    false
  >('UserCountOrderByAggregateInput')
  .implement({
    fields: UserCountOrderByAggregateInputFields,
  });

export const UserMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  password: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
});
export const UserMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserMaxOrderByAggregateInput>,
    false
  >('UserMaxOrderByAggregateInput')
  .implement({
    fields: UserMaxOrderByAggregateInputFields,
  });

export const UserMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  password: t.field({ required: false, type: SortOrder }),
  role: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
});
export const UserMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserMinOrderByAggregateInput>,
    false
  >('UserMinOrderByAggregateInput')
  .implement({
    fields: UserMinOrderByAggregateInputFields,
  });

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedStringWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedStringFilter }),
  _max: t.field({ required: false, type: NestedStringFilter }),
});
export const StringWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>,
    false
  >('StringWithAggregatesFilter')
  .implement({
    fields: StringWithAggregatesFilterFields,
  });

export const EnumRoleWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Role }),
  in: t.field({ required: false, type: [Role] }),
  notIn: t.field({ required: false, type: [Role] }),
  not: t.field({ required: false, type: Role }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedEnumRoleFilter }),
  _max: t.field({ required: false, type: NestedEnumRoleFilter }),
});
export const EnumRoleWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.EnumRoleWithAggregatesFilter>,
    false
  >('EnumRoleWithAggregatesFilter')
  .implement({
    fields: EnumRoleWithAggregatesFilterFields,
  });

export const DateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedDateTimeFilter }),
  _max: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const DateTimeWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeWithAggregatesFilter>,
    false
  >('DateTimeWithAggregatesFilter')
  .implement({
    fields: DateTimeWithAggregatesFilterFields,
  });

export const ContributorListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: ContributorWhereInput }),
  some: t.field({ required: false, type: ContributorWhereInput }),
  none: t.field({ required: false, type: ContributorWhereInput }),
});
export const ContributorListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorListRelationFilter>,
    false
  >('ContributorListRelationFilter')
  .implement({
    fields: ContributorListRelationFilterFields,
  });

export const ContributorOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const ContributorOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorOrderByRelationAggregateInput>,
    false
  >('ContributorOrderByRelationAggregateInput')
  .implement({
    fields: ContributorOrderByRelationAggregateInputFields,
  });

export const TagCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
});
export const TagCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagCountOrderByAggregateInput>,
    false
  >('TagCountOrderByAggregateInput')
  .implement({
    fields: TagCountOrderByAggregateInputFields,
  });

export const TagMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
});
export const TagMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagMaxOrderByAggregateInput>,
    false
  >('TagMaxOrderByAggregateInput')
  .implement({
    fields: TagMaxOrderByAggregateInputFields,
  });

export const TagMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
});
export const TagMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagMinOrderByAggregateInput>,
    false
  >('TagMinOrderByAggregateInput')
  .implement({
    fields: TagMinOrderByAggregateInputFields,
  });

export const StringNullableFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const StringNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringNullableFilter>,
    false
  >('StringNullableFilter')
  .implement({
    fields: StringNullableFilterFields,
  });

export const BigIntNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Bigint }),
  in: t.field({ required: false, type: [Bigint] }),
  notIn: t.field({ required: false, type: [Bigint] }),
  lt: t.field({ required: false, type: Bigint }),
  lte: t.field({ required: false, type: Bigint }),
  gt: t.field({ required: false, type: Bigint }),
  gte: t.field({ required: false, type: Bigint }),
  not: t.field({ required: false, type: NestedBigIntNullableFilter }),
});
export const BigIntNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.BigIntNullableFilter>,
    false
  >('BigIntNullableFilter')
  .implement({
    fields: BigIntNullableFilterFields,
  });

export const DateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeNullableFilter }),
});
export const DateTimeNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableFilter>,
    false
  >('DateTimeNullableFilter')
  .implement({
    fields: DateTimeNullableFilterFields,
  });

export const BoolFilterFields = (t: any) => ({
  equals: t.boolean({ required: false }),
  not: t.field({ required: false, type: NestedBoolFilter }),
});
export const BoolFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.BoolFilter>,
    false
  >('BoolFilter')
  .implement({
    fields: BoolFilterFields,
  });

export const TagListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: TagWhereInput }),
  some: t.field({ required: false, type: TagWhereInput }),
  none: t.field({ required: false, type: TagWhereInput }),
});
export const TagListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagListRelationFilter>,
    false
  >('TagListRelationFilter')
  .implement({
    fields: TagListRelationFilterFields,
  });

export const TagOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const TagOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagOrderByRelationAggregateInput>,
    false
  >('TagOrderByRelationAggregateInput')
  .implement({
    fields: TagOrderByRelationAggregateInputFields,
  });

export const ContributorCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  telegram_chat_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  username: t.field({ required: false, type: SortOrder }),
  telegram_id: t.field({ required: false, type: SortOrder }),
  note: t.field({ required: false, type: SortOrder }),
  zip_code: t.field({ required: false, type: SortOrder }),
  city: t.field({ required: false, type: SortOrder }),
  phone: t.field({ required: false, type: SortOrder }),
  deactivated_at: t.field({ required: false, type: SortOrder }),
  threema_id: t.field({ required: false, type: SortOrder }),
  data_processing_consented_at: t.field({ required: false, type: SortOrder }),
  telegram_onboarding_token: t.field({ required: false, type: SortOrder }),
  signal_phone_number: t.field({ required: false, type: SortOrder }),
  signal_onboarding_completed_at: t.field({ required: false, type: SortOrder }),
  additional_email: t.field({ required: false, type: SortOrder }),
  additional_consent_given_at: t.field({ required: false, type: SortOrder }),
  organization_id: t.field({ required: false, type: SortOrder }),
  whats_app_phone_number: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: SortOrder,
  }),
  deactivated_by_user_id: t.field({ required: false, type: SortOrder }),
  deactivated_by_admin: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: SortOrder,
  }),
  unsubscribed_at: t.field({ required: false, type: SortOrder }),
});
export const ContributorCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorCountOrderByAggregateInput>,
    false
  >('ContributorCountOrderByAggregateInput')
  .implement({
    fields: ContributorCountOrderByAggregateInputFields,
  });

export const ContributorAvgOrderByAggregateInputFields = (t: any) => ({
  telegram_chat_id: t.field({ required: false, type: SortOrder }),
  telegram_id: t.field({ required: false, type: SortOrder }),
});
export const ContributorAvgOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorAvgOrderByAggregateInput>,
    false
  >('ContributorAvgOrderByAggregateInput')
  .implement({
    fields: ContributorAvgOrderByAggregateInputFields,
  });

export const ContributorMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  telegram_chat_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  username: t.field({ required: false, type: SortOrder }),
  telegram_id: t.field({ required: false, type: SortOrder }),
  note: t.field({ required: false, type: SortOrder }),
  zip_code: t.field({ required: false, type: SortOrder }),
  city: t.field({ required: false, type: SortOrder }),
  phone: t.field({ required: false, type: SortOrder }),
  deactivated_at: t.field({ required: false, type: SortOrder }),
  threema_id: t.field({ required: false, type: SortOrder }),
  data_processing_consented_at: t.field({ required: false, type: SortOrder }),
  telegram_onboarding_token: t.field({ required: false, type: SortOrder }),
  signal_phone_number: t.field({ required: false, type: SortOrder }),
  signal_onboarding_completed_at: t.field({ required: false, type: SortOrder }),
  additional_email: t.field({ required: false, type: SortOrder }),
  additional_consent_given_at: t.field({ required: false, type: SortOrder }),
  organization_id: t.field({ required: false, type: SortOrder }),
  whats_app_phone_number: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: SortOrder,
  }),
  deactivated_by_user_id: t.field({ required: false, type: SortOrder }),
  deactivated_by_admin: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: SortOrder,
  }),
  unsubscribed_at: t.field({ required: false, type: SortOrder }),
});
export const ContributorMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorMaxOrderByAggregateInput>,
    false
  >('ContributorMaxOrderByAggregateInput')
  .implement({
    fields: ContributorMaxOrderByAggregateInputFields,
  });

export const ContributorMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  first_name: t.field({ required: false, type: SortOrder }),
  last_name: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  telegram_chat_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  username: t.field({ required: false, type: SortOrder }),
  telegram_id: t.field({ required: false, type: SortOrder }),
  note: t.field({ required: false, type: SortOrder }),
  zip_code: t.field({ required: false, type: SortOrder }),
  city: t.field({ required: false, type: SortOrder }),
  phone: t.field({ required: false, type: SortOrder }),
  deactivated_at: t.field({ required: false, type: SortOrder }),
  threema_id: t.field({ required: false, type: SortOrder }),
  data_processing_consented_at: t.field({ required: false, type: SortOrder }),
  telegram_onboarding_token: t.field({ required: false, type: SortOrder }),
  signal_phone_number: t.field({ required: false, type: SortOrder }),
  signal_onboarding_completed_at: t.field({ required: false, type: SortOrder }),
  additional_email: t.field({ required: false, type: SortOrder }),
  additional_consent_given_at: t.field({ required: false, type: SortOrder }),
  organization_id: t.field({ required: false, type: SortOrder }),
  whats_app_phone_number: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: SortOrder,
  }),
  deactivated_by_user_id: t.field({ required: false, type: SortOrder }),
  deactivated_by_admin: t.field({ required: false, type: SortOrder }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: SortOrder,
  }),
  unsubscribed_at: t.field({ required: false, type: SortOrder }),
});
export const ContributorMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorMinOrderByAggregateInput>,
    false
  >('ContributorMinOrderByAggregateInput')
  .implement({
    fields: ContributorMinOrderByAggregateInputFields,
  });

export const ContributorSumOrderByAggregateInputFields = (t: any) => ({
  telegram_chat_id: t.field({ required: false, type: SortOrder }),
  telegram_id: t.field({ required: false, type: SortOrder }),
});
export const ContributorSumOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorSumOrderByAggregateInput>,
    false
  >('ContributorSumOrderByAggregateInput')
  .implement({
    fields: ContributorSumOrderByAggregateInputFields,
  });

export const StringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({
    required: false,
    type: NestedStringNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedStringNullableFilter }),
  _max: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const StringNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringNullableWithAggregatesFilter>,
    false
  >('StringNullableWithAggregatesFilter')
  .implement({
    fields: StringNullableWithAggregatesFilterFields,
  });

export const BigIntNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Bigint }),
  in: t.field({ required: false, type: [Bigint] }),
  notIn: t.field({ required: false, type: [Bigint] }),
  lt: t.field({ required: false, type: Bigint }),
  lte: t.field({ required: false, type: Bigint }),
  gt: t.field({ required: false, type: Bigint }),
  gte: t.field({ required: false, type: Bigint }),
  not: t.field({
    required: false,
    type: NestedBigIntNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _avg: t.field({ required: false, type: NestedFloatNullableFilter }),
  _sum: t.field({ required: false, type: NestedBigIntNullableFilter }),
  _min: t.field({ required: false, type: NestedBigIntNullableFilter }),
  _max: t.field({ required: false, type: NestedBigIntNullableFilter }),
});
export const BigIntNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.BigIntNullableWithAggregatesFilter>,
    false
  >('BigIntNullableWithAggregatesFilter')
  .implement({
    fields: BigIntNullableWithAggregatesFilterFields,
  });

export const DateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({
    required: false,
    type: NestedDateTimeNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedDateTimeNullableFilter }),
  _max: t.field({ required: false, type: NestedDateTimeNullableFilter }),
});
export const DateTimeNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableWithAggregatesFilter>,
    false
  >('DateTimeNullableWithAggregatesFilter')
  .implement({
    fields: DateTimeNullableWithAggregatesFilterFields,
  });

export const BoolWithAggregatesFilterFields = (t: any) => ({
  equals: t.boolean({ required: false }),
  not: t.field({ required: false, type: NestedBoolWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedBoolFilter }),
  _max: t.field({ required: false, type: NestedBoolFilter }),
});
export const BoolWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.BoolWithAggregatesFilter>,
    false
  >('BoolWithAggregatesFilter')
  .implement({
    fields: BoolWithAggregatesFilterFields,
  });

export const UserRelationFilterFields = (t: any) => ({
  is: t.field({ required: false, type: UserWhereInput }),
  isNot: t.field({ required: false, type: UserWhereInput }),
});
export const UserRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserRelationFilter>,
    false
  >('UserRelationFilter')
  .implement({
    fields: UserRelationFilterFields,
  });

export const RequestCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  text: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  user_id: t.field({ required: false, type: SortOrder }),
  schedule_send_for: t.field({ required: false, type: SortOrder }),
  broadcasted_at: t.field({ required: false, type: SortOrder }),
});
export const RequestCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCountOrderByAggregateInput>,
    false
  >('RequestCountOrderByAggregateInput')
  .implement({
    fields: RequestCountOrderByAggregateInputFields,
  });

export const RequestMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  text: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  user_id: t.field({ required: false, type: SortOrder }),
  schedule_send_for: t.field({ required: false, type: SortOrder }),
  broadcasted_at: t.field({ required: false, type: SortOrder }),
});
export const RequestMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestMaxOrderByAggregateInput>,
    false
  >('RequestMaxOrderByAggregateInput')
  .implement({
    fields: RequestMaxOrderByAggregateInputFields,
  });

export const RequestMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  text: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updated_at: t.field({ required: false, type: SortOrder }),
  user_id: t.field({ required: false, type: SortOrder }),
  schedule_send_for: t.field({ required: false, type: SortOrder }),
  broadcasted_at: t.field({ required: false, type: SortOrder }),
});
export const RequestMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestMinOrderByAggregateInput>,
    false
  >('RequestMinOrderByAggregateInput')
  .implement({
    fields: RequestMinOrderByAggregateInputFields,
  });

export const RequestCreateNestedManyWithoutUserInputFields = (t: any) => ({
  create: t.field({ required: false, type: [RequestCreateWithoutUserInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [RequestCreateOrConnectWithoutUserInput],
  }),
  createMany: t.field({
    required: false,
    type: RequestCreateManyUserInputEnvelope,
  }),
  connect: t.field({ required: false, type: [RequestWhereUniqueInput] }),
});
export const RequestCreateNestedManyWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateNestedManyWithoutUserInput>,
    false
  >('RequestCreateNestedManyWithoutUserInput')
  .implement({
    fields: RequestCreateNestedManyWithoutUserInputFields,
  });

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({ required: false }),
});
export const StringFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>,
    false
  >('StringFieldUpdateOperationsInput')
  .implement({
    fields: StringFieldUpdateOperationsInputFields,
  });

export const EnumRoleFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({ required: false, type: Role }),
});
export const EnumRoleFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.EnumRoleFieldUpdateOperationsInput>,
    false
  >('EnumRoleFieldUpdateOperationsInput')
  .implement({
    fields: EnumRoleFieldUpdateOperationsInputFields,
  });

export const DateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({ required: false, type: DateTime }),
});
export const DateTimeFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeFieldUpdateOperationsInput>,
    false
  >('DateTimeFieldUpdateOperationsInput')
  .implement({
    fields: DateTimeFieldUpdateOperationsInputFields,
  });

export const RequestUpdateManyWithoutUserNestedInputFields = (t: any) => ({
  create: t.field({ required: false, type: [RequestCreateWithoutUserInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [RequestCreateOrConnectWithoutUserInput],
  }),
  upsert: t.field({
    required: false,
    type: [RequestUpsertWithWhereUniqueWithoutUserInput],
  }),
  createMany: t.field({
    required: false,
    type: RequestCreateManyUserInputEnvelope,
  }),
  set: t.field({ required: false, type: [RequestWhereUniqueInput] }),
  disconnect: t.field({ required: false, type: [RequestWhereUniqueInput] }),
  delete: t.field({ required: false, type: [RequestWhereUniqueInput] }),
  connect: t.field({ required: false, type: [RequestWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [RequestUpdateWithWhereUniqueWithoutUserInput],
  }),
  updateMany: t.field({
    required: false,
    type: [RequestUpdateManyWithWhereWithoutUserInput],
  }),
  deleteMany: t.field({ required: false, type: [RequestScalarWhereInput] }),
});
export const RequestUpdateManyWithoutUserNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateManyWithoutUserNestedInput>,
    false
  >('RequestUpdateManyWithoutUserNestedInput')
  .implement({
    fields: RequestUpdateManyWithoutUserNestedInputFields,
  });

export const ContributorCreateNestedManyWithoutTagsInputFields = (t: any) => ({
  create: t.field({
    required: false,
    type: [ContributorCreateWithoutTagsInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [ContributorCreateOrConnectWithoutTagsInput],
  }),
  connect: t.field({ required: false, type: [ContributorWhereUniqueInput] }),
});
export const ContributorCreateNestedManyWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorCreateNestedManyWithoutTagsInput>,
    false
  >('ContributorCreateNestedManyWithoutTagsInput')
  .implement({
    fields: ContributorCreateNestedManyWithoutTagsInputFields,
  });

export const RequestCreateNestedManyWithoutTagsInputFields = (t: any) => ({
  create: t.field({ required: false, type: [RequestCreateWithoutTagsInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [RequestCreateOrConnectWithoutTagsInput],
  }),
  connect: t.field({ required: false, type: [RequestWhereUniqueInput] }),
});
export const RequestCreateNestedManyWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateNestedManyWithoutTagsInput>,
    false
  >('RequestCreateNestedManyWithoutTagsInput')
  .implement({
    fields: RequestCreateNestedManyWithoutTagsInputFields,
  });

export const ContributorUpdateManyWithoutTagsNestedInputFields = (t: any) => ({
  create: t.field({
    required: false,
    type: [ContributorCreateWithoutTagsInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [ContributorCreateOrConnectWithoutTagsInput],
  }),
  upsert: t.field({
    required: false,
    type: [ContributorUpsertWithWhereUniqueWithoutTagsInput],
  }),
  set: t.field({ required: false, type: [ContributorWhereUniqueInput] }),
  disconnect: t.field({ required: false, type: [ContributorWhereUniqueInput] }),
  delete: t.field({ required: false, type: [ContributorWhereUniqueInput] }),
  connect: t.field({ required: false, type: [ContributorWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [ContributorUpdateWithWhereUniqueWithoutTagsInput],
  }),
  updateMany: t.field({
    required: false,
    type: [ContributorUpdateManyWithWhereWithoutTagsInput],
  }),
  deleteMany: t.field({ required: false, type: [ContributorScalarWhereInput] }),
});
export const ContributorUpdateManyWithoutTagsNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorUpdateManyWithoutTagsNestedInput>,
    false
  >('ContributorUpdateManyWithoutTagsNestedInput')
  .implement({
    fields: ContributorUpdateManyWithoutTagsNestedInputFields,
  });

export const RequestUpdateManyWithoutTagsNestedInputFields = (t: any) => ({
  create: t.field({ required: false, type: [RequestCreateWithoutTagsInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [RequestCreateOrConnectWithoutTagsInput],
  }),
  upsert: t.field({
    required: false,
    type: [RequestUpsertWithWhereUniqueWithoutTagsInput],
  }),
  set: t.field({ required: false, type: [RequestWhereUniqueInput] }),
  disconnect: t.field({ required: false, type: [RequestWhereUniqueInput] }),
  delete: t.field({ required: false, type: [RequestWhereUniqueInput] }),
  connect: t.field({ required: false, type: [RequestWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [RequestUpdateWithWhereUniqueWithoutTagsInput],
  }),
  updateMany: t.field({
    required: false,
    type: [RequestUpdateManyWithWhereWithoutTagsInput],
  }),
  deleteMany: t.field({ required: false, type: [RequestScalarWhereInput] }),
});
export const RequestUpdateManyWithoutTagsNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateManyWithoutTagsNestedInput>,
    false
  >('RequestUpdateManyWithoutTagsNestedInput')
  .implement({
    fields: RequestUpdateManyWithoutTagsNestedInputFields,
  });

export const TagCreateNestedManyWithoutContributorsInputFields = (t: any) => ({
  create: t.field({
    required: false,
    type: [TagCreateWithoutContributorsInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [TagCreateOrConnectWithoutContributorsInput],
  }),
  connect: t.field({ required: false, type: [TagWhereUniqueInput] }),
});
export const TagCreateNestedManyWithoutContributorsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagCreateNestedManyWithoutContributorsInput>,
    false
  >('TagCreateNestedManyWithoutContributorsInput')
  .implement({
    fields: TagCreateNestedManyWithoutContributorsInputFields,
  });

export const NullableStringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({ required: false }),
});
export const NullableStringFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NullableStringFieldUpdateOperationsInput>,
    false
  >('NullableStringFieldUpdateOperationsInput')
  .implement({
    fields: NullableStringFieldUpdateOperationsInputFields,
  });

export const NullableBigIntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({ required: false, type: Bigint }),
  increment: t.field({ required: false, type: Bigint }),
  decrement: t.field({ required: false, type: Bigint }),
  multiply: t.field({ required: false, type: Bigint }),
  divide: t.field({ required: false, type: Bigint }),
});
export const NullableBigIntFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NullableBigIntFieldUpdateOperationsInput>,
    false
  >('NullableBigIntFieldUpdateOperationsInput')
  .implement({
    fields: NullableBigIntFieldUpdateOperationsInputFields,
  });

export const NullableDateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({ required: false, type: DateTime }),
});
export const NullableDateTimeFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NullableDateTimeFieldUpdateOperationsInput>,
    false
  >('NullableDateTimeFieldUpdateOperationsInput')
  .implement({
    fields: NullableDateTimeFieldUpdateOperationsInputFields,
  });

export const BoolFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.boolean({ required: false }),
});
export const BoolFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.BoolFieldUpdateOperationsInput>,
    false
  >('BoolFieldUpdateOperationsInput')
  .implement({
    fields: BoolFieldUpdateOperationsInputFields,
  });

export const TagUpdateManyWithoutContributorsNestedInputFields = (t: any) => ({
  create: t.field({
    required: false,
    type: [TagCreateWithoutContributorsInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [TagCreateOrConnectWithoutContributorsInput],
  }),
  upsert: t.field({
    required: false,
    type: [TagUpsertWithWhereUniqueWithoutContributorsInput],
  }),
  set: t.field({ required: false, type: [TagWhereUniqueInput] }),
  disconnect: t.field({ required: false, type: [TagWhereUniqueInput] }),
  delete: t.field({ required: false, type: [TagWhereUniqueInput] }),
  connect: t.field({ required: false, type: [TagWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [TagUpdateWithWhereUniqueWithoutContributorsInput],
  }),
  updateMany: t.field({
    required: false,
    type: [TagUpdateManyWithWhereWithoutContributorsInput],
  }),
  deleteMany: t.field({ required: false, type: [TagScalarWhereInput] }),
});
export const TagUpdateManyWithoutContributorsNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateManyWithoutContributorsNestedInput>,
    false
  >('TagUpdateManyWithoutContributorsNestedInput')
  .implement({
    fields: TagUpdateManyWithoutContributorsNestedInputFields,
  });

export const UserCreateNestedOneWithoutRequestsInputFields = (t: any) => ({
  create: t.field({ required: false, type: UserCreateWithoutRequestsInput }),
  connectOrCreate: t.field({
    required: false,
    type: UserCreateOrConnectWithoutRequestsInput,
  }),
  connect: t.field({ required: false, type: UserWhereUniqueInput }),
});
export const UserCreateNestedOneWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutRequestsInput>,
    false
  >('UserCreateNestedOneWithoutRequestsInput')
  .implement({
    fields: UserCreateNestedOneWithoutRequestsInputFields,
  });

export const TagCreateNestedManyWithoutRequestsInputFields = (t: any) => ({
  create: t.field({ required: false, type: [TagCreateWithoutRequestsInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [TagCreateOrConnectWithoutRequestsInput],
  }),
  connect: t.field({ required: false, type: [TagWhereUniqueInput] }),
});
export const TagCreateNestedManyWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagCreateNestedManyWithoutRequestsInput>,
    false
  >('TagCreateNestedManyWithoutRequestsInput')
  .implement({
    fields: TagCreateNestedManyWithoutRequestsInputFields,
  });

export const UserUpdateOneRequiredWithoutRequestsNestedInputFields = (
  t: any,
) => ({
  create: t.field({ required: false, type: UserCreateWithoutRequestsInput }),
  connectOrCreate: t.field({
    required: false,
    type: UserCreateOrConnectWithoutRequestsInput,
  }),
  upsert: t.field({ required: false, type: UserUpsertWithoutRequestsInput }),
  connect: t.field({ required: false, type: UserWhereUniqueInput }),
  update: t.field({
    required: false,
    type: UserUpdateToOneWithWhereWithoutRequestsInput,
  }),
});
export const UserUpdateOneRequiredWithoutRequestsNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutRequestsNestedInput>,
    false
  >('UserUpdateOneRequiredWithoutRequestsNestedInput')
  .implement({
    fields: UserUpdateOneRequiredWithoutRequestsNestedInputFields,
  });

export const TagUpdateManyWithoutRequestsNestedInputFields = (t: any) => ({
  create: t.field({ required: false, type: [TagCreateWithoutRequestsInput] }),
  connectOrCreate: t.field({
    required: false,
    type: [TagCreateOrConnectWithoutRequestsInput],
  }),
  upsert: t.field({
    required: false,
    type: [TagUpsertWithWhereUniqueWithoutRequestsInput],
  }),
  set: t.field({ required: false, type: [TagWhereUniqueInput] }),
  disconnect: t.field({ required: false, type: [TagWhereUniqueInput] }),
  delete: t.field({ required: false, type: [TagWhereUniqueInput] }),
  connect: t.field({ required: false, type: [TagWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [TagUpdateWithWhereUniqueWithoutRequestsInput],
  }),
  updateMany: t.field({
    required: false,
    type: [TagUpdateManyWithWhereWithoutRequestsInput],
  }),
  deleteMany: t.field({ required: false, type: [TagScalarWhereInput] }),
});
export const TagUpdateManyWithoutRequestsNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateManyWithoutRequestsNestedInput>,
    false
  >('TagUpdateManyWithoutRequestsNestedInput')
  .implement({
    fields: TagUpdateManyWithoutRequestsNestedInputFields,
  });

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({ required: false, type: NestedStringFilter }),
});
export const NestedStringFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>,
    false
  >('NestedStringFilter')
  .implement({
    fields: NestedStringFilterFields,
  });

export const NestedEnumRoleFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Role }),
  in: t.field({ required: false, type: [Role] }),
  notIn: t.field({ required: false, type: [Role] }),
  not: t.field({ required: false, type: Role }),
});
export const NestedEnumRoleFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedEnumRoleFilter>,
    false
  >('NestedEnumRoleFilter')
  .implement({
    fields: NestedEnumRoleFilterFields,
  });

export const NestedDateTimeFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const NestedDateTimeFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeFilter>,
    false
  >('NestedDateTimeFilter')
  .implement({
    fields: NestedDateTimeFilterFields,
  });

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({ required: false, type: NestedStringWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedStringFilter }),
  _max: t.field({ required: false, type: NestedStringFilter }),
});
export const NestedStringWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>,
    false
  >('NestedStringWithAggregatesFilter')
  .implement({
    fields: NestedStringWithAggregatesFilterFields,
  });

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntFilter }),
});
export const NestedIntFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>,
    false
  >('NestedIntFilter')
  .implement({
    fields: NestedIntFilterFields,
  });

export const NestedEnumRoleWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Role }),
  in: t.field({ required: false, type: [Role] }),
  notIn: t.field({ required: false, type: [Role] }),
  not: t.field({ required: false, type: Role }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedEnumRoleFilter }),
  _max: t.field({ required: false, type: NestedEnumRoleFilter }),
});
export const NestedEnumRoleWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedEnumRoleWithAggregatesFilter>,
    false
  >('NestedEnumRoleWithAggregatesFilter')
  .implement({
    fields: NestedEnumRoleWithAggregatesFilterFields,
  });

export const NestedDateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedDateTimeFilter }),
  _max: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const NestedDateTimeWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeWithAggregatesFilter>,
    false
  >('NestedDateTimeWithAggregatesFilter')
  .implement({
    fields: NestedDateTimeWithAggregatesFilterFields,
  });

export const NestedStringNullableFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const NestedStringNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableFilter>,
    false
  >('NestedStringNullableFilter')
  .implement({
    fields: NestedStringNullableFilterFields,
  });

export const NestedBigIntNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Bigint }),
  in: t.field({ required: false, type: [Bigint] }),
  notIn: t.field({ required: false, type: [Bigint] }),
  lt: t.field({ required: false, type: Bigint }),
  lte: t.field({ required: false, type: Bigint }),
  gt: t.field({ required: false, type: Bigint }),
  gte: t.field({ required: false, type: Bigint }),
  not: t.field({ required: false, type: NestedBigIntNullableFilter }),
});
export const NestedBigIntNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedBigIntNullableFilter>,
    false
  >('NestedBigIntNullableFilter')
  .implement({
    fields: NestedBigIntNullableFilterFields,
  });

export const NestedDateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeNullableFilter }),
});
export const NestedDateTimeNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableFilter>,
    false
  >('NestedDateTimeNullableFilter')
  .implement({
    fields: NestedDateTimeNullableFilterFields,
  });

export const NestedBoolFilterFields = (t: any) => ({
  equals: t.boolean({ required: false }),
  not: t.field({ required: false, type: NestedBoolFilter }),
});
export const NestedBoolFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedBoolFilter>,
    false
  >('NestedBoolFilter')
  .implement({
    fields: NestedBoolFilterFields,
  });

export const NestedStringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({
    required: false,
    type: NestedStringNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedStringNullableFilter }),
  _max: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const NestedStringNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableWithAggregatesFilter>,
    false
  >('NestedStringNullableWithAggregatesFilter')
  .implement({
    fields: NestedStringNullableWithAggregatesFilterFields,
  });

export const NestedIntNullableFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntNullableFilter }),
});
export const NestedIntNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableFilter>,
    false
  >('NestedIntNullableFilter')
  .implement({
    fields: NestedIntNullableFilterFields,
  });

export const NestedBigIntNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Bigint }),
  in: t.field({ required: false, type: [Bigint] }),
  notIn: t.field({ required: false, type: [Bigint] }),
  lt: t.field({ required: false, type: Bigint }),
  lte: t.field({ required: false, type: Bigint }),
  gt: t.field({ required: false, type: Bigint }),
  gte: t.field({ required: false, type: Bigint }),
  not: t.field({
    required: false,
    type: NestedBigIntNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _avg: t.field({ required: false, type: NestedFloatNullableFilter }),
  _sum: t.field({ required: false, type: NestedBigIntNullableFilter }),
  _min: t.field({ required: false, type: NestedBigIntNullableFilter }),
  _max: t.field({ required: false, type: NestedBigIntNullableFilter }),
});
export const NestedBigIntNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedBigIntNullableWithAggregatesFilter>,
    false
  >('NestedBigIntNullableWithAggregatesFilter')
  .implement({
    fields: NestedBigIntNullableWithAggregatesFilterFields,
  });

export const NestedFloatNullableFilterFields = (t: any) => ({
  equals: t.float({ required: false }),
  in: t.floatList({ required: false }),
  notIn: t.floatList({ required: false }),
  lt: t.float({ required: false }),
  lte: t.float({ required: false }),
  gt: t.float({ required: false }),
  gte: t.float({ required: false }),
  not: t.field({ required: false, type: NestedFloatNullableFilter }),
});
export const NestedFloatNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedFloatNullableFilter>,
    false
  >('NestedFloatNullableFilter')
  .implement({
    fields: NestedFloatNullableFilterFields,
  });

export const NestedDateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({
    required: false,
    type: NestedDateTimeNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedDateTimeNullableFilter }),
  _max: t.field({ required: false, type: NestedDateTimeNullableFilter }),
});
export const NestedDateTimeNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableWithAggregatesFilter>,
    false
  >('NestedDateTimeNullableWithAggregatesFilter')
  .implement({
    fields: NestedDateTimeNullableWithAggregatesFilterFields,
  });

export const NestedBoolWithAggregatesFilterFields = (t: any) => ({
  equals: t.boolean({ required: false }),
  not: t.field({ required: false, type: NestedBoolWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedBoolFilter }),
  _max: t.field({ required: false, type: NestedBoolFilter }),
});
export const NestedBoolWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedBoolWithAggregatesFilter>,
    false
  >('NestedBoolWithAggregatesFilter')
  .implement({
    fields: NestedBoolWithAggregatesFilterFields,
  });

export const RequestCreateWithoutUserInputFields = (t: any) => ({
  id: t.string({ required: false }),
  title: t.string({ required: true }),
  text: t.string({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  schedule_send_for: t.field({ required: true, type: DateTime }),
  broadcasted_at: t.field({ required: false, type: DateTime }),
  tags: t.field({
    required: false,
    type: TagCreateNestedManyWithoutRequestsInput,
  }),
});
export const RequestCreateWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateWithoutUserInput>,
    false
  >('RequestCreateWithoutUserInput')
  .implement({
    fields: RequestCreateWithoutUserInputFields,
  });

export const RequestCreateOrConnectWithoutUserInputFields = (t: any) => ({
  where: t.field({ required: true, type: RequestWhereUniqueInput }),
  create: t.field({ required: true, type: RequestCreateWithoutUserInput }),
});
export const RequestCreateOrConnectWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateOrConnectWithoutUserInput>,
    false
  >('RequestCreateOrConnectWithoutUserInput')
  .implement({
    fields: RequestCreateOrConnectWithoutUserInputFields,
  });

export const RequestCreateManyUserInputEnvelopeFields = (t: any) => ({
  data: t.field({ required: true, type: [RequestCreateManyUserInput] }),
  skipDuplicates: t.boolean({ required: false }),
});
export const RequestCreateManyUserInputEnvelope = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateManyUserInputEnvelope>,
    false
  >('RequestCreateManyUserInputEnvelope')
  .implement({
    fields: RequestCreateManyUserInputEnvelopeFields,
  });

export const RequestUpsertWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({ required: true, type: RequestWhereUniqueInput }),
  update: t.field({ required: true, type: RequestUpdateWithoutUserInput }),
  create: t.field({ required: true, type: RequestCreateWithoutUserInput }),
});
export const RequestUpsertWithWhereUniqueWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpsertWithWhereUniqueWithoutUserInput>,
    false
  >('RequestUpsertWithWhereUniqueWithoutUserInput')
  .implement({
    fields: RequestUpsertWithWhereUniqueWithoutUserInputFields,
  });

export const RequestUpdateWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({ required: true, type: RequestWhereUniqueInput }),
  data: t.field({ required: true, type: RequestUpdateWithoutUserInput }),
});
export const RequestUpdateWithWhereUniqueWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateWithWhereUniqueWithoutUserInput>,
    false
  >('RequestUpdateWithWhereUniqueWithoutUserInput')
  .implement({
    fields: RequestUpdateWithWhereUniqueWithoutUserInputFields,
  });

export const RequestUpdateManyWithWhereWithoutUserInputFields = (t: any) => ({
  where: t.field({ required: true, type: RequestScalarWhereInput }),
  data: t.field({ required: true, type: RequestUpdateManyMutationInput }),
});
export const RequestUpdateManyWithWhereWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateManyWithWhereWithoutUserInput>,
    false
  >('RequestUpdateManyWithWhereWithoutUserInput')
  .implement({
    fields: RequestUpdateManyWithWhereWithoutUserInputFields,
  });

export const RequestScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [RequestScalarWhereInput] }),
  OR: t.field({ required: false, type: [RequestScalarWhereInput] }),
  NOT: t.field({ required: false, type: [RequestScalarWhereInput] }),
  id: t.field({ required: false, type: StringFilter }),
  title: t.field({ required: false, type: StringFilter }),
  text: t.field({ required: false, type: StringNullableFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  user_id: t.field({ required: false, type: StringFilter }),
  schedule_send_for: t.field({ required: false, type: DateTimeFilter }),
  broadcasted_at: t.field({ required: false, type: DateTimeNullableFilter }),
});
export const RequestScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestScalarWhereInput>,
    false
  >('RequestScalarWhereInput')
  .implement({
    fields: RequestScalarWhereInputFields,
  });

export const ContributorCreateWithoutTagsInputFields = (t: any) => ({
  id: t.string({ required: false }),
  first_name: t.string({ required: true }),
  last_name: t.string({ required: true }),
  email: t.string({ required: false }),
  telegram_chat_id: t.field({ required: false, type: Bigint }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  username: t.string({ required: false }),
  telegram_id: t.field({ required: false, type: Bigint }),
  note: t.string({ required: false }),
  zip_code: t.string({ required: false }),
  city: t.string({ required: false }),
  phone: t.string({ required: false }),
  deactivated_at: t.field({ required: false, type: DateTime }),
  threema_id: t.string({ required: false }),
  data_processing_consented_at: t.field({ required: false, type: DateTime }),
  telegram_onboarding_token: t.string({ required: false }),
  signal_phone_number: t.string({ required: false }),
  signal_onboarding_completed_at: t.field({ required: false, type: DateTime }),
  additional_email: t.string({ required: false }),
  additional_consent_given_at: t.field({ required: false, type: DateTime }),
  organization_id: t.string({ required: false }),
  whats_app_phone_number: t.string({ required: false }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: DateTime,
  }),
  deactivated_by_user_id: t.string({ required: false }),
  deactivated_by_admin: t.boolean({ required: false }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: DateTime,
  }),
  unsubscribed_at: t.field({ required: false, type: DateTime }),
});
export const ContributorCreateWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorCreateWithoutTagsInput>,
    false
  >('ContributorCreateWithoutTagsInput')
  .implement({
    fields: ContributorCreateWithoutTagsInputFields,
  });

export const ContributorCreateOrConnectWithoutTagsInputFields = (t: any) => ({
  where: t.field({ required: true, type: ContributorWhereUniqueInput }),
  create: t.field({ required: true, type: ContributorCreateWithoutTagsInput }),
});
export const ContributorCreateOrConnectWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorCreateOrConnectWithoutTagsInput>,
    false
  >('ContributorCreateOrConnectWithoutTagsInput')
  .implement({
    fields: ContributorCreateOrConnectWithoutTagsInputFields,
  });

export const RequestCreateWithoutTagsInputFields = (t: any) => ({
  id: t.string({ required: false }),
  title: t.string({ required: true }),
  text: t.string({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  schedule_send_for: t.field({ required: true, type: DateTime }),
  broadcasted_at: t.field({ required: false, type: DateTime }),
  user: t.field({
    required: true,
    type: UserCreateNestedOneWithoutRequestsInput,
  }),
});
export const RequestCreateWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateWithoutTagsInput>,
    false
  >('RequestCreateWithoutTagsInput')
  .implement({
    fields: RequestCreateWithoutTagsInputFields,
  });

export const RequestCreateOrConnectWithoutTagsInputFields = (t: any) => ({
  where: t.field({ required: true, type: RequestWhereUniqueInput }),
  create: t.field({ required: true, type: RequestCreateWithoutTagsInput }),
});
export const RequestCreateOrConnectWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateOrConnectWithoutTagsInput>,
    false
  >('RequestCreateOrConnectWithoutTagsInput')
  .implement({
    fields: RequestCreateOrConnectWithoutTagsInputFields,
  });

export const ContributorUpsertWithWhereUniqueWithoutTagsInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: ContributorWhereUniqueInput }),
  update: t.field({ required: true, type: ContributorUpdateWithoutTagsInput }),
  create: t.field({ required: true, type: ContributorCreateWithoutTagsInput }),
});
export const ContributorUpsertWithWhereUniqueWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorUpsertWithWhereUniqueWithoutTagsInput>,
    false
  >('ContributorUpsertWithWhereUniqueWithoutTagsInput')
  .implement({
    fields: ContributorUpsertWithWhereUniqueWithoutTagsInputFields,
  });

export const ContributorUpdateWithWhereUniqueWithoutTagsInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: ContributorWhereUniqueInput }),
  data: t.field({ required: true, type: ContributorUpdateWithoutTagsInput }),
});
export const ContributorUpdateWithWhereUniqueWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorUpdateWithWhereUniqueWithoutTagsInput>,
    false
  >('ContributorUpdateWithWhereUniqueWithoutTagsInput')
  .implement({
    fields: ContributorUpdateWithWhereUniqueWithoutTagsInputFields,
  });

export const ContributorUpdateManyWithWhereWithoutTagsInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: ContributorScalarWhereInput }),
  data: t.field({ required: true, type: ContributorUpdateManyMutationInput }),
});
export const ContributorUpdateManyWithWhereWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorUpdateManyWithWhereWithoutTagsInput>,
    false
  >('ContributorUpdateManyWithWhereWithoutTagsInput')
  .implement({
    fields: ContributorUpdateManyWithWhereWithoutTagsInputFields,
  });

export const ContributorScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [ContributorScalarWhereInput] }),
  OR: t.field({ required: false, type: [ContributorScalarWhereInput] }),
  NOT: t.field({ required: false, type: [ContributorScalarWhereInput] }),
  id: t.field({ required: false, type: StringFilter }),
  first_name: t.field({ required: false, type: StringFilter }),
  last_name: t.field({ required: false, type: StringFilter }),
  email: t.field({ required: false, type: StringNullableFilter }),
  telegram_chat_id: t.field({ required: false, type: BigIntNullableFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
  username: t.field({ required: false, type: StringNullableFilter }),
  telegram_id: t.field({ required: false, type: BigIntNullableFilter }),
  note: t.field({ required: false, type: StringNullableFilter }),
  zip_code: t.field({ required: false, type: StringNullableFilter }),
  city: t.field({ required: false, type: StringNullableFilter }),
  phone: t.field({ required: false, type: StringNullableFilter }),
  deactivated_at: t.field({ required: false, type: DateTimeNullableFilter }),
  threema_id: t.field({ required: false, type: StringNullableFilter }),
  data_processing_consented_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  telegram_onboarding_token: t.field({
    required: false,
    type: StringNullableFilter,
  }),
  signal_phone_number: t.field({ required: false, type: StringNullableFilter }),
  signal_onboarding_completed_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  additional_email: t.field({ required: false, type: StringNullableFilter }),
  additional_consent_given_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  organization_id: t.field({ required: false, type: StringNullableFilter }),
  whats_app_phone_number: t.field({
    required: false,
    type: StringNullableFilter,
  }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  deactivated_by_user_id: t.field({
    required: false,
    type: StringNullableFilter,
  }),
  deactivated_by_admin: t.field({ required: false, type: BoolFilter }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: DateTimeNullableFilter,
  }),
  unsubscribed_at: t.field({ required: false, type: DateTimeNullableFilter }),
});
export const ContributorScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorScalarWhereInput>,
    false
  >('ContributorScalarWhereInput')
  .implement({
    fields: ContributorScalarWhereInputFields,
  });

export const RequestUpsertWithWhereUniqueWithoutTagsInputFields = (t: any) => ({
  where: t.field({ required: true, type: RequestWhereUniqueInput }),
  update: t.field({ required: true, type: RequestUpdateWithoutTagsInput }),
  create: t.field({ required: true, type: RequestCreateWithoutTagsInput }),
});
export const RequestUpsertWithWhereUniqueWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpsertWithWhereUniqueWithoutTagsInput>,
    false
  >('RequestUpsertWithWhereUniqueWithoutTagsInput')
  .implement({
    fields: RequestUpsertWithWhereUniqueWithoutTagsInputFields,
  });

export const RequestUpdateWithWhereUniqueWithoutTagsInputFields = (t: any) => ({
  where: t.field({ required: true, type: RequestWhereUniqueInput }),
  data: t.field({ required: true, type: RequestUpdateWithoutTagsInput }),
});
export const RequestUpdateWithWhereUniqueWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateWithWhereUniqueWithoutTagsInput>,
    false
  >('RequestUpdateWithWhereUniqueWithoutTagsInput')
  .implement({
    fields: RequestUpdateWithWhereUniqueWithoutTagsInputFields,
  });

export const RequestUpdateManyWithWhereWithoutTagsInputFields = (t: any) => ({
  where: t.field({ required: true, type: RequestScalarWhereInput }),
  data: t.field({ required: true, type: RequestUpdateManyMutationInput }),
});
export const RequestUpdateManyWithWhereWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateManyWithWhereWithoutTagsInput>,
    false
  >('RequestUpdateManyWithWhereWithoutTagsInput')
  .implement({
    fields: RequestUpdateManyWithWhereWithoutTagsInputFields,
  });

export const TagCreateWithoutContributorsInputFields = (t: any) => ({
  id: t.string({ required: false }),
  name: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  requests: t.field({
    required: false,
    type: RequestCreateNestedManyWithoutTagsInput,
  }),
});
export const TagCreateWithoutContributorsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagCreateWithoutContributorsInput>,
    false
  >('TagCreateWithoutContributorsInput')
  .implement({
    fields: TagCreateWithoutContributorsInputFields,
  });

export const TagCreateOrConnectWithoutContributorsInputFields = (t: any) => ({
  where: t.field({ required: true, type: TagWhereUniqueInput }),
  create: t.field({ required: true, type: TagCreateWithoutContributorsInput }),
});
export const TagCreateOrConnectWithoutContributorsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagCreateOrConnectWithoutContributorsInput>,
    false
  >('TagCreateOrConnectWithoutContributorsInput')
  .implement({
    fields: TagCreateOrConnectWithoutContributorsInputFields,
  });

export const TagUpsertWithWhereUniqueWithoutContributorsInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: TagWhereUniqueInput }),
  update: t.field({ required: true, type: TagUpdateWithoutContributorsInput }),
  create: t.field({ required: true, type: TagCreateWithoutContributorsInput }),
});
export const TagUpsertWithWhereUniqueWithoutContributorsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpsertWithWhereUniqueWithoutContributorsInput>,
    false
  >('TagUpsertWithWhereUniqueWithoutContributorsInput')
  .implement({
    fields: TagUpsertWithWhereUniqueWithoutContributorsInputFields,
  });

export const TagUpdateWithWhereUniqueWithoutContributorsInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: TagWhereUniqueInput }),
  data: t.field({ required: true, type: TagUpdateWithoutContributorsInput }),
});
export const TagUpdateWithWhereUniqueWithoutContributorsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateWithWhereUniqueWithoutContributorsInput>,
    false
  >('TagUpdateWithWhereUniqueWithoutContributorsInput')
  .implement({
    fields: TagUpdateWithWhereUniqueWithoutContributorsInputFields,
  });

export const TagUpdateManyWithWhereWithoutContributorsInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: TagScalarWhereInput }),
  data: t.field({ required: true, type: TagUpdateManyMutationInput }),
});
export const TagUpdateManyWithWhereWithoutContributorsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateManyWithWhereWithoutContributorsInput>,
    false
  >('TagUpdateManyWithWhereWithoutContributorsInput')
  .implement({
    fields: TagUpdateManyWithWhereWithoutContributorsInputFields,
  });

export const TagScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [TagScalarWhereInput] }),
  OR: t.field({ required: false, type: [TagScalarWhereInput] }),
  NOT: t.field({ required: false, type: [TagScalarWhereInput] }),
  id: t.field({ required: false, type: StringFilter }),
  name: t.field({ required: false, type: StringFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updated_at: t.field({ required: false, type: DateTimeFilter }),
});
export const TagScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagScalarWhereInput>,
    false
  >('TagScalarWhereInput')
  .implement({
    fields: TagScalarWhereInputFields,
  });

export const UserCreateWithoutRequestsInputFields = (t: any) => ({
  id: t.string({ required: false }),
  first_name: t.string({ required: true }),
  last_name: t.string({ required: true }),
  email: t.string({ required: true }),
  password: t.string({ required: true }),
  role: t.field({ required: false, type: Role }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
});
export const UserCreateWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutRequestsInput>,
    false
  >('UserCreateWithoutRequestsInput')
  .implement({
    fields: UserCreateWithoutRequestsInputFields,
  });

export const UserCreateOrConnectWithoutRequestsInputFields = (t: any) => ({
  where: t.field({ required: true, type: UserWhereUniqueInput }),
  create: t.field({ required: true, type: UserCreateWithoutRequestsInput }),
});
export const UserCreateOrConnectWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutRequestsInput>,
    false
  >('UserCreateOrConnectWithoutRequestsInput')
  .implement({
    fields: UserCreateOrConnectWithoutRequestsInputFields,
  });

export const TagCreateWithoutRequestsInputFields = (t: any) => ({
  id: t.string({ required: false }),
  name: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  contributors: t.field({
    required: false,
    type: ContributorCreateNestedManyWithoutTagsInput,
  }),
});
export const TagCreateWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagCreateWithoutRequestsInput>,
    false
  >('TagCreateWithoutRequestsInput')
  .implement({
    fields: TagCreateWithoutRequestsInputFields,
  });

export const TagCreateOrConnectWithoutRequestsInputFields = (t: any) => ({
  where: t.field({ required: true, type: TagWhereUniqueInput }),
  create: t.field({ required: true, type: TagCreateWithoutRequestsInput }),
});
export const TagCreateOrConnectWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagCreateOrConnectWithoutRequestsInput>,
    false
  >('TagCreateOrConnectWithoutRequestsInput')
  .implement({
    fields: TagCreateOrConnectWithoutRequestsInputFields,
  });

export const UserUpsertWithoutRequestsInputFields = (t: any) => ({
  update: t.field({ required: true, type: UserUpdateWithoutRequestsInput }),
  create: t.field({ required: true, type: UserCreateWithoutRequestsInput }),
  where: t.field({ required: false, type: UserWhereInput }),
});
export const UserUpsertWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutRequestsInput>,
    false
  >('UserUpsertWithoutRequestsInput')
  .implement({
    fields: UserUpsertWithoutRequestsInputFields,
  });

export const UserUpdateToOneWithWhereWithoutRequestsInputFields = (t: any) => ({
  where: t.field({ required: false, type: UserWhereInput }),
  data: t.field({ required: true, type: UserUpdateWithoutRequestsInput }),
});
export const UserUpdateToOneWithWhereWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateToOneWithWhereWithoutRequestsInput>,
    false
  >('UserUpdateToOneWithWhereWithoutRequestsInput')
  .implement({
    fields: UserUpdateToOneWithWhereWithoutRequestsInputFields,
  });

export const UserUpdateWithoutRequestsInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  first_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  last_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  email: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  password: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  role: t.field({ required: false, type: EnumRoleFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
});
export const UserUpdateWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutRequestsInput>,
    false
  >('UserUpdateWithoutRequestsInput')
  .implement({
    fields: UserUpdateWithoutRequestsInputFields,
  });

export const TagUpsertWithWhereUniqueWithoutRequestsInputFields = (t: any) => ({
  where: t.field({ required: true, type: TagWhereUniqueInput }),
  update: t.field({ required: true, type: TagUpdateWithoutRequestsInput }),
  create: t.field({ required: true, type: TagCreateWithoutRequestsInput }),
});
export const TagUpsertWithWhereUniqueWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpsertWithWhereUniqueWithoutRequestsInput>,
    false
  >('TagUpsertWithWhereUniqueWithoutRequestsInput')
  .implement({
    fields: TagUpsertWithWhereUniqueWithoutRequestsInputFields,
  });

export const TagUpdateWithWhereUniqueWithoutRequestsInputFields = (t: any) => ({
  where: t.field({ required: true, type: TagWhereUniqueInput }),
  data: t.field({ required: true, type: TagUpdateWithoutRequestsInput }),
});
export const TagUpdateWithWhereUniqueWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateWithWhereUniqueWithoutRequestsInput>,
    false
  >('TagUpdateWithWhereUniqueWithoutRequestsInput')
  .implement({
    fields: TagUpdateWithWhereUniqueWithoutRequestsInputFields,
  });

export const TagUpdateManyWithWhereWithoutRequestsInputFields = (t: any) => ({
  where: t.field({ required: true, type: TagScalarWhereInput }),
  data: t.field({ required: true, type: TagUpdateManyMutationInput }),
});
export const TagUpdateManyWithWhereWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateManyWithWhereWithoutRequestsInput>,
    false
  >('TagUpdateManyWithWhereWithoutRequestsInput')
  .implement({
    fields: TagUpdateManyWithWhereWithoutRequestsInputFields,
  });

export const RequestCreateManyUserInputFields = (t: any) => ({
  id: t.string({ required: false }),
  title: t.string({ required: true }),
  text: t.string({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updated_at: t.field({ required: false, type: DateTime }),
  schedule_send_for: t.field({ required: true, type: DateTime }),
  broadcasted_at: t.field({ required: false, type: DateTime }),
});
export const RequestCreateManyUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestCreateManyUserInput>,
    false
  >('RequestCreateManyUserInput')
  .implement({
    fields: RequestCreateManyUserInputFields,
  });

export const RequestUpdateWithoutUserInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  text: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  schedule_send_for: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  broadcasted_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  tags: t.field({
    required: false,
    type: TagUpdateManyWithoutRequestsNestedInput,
  }),
});
export const RequestUpdateWithoutUserInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateWithoutUserInput>,
    false
  >('RequestUpdateWithoutUserInput')
  .implement({
    fields: RequestUpdateWithoutUserInputFields,
  });

export const ContributorUpdateWithoutTagsInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  first_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  last_name: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  telegram_chat_id: t.field({
    required: false,
    type: NullableBigIntFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  username: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  telegram_id: t.field({
    required: false,
    type: NullableBigIntFieldUpdateOperationsInput,
  }),
  note: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  zip_code: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  city: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  phone: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  deactivated_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  threema_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  data_processing_consented_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  telegram_onboarding_token: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  signal_phone_number: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  signal_onboarding_completed_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  additional_email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  additional_consent_given_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  organization_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  whats_app_phone_number: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  whats_app_message_template_responded_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  deactivated_by_user_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  deactivated_by_admin: t.field({
    required: false,
    type: BoolFieldUpdateOperationsInput,
  }),
  whats_app_message_template_sent_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  unsubscribed_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
});
export const ContributorUpdateWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.ContributorUpdateWithoutTagsInput>,
    false
  >('ContributorUpdateWithoutTagsInput')
  .implement({
    fields: ContributorUpdateWithoutTagsInputFields,
  });

export const RequestUpdateWithoutTagsInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  text: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  schedule_send_for: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  broadcasted_at: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  user: t.field({
    required: false,
    type: UserUpdateOneRequiredWithoutRequestsNestedInput,
  }),
});
export const RequestUpdateWithoutTagsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.RequestUpdateWithoutTagsInput>,
    false
  >('RequestUpdateWithoutTagsInput')
  .implement({
    fields: RequestUpdateWithoutTagsInputFields,
  });

export const TagUpdateWithoutContributorsInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  requests: t.field({
    required: false,
    type: RequestUpdateManyWithoutTagsNestedInput,
  }),
});
export const TagUpdateWithoutContributorsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateWithoutContributorsInput>,
    false
  >('TagUpdateWithoutContributorsInput')
  .implement({
    fields: TagUpdateWithoutContributorsInputFields,
  });

export const TagUpdateWithoutRequestsInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updated_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  contributors: t.field({
    required: false,
    type: ContributorUpdateManyWithoutTagsNestedInput,
  }),
});
export const TagUpdateWithoutRequestsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.TagUpdateWithoutRequestsInput>,
    false
  >('TagUpdateWithoutRequestsInput')
  .implement({
    fields: TagUpdateWithoutRequestsInputFields,
  });

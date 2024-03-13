/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigInt: { input: any; output: any };
  DateTime: { input: string; output: string };
};

/** Batch payloads from prisma. */
export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** Prisma Batch Payload */
  count: Scalars['Int']['output'];
};

export type BigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BigIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBigIntNullableFilter>;
  _min?: InputMaybe<NestedBigIntNullableFilter>;
  _sum?: InputMaybe<NestedBigIntNullableFilter>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Contributor = {
  __typename?: 'Contributor';
  additional_consent_given_at?: Maybe<Scalars['DateTime']['output']>;
  additional_email?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  data_processing_consented_at?: Maybe<Scalars['DateTime']['output']>;
  deactivated_at?: Maybe<Scalars['DateTime']['output']>;
  deactivated_by_admin: Scalars['Boolean']['output'];
  deactivated_by_user_id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  last_name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  signal_onboarding_completed_at?: Maybe<Scalars['DateTime']['output']>;
  signal_phone_number?: Maybe<Scalars['String']['output']>;
  tags: Array<Tag>;
  telegram_chat_id?: Maybe<Scalars['BigInt']['output']>;
  telegram_id?: Maybe<Scalars['BigInt']['output']>;
  telegram_onboarding_token?: Maybe<Scalars['String']['output']>;
  threema_id?: Maybe<Scalars['String']['output']>;
  unsubscribed_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
  whats_app_message_template_responded_at?: Maybe<
    Scalars['DateTime']['output']
  >;
  whats_app_message_template_sent_at?: Maybe<Scalars['DateTime']['output']>;
  whats_app_phone_number?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

export type ContributorTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};

export type ContributorAvgOrderByAggregateInput = {
  telegram_chat_id?: InputMaybe<SortOrder>;
  telegram_id?: InputMaybe<SortOrder>;
};

export type ContributorCountOrderByAggregateInput = {
  additional_consent_given_at?: InputMaybe<SortOrder>;
  additional_email?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  data_processing_consented_at?: InputMaybe<SortOrder>;
  deactivated_at?: InputMaybe<SortOrder>;
  deactivated_by_admin?: InputMaybe<SortOrder>;
  deactivated_by_user_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  signal_onboarding_completed_at?: InputMaybe<SortOrder>;
  signal_phone_number?: InputMaybe<SortOrder>;
  telegram_chat_id?: InputMaybe<SortOrder>;
  telegram_id?: InputMaybe<SortOrder>;
  telegram_onboarding_token?: InputMaybe<SortOrder>;
  threema_id?: InputMaybe<SortOrder>;
  unsubscribed_at?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  whats_app_message_template_responded_at?: InputMaybe<SortOrder>;
  whats_app_message_template_sent_at?: InputMaybe<SortOrder>;
  whats_app_phone_number?: InputMaybe<SortOrder>;
  zip_code?: InputMaybe<SortOrder>;
};

export type ContributorCreateInput = {
  additional_consent_given_at?: InputMaybe<Scalars['DateTime']['input']>;
  additional_email?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  data_processing_consented_at?: InputMaybe<Scalars['DateTime']['input']>;
  deactivated_at?: InputMaybe<Scalars['DateTime']['input']>;
  deactivated_by_admin?: InputMaybe<Scalars['Boolean']['input']>;
  deactivated_by_user_id?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  signal_onboarding_completed_at?: InputMaybe<Scalars['DateTime']['input']>;
  signal_phone_number?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutContributorsInput>;
  telegram_chat_id?: InputMaybe<Scalars['BigInt']['input']>;
  telegram_id?: InputMaybe<Scalars['BigInt']['input']>;
  telegram_onboarding_token?: InputMaybe<Scalars['String']['input']>;
  threema_id?: InputMaybe<Scalars['String']['input']>;
  unsubscribed_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  whats_app_message_template_responded_at?: InputMaybe<
    Scalars['DateTime']['input']
  >;
  whats_app_message_template_sent_at?: InputMaybe<Scalars['DateTime']['input']>;
  whats_app_phone_number?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type ContributorCreateManyInput = {
  additional_consent_given_at?: InputMaybe<Scalars['DateTime']['input']>;
  additional_email?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  data_processing_consented_at?: InputMaybe<Scalars['DateTime']['input']>;
  deactivated_at?: InputMaybe<Scalars['DateTime']['input']>;
  deactivated_by_admin?: InputMaybe<Scalars['Boolean']['input']>;
  deactivated_by_user_id?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  signal_onboarding_completed_at?: InputMaybe<Scalars['DateTime']['input']>;
  signal_phone_number?: InputMaybe<Scalars['String']['input']>;
  telegram_chat_id?: InputMaybe<Scalars['BigInt']['input']>;
  telegram_id?: InputMaybe<Scalars['BigInt']['input']>;
  telegram_onboarding_token?: InputMaybe<Scalars['String']['input']>;
  threema_id?: InputMaybe<Scalars['String']['input']>;
  unsubscribed_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  whats_app_message_template_responded_at?: InputMaybe<
    Scalars['DateTime']['input']
  >;
  whats_app_message_template_sent_at?: InputMaybe<Scalars['DateTime']['input']>;
  whats_app_phone_number?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type ContributorCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<ContributorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ContributorCreateOrConnectWithoutTagsInput>
  >;
  create?: InputMaybe<Array<ContributorCreateWithoutTagsInput>>;
};

export type ContributorCreateOrConnectWithoutTagsInput = {
  create: ContributorCreateWithoutTagsInput;
  where: ContributorWhereUniqueInput;
};

export type ContributorCreateWithoutTagsInput = {
  additional_consent_given_at?: InputMaybe<Scalars['DateTime']['input']>;
  additional_email?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  data_processing_consented_at?: InputMaybe<Scalars['DateTime']['input']>;
  deactivated_at?: InputMaybe<Scalars['DateTime']['input']>;
  deactivated_by_admin?: InputMaybe<Scalars['Boolean']['input']>;
  deactivated_by_user_id?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  signal_onboarding_completed_at?: InputMaybe<Scalars['DateTime']['input']>;
  signal_phone_number?: InputMaybe<Scalars['String']['input']>;
  telegram_chat_id?: InputMaybe<Scalars['BigInt']['input']>;
  telegram_id?: InputMaybe<Scalars['BigInt']['input']>;
  telegram_onboarding_token?: InputMaybe<Scalars['String']['input']>;
  threema_id?: InputMaybe<Scalars['String']['input']>;
  unsubscribed_at?: InputMaybe<Scalars['DateTime']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  whats_app_message_template_responded_at?: InputMaybe<
    Scalars['DateTime']['input']
  >;
  whats_app_message_template_sent_at?: InputMaybe<Scalars['DateTime']['input']>;
  whats_app_phone_number?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type ContributorListRelationFilter = {
  every?: InputMaybe<ContributorWhereInput>;
  none?: InputMaybe<ContributorWhereInput>;
  some?: InputMaybe<ContributorWhereInput>;
};

export type ContributorMaxOrderByAggregateInput = {
  additional_consent_given_at?: InputMaybe<SortOrder>;
  additional_email?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  data_processing_consented_at?: InputMaybe<SortOrder>;
  deactivated_at?: InputMaybe<SortOrder>;
  deactivated_by_admin?: InputMaybe<SortOrder>;
  deactivated_by_user_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  signal_onboarding_completed_at?: InputMaybe<SortOrder>;
  signal_phone_number?: InputMaybe<SortOrder>;
  telegram_chat_id?: InputMaybe<SortOrder>;
  telegram_id?: InputMaybe<SortOrder>;
  telegram_onboarding_token?: InputMaybe<SortOrder>;
  threema_id?: InputMaybe<SortOrder>;
  unsubscribed_at?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  whats_app_message_template_responded_at?: InputMaybe<SortOrder>;
  whats_app_message_template_sent_at?: InputMaybe<SortOrder>;
  whats_app_phone_number?: InputMaybe<SortOrder>;
  zip_code?: InputMaybe<SortOrder>;
};

export type ContributorMinOrderByAggregateInput = {
  additional_consent_given_at?: InputMaybe<SortOrder>;
  additional_email?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  data_processing_consented_at?: InputMaybe<SortOrder>;
  deactivated_at?: InputMaybe<SortOrder>;
  deactivated_by_admin?: InputMaybe<SortOrder>;
  deactivated_by_user_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  signal_onboarding_completed_at?: InputMaybe<SortOrder>;
  signal_phone_number?: InputMaybe<SortOrder>;
  telegram_chat_id?: InputMaybe<SortOrder>;
  telegram_id?: InputMaybe<SortOrder>;
  telegram_onboarding_token?: InputMaybe<SortOrder>;
  threema_id?: InputMaybe<SortOrder>;
  unsubscribed_at?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  whats_app_message_template_responded_at?: InputMaybe<SortOrder>;
  whats_app_message_template_sent_at?: InputMaybe<SortOrder>;
  whats_app_phone_number?: InputMaybe<SortOrder>;
  zip_code?: InputMaybe<SortOrder>;
};

export type ContributorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ContributorOrderByWithAggregationInput = {
  _avg?: InputMaybe<ContributorAvgOrderByAggregateInput>;
  _count?: InputMaybe<ContributorCountOrderByAggregateInput>;
  _max?: InputMaybe<ContributorMaxOrderByAggregateInput>;
  _min?: InputMaybe<ContributorMinOrderByAggregateInput>;
  _sum?: InputMaybe<ContributorSumOrderByAggregateInput>;
  additional_consent_given_at?: InputMaybe<SortOrder>;
  additional_email?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  data_processing_consented_at?: InputMaybe<SortOrder>;
  deactivated_at?: InputMaybe<SortOrder>;
  deactivated_by_admin?: InputMaybe<SortOrder>;
  deactivated_by_user_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  signal_onboarding_completed_at?: InputMaybe<SortOrder>;
  signal_phone_number?: InputMaybe<SortOrder>;
  telegram_chat_id?: InputMaybe<SortOrder>;
  telegram_id?: InputMaybe<SortOrder>;
  telegram_onboarding_token?: InputMaybe<SortOrder>;
  threema_id?: InputMaybe<SortOrder>;
  unsubscribed_at?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  whats_app_message_template_responded_at?: InputMaybe<SortOrder>;
  whats_app_message_template_sent_at?: InputMaybe<SortOrder>;
  whats_app_phone_number?: InputMaybe<SortOrder>;
  zip_code?: InputMaybe<SortOrder>;
};

export type ContributorOrderByWithRelationInput = {
  additional_consent_given_at?: InputMaybe<SortOrder>;
  additional_email?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  data_processing_consented_at?: InputMaybe<SortOrder>;
  deactivated_at?: InputMaybe<SortOrder>;
  deactivated_by_admin?: InputMaybe<SortOrder>;
  deactivated_by_user_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  organization_id?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  signal_onboarding_completed_at?: InputMaybe<SortOrder>;
  signal_phone_number?: InputMaybe<SortOrder>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  telegram_chat_id?: InputMaybe<SortOrder>;
  telegram_id?: InputMaybe<SortOrder>;
  telegram_onboarding_token?: InputMaybe<SortOrder>;
  threema_id?: InputMaybe<SortOrder>;
  unsubscribed_at?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  whats_app_message_template_responded_at?: InputMaybe<SortOrder>;
  whats_app_message_template_sent_at?: InputMaybe<SortOrder>;
  whats_app_phone_number?: InputMaybe<SortOrder>;
  zip_code?: InputMaybe<SortOrder>;
};

export enum ContributorScalarFieldEnum {
  AdditionalConsentGivenAt = 'additional_consent_given_at',
  AdditionalEmail = 'additional_email',
  City = 'city',
  CreatedAt = 'created_at',
  DataProcessingConsentedAt = 'data_processing_consented_at',
  DeactivatedAt = 'deactivated_at',
  DeactivatedByAdmin = 'deactivated_by_admin',
  DeactivatedByUserId = 'deactivated_by_user_id',
  Email = 'email',
  FirstName = 'first_name',
  Id = 'id',
  LastName = 'last_name',
  Note = 'note',
  OrganizationId = 'organization_id',
  Phone = 'phone',
  SignalOnboardingCompletedAt = 'signal_onboarding_completed_at',
  SignalPhoneNumber = 'signal_phone_number',
  TelegramChatId = 'telegram_chat_id',
  TelegramId = 'telegram_id',
  TelegramOnboardingToken = 'telegram_onboarding_token',
  ThreemaId = 'threema_id',
  UnsubscribedAt = 'unsubscribed_at',
  UpdatedAt = 'updated_at',
  Username = 'username',
  WhatsAppMessageTemplateRespondedAt = 'whats_app_message_template_responded_at',
  WhatsAppMessageTemplateSentAt = 'whats_app_message_template_sent_at',
  WhatsAppPhoneNumber = 'whats_app_phone_number',
  ZipCode = 'zip_code',
}

export type ContributorScalarWhereInput = {
  AND?: InputMaybe<Array<ContributorScalarWhereInput>>;
  NOT?: InputMaybe<Array<ContributorScalarWhereInput>>;
  OR?: InputMaybe<Array<ContributorScalarWhereInput>>;
  additional_consent_given_at?: InputMaybe<DateTimeNullableFilter>;
  additional_email?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  data_processing_consented_at?: InputMaybe<DateTimeNullableFilter>;
  deactivated_at?: InputMaybe<DateTimeNullableFilter>;
  deactivated_by_admin?: InputMaybe<BoolFilter>;
  deactivated_by_user_id?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  organization_id?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  signal_onboarding_completed_at?: InputMaybe<DateTimeNullableFilter>;
  signal_phone_number?: InputMaybe<StringNullableFilter>;
  telegram_chat_id?: InputMaybe<BigIntNullableFilter>;
  telegram_id?: InputMaybe<BigIntNullableFilter>;
  telegram_onboarding_token?: InputMaybe<StringNullableFilter>;
  threema_id?: InputMaybe<StringNullableFilter>;
  unsubscribed_at?: InputMaybe<DateTimeNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringNullableFilter>;
  whats_app_message_template_responded_at?: InputMaybe<DateTimeNullableFilter>;
  whats_app_message_template_sent_at?: InputMaybe<DateTimeNullableFilter>;
  whats_app_phone_number?: InputMaybe<StringNullableFilter>;
  zip_code?: InputMaybe<StringNullableFilter>;
};

export type ContributorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ContributorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ContributorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ContributorScalarWhereWithAggregatesInput>>;
  additional_consent_given_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  additional_email?: InputMaybe<StringNullableWithAggregatesFilter>;
  city?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  data_processing_consented_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  deactivated_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  deactivated_by_admin?: InputMaybe<BoolWithAggregatesFilter>;
  deactivated_by_user_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  note?: InputMaybe<StringNullableWithAggregatesFilter>;
  organization_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  signal_onboarding_completed_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  signal_phone_number?: InputMaybe<StringNullableWithAggregatesFilter>;
  telegram_chat_id?: InputMaybe<BigIntNullableWithAggregatesFilter>;
  telegram_id?: InputMaybe<BigIntNullableWithAggregatesFilter>;
  telegram_onboarding_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  threema_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  unsubscribed_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringNullableWithAggregatesFilter>;
  whats_app_message_template_responded_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  whats_app_message_template_sent_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  whats_app_phone_number?: InputMaybe<StringNullableWithAggregatesFilter>;
  zip_code?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type ContributorSumOrderByAggregateInput = {
  telegram_chat_id?: InputMaybe<SortOrder>;
  telegram_id?: InputMaybe<SortOrder>;
};

export type ContributorUpdateInput = {
  additional_consent_given_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  additional_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data_processing_consented_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deactivated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deactivated_by_admin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  deactivated_by_user_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  organization_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  signal_onboarding_completed_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  signal_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutContributorsNestedInput>;
  telegram_chat_id?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  telegram_id?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  telegram_onboarding_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  threema_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unsubscribed_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  whats_app_message_template_responded_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  whats_app_message_template_sent_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  whats_app_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zip_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ContributorUpdateManyMutationInput = {
  additional_consent_given_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  additional_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data_processing_consented_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deactivated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deactivated_by_admin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  deactivated_by_user_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  organization_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  signal_onboarding_completed_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  signal_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  telegram_chat_id?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  telegram_id?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  telegram_onboarding_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  threema_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unsubscribed_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  whats_app_message_template_responded_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  whats_app_message_template_sent_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  whats_app_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zip_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ContributorUpdateManyWithWhereWithoutTagsInput = {
  data: ContributorUpdateManyMutationInput;
  where: ContributorScalarWhereInput;
};

export type ContributorUpdateManyWithoutTagsNestedInput = {
  connect?: InputMaybe<Array<ContributorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ContributorCreateOrConnectWithoutTagsInput>
  >;
  create?: InputMaybe<Array<ContributorCreateWithoutTagsInput>>;
  delete?: InputMaybe<Array<ContributorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ContributorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ContributorWhereUniqueInput>>;
  set?: InputMaybe<Array<ContributorWhereUniqueInput>>;
  update?: InputMaybe<Array<ContributorUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: InputMaybe<
    Array<ContributorUpdateManyWithWhereWithoutTagsInput>
  >;
  upsert?: InputMaybe<Array<ContributorUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type ContributorUpdateWithWhereUniqueWithoutTagsInput = {
  data: ContributorUpdateWithoutTagsInput;
  where: ContributorWhereUniqueInput;
};

export type ContributorUpdateWithoutTagsInput = {
  additional_consent_given_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  additional_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data_processing_consented_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deactivated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deactivated_by_admin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  deactivated_by_user_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  organization_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  signal_onboarding_completed_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  signal_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  telegram_chat_id?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  telegram_id?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  telegram_onboarding_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  threema_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unsubscribed_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  whats_app_message_template_responded_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  whats_app_message_template_sent_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  whats_app_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zip_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ContributorUpsertWithWhereUniqueWithoutTagsInput = {
  create: ContributorCreateWithoutTagsInput;
  update: ContributorUpdateWithoutTagsInput;
  where: ContributorWhereUniqueInput;
};

export type ContributorWhereInput = {
  AND?: InputMaybe<Array<ContributorWhereInput>>;
  NOT?: InputMaybe<Array<ContributorWhereInput>>;
  OR?: InputMaybe<Array<ContributorWhereInput>>;
  additional_consent_given_at?: InputMaybe<DateTimeNullableFilter>;
  additional_email?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  data_processing_consented_at?: InputMaybe<DateTimeNullableFilter>;
  deactivated_at?: InputMaybe<DateTimeNullableFilter>;
  deactivated_by_admin?: InputMaybe<BoolFilter>;
  deactivated_by_user_id?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  organization_id?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  signal_onboarding_completed_at?: InputMaybe<DateTimeNullableFilter>;
  signal_phone_number?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  telegram_chat_id?: InputMaybe<BigIntNullableFilter>;
  telegram_id?: InputMaybe<BigIntNullableFilter>;
  telegram_onboarding_token?: InputMaybe<StringNullableFilter>;
  threema_id?: InputMaybe<StringNullableFilter>;
  unsubscribed_at?: InputMaybe<DateTimeNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringNullableFilter>;
  whats_app_message_template_responded_at?: InputMaybe<DateTimeNullableFilter>;
  whats_app_message_template_sent_at?: InputMaybe<DateTimeNullableFilter>;
  whats_app_phone_number?: InputMaybe<StringNullableFilter>;
  zip_code?: InputMaybe<StringNullableFilter>;
};

export type ContributorWhereUniqueInput = {
  AND?: InputMaybe<Array<ContributorWhereInput>>;
  NOT?: InputMaybe<Array<ContributorWhereInput>>;
  OR?: InputMaybe<Array<ContributorWhereInput>>;
  additional_consent_given_at?: InputMaybe<DateTimeNullableFilter>;
  additional_email?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  data_processing_consented_at?: InputMaybe<DateTimeNullableFilter>;
  deactivated_at?: InputMaybe<DateTimeNullableFilter>;
  deactivated_by_admin?: InputMaybe<BoolFilter>;
  deactivated_by_user_id?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  organization_id?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  signal_onboarding_completed_at?: InputMaybe<DateTimeNullableFilter>;
  signal_phone_number?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  telegram_chat_id?: InputMaybe<BigIntNullableFilter>;
  telegram_id?: InputMaybe<BigIntNullableFilter>;
  telegram_onboarding_token?: InputMaybe<StringNullableFilter>;
  threema_id?: InputMaybe<StringNullableFilter>;
  unsubscribed_at?: InputMaybe<DateTimeNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringNullableFilter>;
  whats_app_message_template_responded_at?: InputMaybe<DateTimeNullableFilter>;
  whats_app_message_template_sent_at?: InputMaybe<DateTimeNullableFilter>;
  whats_app_phone_number?: InputMaybe<StringNullableFilter>;
  zip_code?: InputMaybe<StringNullableFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<Role>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<Role>;
  notIn?: InputMaybe<Array<Role>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyContributor: Array<Contributor>;
  createManyRequest: Array<Request>;
  createManyTag: Array<Tag>;
  createManyUser: Array<User>;
  createOneContributor: Contributor;
  createOneRequest: Request;
  createOneTag: Tag;
  createOneUser: User;
  deleteManyContributor?: Maybe<BatchPayload>;
  deleteManyRequest?: Maybe<BatchPayload>;
  deleteManyTag?: Maybe<BatchPayload>;
  deleteManyUser?: Maybe<BatchPayload>;
  deleteOneContributor?: Maybe<Contributor>;
  deleteOneRequest?: Maybe<Request>;
  deleteOneTag?: Maybe<Tag>;
  deleteOneUser?: Maybe<User>;
  updateManyContributor: BatchPayload;
  updateManyRequest: BatchPayload;
  updateManyTag: BatchPayload;
  updateManyUser: BatchPayload;
  updateOneContributor?: Maybe<Contributor>;
  updateOneRequest?: Maybe<Request>;
  updateOneTag?: Maybe<Tag>;
  updateOneUser?: Maybe<User>;
  upsertOneContributor: Contributor;
  upsertOneRequest: Request;
  upsertOneTag: Tag;
  upsertOneUser: User;
};

export type MutationCreateManyContributorArgs = {
  data: Array<ContributorCreateInput>;
};

export type MutationCreateManyRequestArgs = {
  data: Array<RequestCreateInput>;
};

export type MutationCreateManyTagArgs = {
  data: Array<TagCreateInput>;
};

export type MutationCreateManyUserArgs = {
  data: Array<UserCreateInput>;
};

export type MutationCreateOneContributorArgs = {
  data: ContributorCreateInput;
};

export type MutationCreateOneRequestArgs = {
  data: RequestCreateInput;
};

export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteManyContributorArgs = {
  where: ContributorWhereInput;
};

export type MutationDeleteManyRequestArgs = {
  where: RequestWhereInput;
};

export type MutationDeleteManyTagArgs = {
  where: TagWhereInput;
};

export type MutationDeleteManyUserArgs = {
  where: UserWhereInput;
};

export type MutationDeleteOneContributorArgs = {
  where: ContributorWhereUniqueInput;
};

export type MutationDeleteOneRequestArgs = {
  where: RequestWhereUniqueInput;
};

export type MutationDeleteOneTagArgs = {
  where: TagWhereUniqueInput;
};

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpdateManyContributorArgs = {
  data: ContributorUpdateManyMutationInput;
  where?: InputMaybe<ContributorWhereInput>;
};

export type MutationUpdateManyRequestArgs = {
  data: RequestUpdateManyMutationInput;
  where?: InputMaybe<RequestWhereInput>;
};

export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where?: InputMaybe<TagWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type MutationUpdateOneContributorArgs = {
  data: ContributorUpdateInput;
  where: ContributorWhereUniqueInput;
};

export type MutationUpdateOneRequestArgs = {
  data: RequestUpdateInput;
  where: RequestWhereUniqueInput;
};

export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpsertOneContributorArgs = {
  create: ContributorCreateInput;
  update: ContributorUpdateInput;
  where: ContributorWhereUniqueInput;
};

export type MutationUpsertOneRequestArgs = {
  create: RequestCreateInput;
  update: RequestUpdateInput;
  where: RequestWhereUniqueInput;
};

export type MutationUpsertOneTagArgs = {
  create: TagCreateInput;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedBigIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBigIntNullableFilter>;
  _min?: InputMaybe<NestedBigIntNullableFilter>;
  _sum?: InputMaybe<NestedBigIntNullableFilter>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<Role>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<Role>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableBigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']['input']>;
  divide?: InputMaybe<Scalars['BigInt']['input']>;
  increment?: InputMaybe<Scalars['BigInt']['input']>;
  multiply?: InputMaybe<Scalars['BigInt']['input']>;
  set?: InputMaybe<Scalars['BigInt']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last',
}

export type Query = {
  __typename?: 'Query';
  countContributor: Scalars['Int']['output'];
  countRequest: Scalars['Int']['output'];
  countTag: Scalars['Int']['output'];
  countUser: Scalars['Int']['output'];
  findFirstContributor?: Maybe<Contributor>;
  findFirstRequest?: Maybe<Request>;
  findFirstTag?: Maybe<Tag>;
  findFirstUser?: Maybe<User>;
  findManyContributor: Array<Contributor>;
  findManyRequest: Array<Request>;
  findManyTag: Array<Tag>;
  findManyUser: Array<User>;
  findUniqueContributor?: Maybe<Contributor>;
  findUniqueRequest?: Maybe<Request>;
  findUniqueTag?: Maybe<Tag>;
  findUniqueUser?: Maybe<User>;
  ok: Scalars['Boolean']['output'];
};

export type QueryCountContributorArgs = {
  cursor?: InputMaybe<ContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContributorWhereInput>;
};

export type QueryCountRequestArgs = {
  cursor?: InputMaybe<RequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestWhereInput>;
};

export type QueryCountTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};

export type QueryCountUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstContributorArgs = {
  cursor?: InputMaybe<ContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContributorWhereInput>;
};

export type QueryFindFirstRequestArgs = {
  cursor?: InputMaybe<RequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestWhereInput>;
};

export type QueryFindFirstTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindManyContributorArgs = {
  cursor?: InputMaybe<ContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContributorWhereInput>;
};

export type QueryFindManyRequestArgs = {
  cursor?: InputMaybe<RequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestWhereInput>;
};

export type QueryFindManyTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};

export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindUniqueContributorArgs = {
  where: ContributorWhereUniqueInput;
};

export type QueryFindUniqueRequestArgs = {
  where: RequestWhereUniqueInput;
};

export type QueryFindUniqueTagArgs = {
  where: TagWhereUniqueInput;
};

export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Request = {
  __typename?: 'Request';
  broadcasted_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  schedule_send_for: Scalars['DateTime']['output'];
  tags: Array<Tag>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type RequestTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};

export type RequestCountOrderByAggregateInput = {
  broadcasted_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  schedule_send_for?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RequestCreateInput = {
  broadcasted_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  schedule_send_for: Scalars['DateTime']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutRequestsInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutRequestsInput;
};

export type RequestCreateManyInput = {
  broadcasted_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  schedule_send_for: Scalars['DateTime']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_id: Scalars['String']['input'];
};

export type RequestCreateManyUserInput = {
  broadcasted_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  schedule_send_for: Scalars['DateTime']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RequestCreateManyUserInputEnvelope = {
  data: Array<RequestCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RequestCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<RequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RequestCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<RequestCreateWithoutTagsInput>>;
};

export type RequestCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<RequestCreateManyUserInputEnvelope>;
};

export type RequestCreateOrConnectWithoutTagsInput = {
  create: RequestCreateWithoutTagsInput;
  where: RequestWhereUniqueInput;
};

export type RequestCreateOrConnectWithoutUserInput = {
  create: RequestCreateWithoutUserInput;
  where: RequestWhereUniqueInput;
};

export type RequestCreateWithoutTagsInput = {
  broadcasted_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  schedule_send_for: Scalars['DateTime']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutRequestsInput;
};

export type RequestCreateWithoutUserInput = {
  broadcasted_at?: InputMaybe<Scalars['DateTime']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  schedule_send_for: Scalars['DateTime']['input'];
  tags?: InputMaybe<TagCreateNestedManyWithoutRequestsInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RequestListRelationFilter = {
  every?: InputMaybe<RequestWhereInput>;
  none?: InputMaybe<RequestWhereInput>;
  some?: InputMaybe<RequestWhereInput>;
};

export type RequestMaxOrderByAggregateInput = {
  broadcasted_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  schedule_send_for?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RequestMinOrderByAggregateInput = {
  broadcasted_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  schedule_send_for?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RequestOrderByWithAggregationInput = {
  _count?: InputMaybe<RequestCountOrderByAggregateInput>;
  _max?: InputMaybe<RequestMaxOrderByAggregateInput>;
  _min?: InputMaybe<RequestMinOrderByAggregateInput>;
  broadcasted_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  schedule_send_for?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RequestOrderByWithRelationInput = {
  broadcasted_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  schedule_send_for?: InputMaybe<SortOrder>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  text?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum RequestScalarFieldEnum {
  BroadcastedAt = 'broadcasted_at',
  CreatedAt = 'created_at',
  Id = 'id',
  ScheduleSendFor = 'schedule_send_for',
  Text = 'text',
  Title = 'title',
  UpdatedAt = 'updated_at',
  UserId = 'user_id',
}

export type RequestScalarWhereInput = {
  AND?: InputMaybe<Array<RequestScalarWhereInput>>;
  NOT?: InputMaybe<Array<RequestScalarWhereInput>>;
  OR?: InputMaybe<Array<RequestScalarWhereInput>>;
  broadcasted_at?: InputMaybe<DateTimeNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  schedule_send_for?: InputMaybe<DateTimeFilter>;
  text?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type RequestScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RequestScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RequestScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RequestScalarWhereWithAggregatesInput>>;
  broadcasted_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  schedule_send_for?: InputMaybe<DateTimeWithAggregatesFilter>;
  text?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type RequestUpdateInput = {
  broadcasted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  schedule_send_for?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutRequestsNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRequestsNestedInput>;
};

export type RequestUpdateManyMutationInput = {
  broadcasted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  schedule_send_for?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RequestUpdateManyWithWhereWithoutTagsInput = {
  data: RequestUpdateManyMutationInput;
  where: RequestScalarWhereInput;
};

export type RequestUpdateManyWithWhereWithoutUserInput = {
  data: RequestUpdateManyMutationInput;
  where: RequestScalarWhereInput;
};

export type RequestUpdateManyWithoutTagsNestedInput = {
  connect?: InputMaybe<Array<RequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RequestCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<RequestCreateWithoutTagsInput>>;
  delete?: InputMaybe<Array<RequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RequestWhereUniqueInput>>;
  set?: InputMaybe<Array<RequestWhereUniqueInput>>;
  update?: InputMaybe<Array<RequestUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: InputMaybe<Array<RequestUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: InputMaybe<Array<RequestUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type RequestUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<RequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<RequestCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RequestWhereUniqueInput>>;
  set?: InputMaybe<Array<RequestWhereUniqueInput>>;
  update?: InputMaybe<Array<RequestUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RequestUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RequestUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RequestUpdateWithWhereUniqueWithoutTagsInput = {
  data: RequestUpdateWithoutTagsInput;
  where: RequestWhereUniqueInput;
};

export type RequestUpdateWithWhereUniqueWithoutUserInput = {
  data: RequestUpdateWithoutUserInput;
  where: RequestWhereUniqueInput;
};

export type RequestUpdateWithoutTagsInput = {
  broadcasted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  schedule_send_for?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRequestsNestedInput>;
};

export type RequestUpdateWithoutUserInput = {
  broadcasted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  schedule_send_for?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutRequestsNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RequestUpsertWithWhereUniqueWithoutTagsInput = {
  create: RequestCreateWithoutTagsInput;
  update: RequestUpdateWithoutTagsInput;
  where: RequestWhereUniqueInput;
};

export type RequestUpsertWithWhereUniqueWithoutUserInput = {
  create: RequestCreateWithoutUserInput;
  update: RequestUpdateWithoutUserInput;
  where: RequestWhereUniqueInput;
};

export type RequestWhereInput = {
  AND?: InputMaybe<Array<RequestWhereInput>>;
  NOT?: InputMaybe<Array<RequestWhereInput>>;
  OR?: InputMaybe<Array<RequestWhereInput>>;
  broadcasted_at?: InputMaybe<DateTimeNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  schedule_send_for?: InputMaybe<DateTimeFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  text?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  user_id?: InputMaybe<StringFilter>;
};

export type RequestWhereUniqueInput = {
  AND?: InputMaybe<Array<RequestWhereInput>>;
  NOT?: InputMaybe<Array<RequestWhereInput>>;
  OR?: InputMaybe<Array<RequestWhereInput>>;
  broadcasted_at?: InputMaybe<DateTimeNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  schedule_send_for?: InputMaybe<DateTimeFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  text?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  user_id?: InputMaybe<StringFilter>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  contributors: Array<Contributor>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  requests: Array<Request>;
  updated_at: Scalars['DateTime']['output'];
};

export type TagContributorsArgs = {
  cursor?: InputMaybe<ContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContributorWhereInput>;
};

export type TagRequestsArgs = {
  cursor?: InputMaybe<RequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestWhereInput>;
};

export type TagCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TagCreateInput = {
  contributors?: InputMaybe<ContributorCreateNestedManyWithoutTagsInput>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  requests?: InputMaybe<RequestCreateNestedManyWithoutTagsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagCreateNestedManyWithoutContributorsInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TagCreateOrConnectWithoutContributorsInput>
  >;
  create?: InputMaybe<Array<TagCreateWithoutContributorsInput>>;
};

export type TagCreateNestedManyWithoutRequestsInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutRequestsInput>>;
  create?: InputMaybe<Array<TagCreateWithoutRequestsInput>>;
};

export type TagCreateOrConnectWithoutContributorsInput = {
  create: TagCreateWithoutContributorsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutRequestsInput = {
  create: TagCreateWithoutRequestsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutContributorsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  requests?: InputMaybe<RequestCreateNestedManyWithoutTagsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagCreateWithoutRequestsInput = {
  contributors?: InputMaybe<ContributorCreateNestedManyWithoutTagsInput>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TagMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagOrderByWithAggregationInput = {
  _count?: InputMaybe<TagCountOrderByAggregateInput>;
  _max?: InputMaybe<TagMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagMinOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  contributors?: InputMaybe<ContributorOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  requests?: InputMaybe<RequestOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at',
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TagUpdateInput = {
  contributors?: InputMaybe<ContributorUpdateManyWithoutTagsNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  requests?: InputMaybe<RequestUpdateManyWithoutTagsNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutContributorsInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithWhereWithoutRequestsInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutContributorsNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TagCreateOrConnectWithoutContributorsInput>
  >;
  create?: InputMaybe<Array<TagCreateWithoutContributorsInput>>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutContributorsInput>>;
  updateMany?: InputMaybe<
    Array<TagUpdateManyWithWhereWithoutContributorsInput>
  >;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutContributorsInput>>;
};

export type TagUpdateManyWithoutRequestsNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutRequestsInput>>;
  create?: InputMaybe<Array<TagCreateWithoutRequestsInput>>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutRequestsInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutRequestsInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutRequestsInput>>;
};

export type TagUpdateWithWhereUniqueWithoutContributorsInput = {
  data: TagUpdateWithoutContributorsInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithWhereUniqueWithoutRequestsInput = {
  data: TagUpdateWithoutRequestsInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutContributorsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  requests?: InputMaybe<RequestUpdateManyWithoutTagsNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutRequestsInput = {
  contributors?: InputMaybe<ContributorUpdateManyWithoutTagsNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutContributorsInput = {
  create: TagCreateWithoutContributorsInput;
  update: TagUpdateWithoutContributorsInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutRequestsInput = {
  create: TagCreateWithoutRequestsInput;
  update: TagUpdateWithoutRequestsInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  contributors?: InputMaybe<ContributorListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  requests?: InputMaybe<RequestListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  contributors?: InputMaybe<ContributorListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  requests?: InputMaybe<RequestListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export enum TransactionIsolationLevel {
  ReadCommitted = 'ReadCommitted',
  ReadUncommitted = 'ReadUncommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  last_name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  requests: Array<Request>;
  role: Role;
  updated_at: Scalars['DateTime']['output'];
};

export type UserRequestsArgs = {
  cursor?: InputMaybe<RequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<RequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestWhereInput>;
};

export type UserCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  requests?: InputMaybe<RequestCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedOneWithoutRequestsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRequestsInput>;
  create?: InputMaybe<UserCreateWithoutRequestsInput>;
};

export type UserCreateOrConnectWithoutRequestsInput = {
  create: UserCreateWithoutRequestsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutRequestsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  requests?: InputMaybe<RequestOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'created_at',
  Email = 'email',
  FirstName = 'first_name',
  Id = 'id',
  LastName = 'last_name',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updated_at',
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  requests?: InputMaybe<RequestUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRequestsInput>;
  create?: InputMaybe<UserCreateWithoutRequestsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutRequestsInput>;
  upsert?: InputMaybe<UserUpsertWithoutRequestsInput>;
};

export type UserUpdateToOneWithWhereWithoutRequestsInput = {
  data: UserUpdateWithoutRequestsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutRequestsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutRequestsInput = {
  create: UserCreateWithoutRequestsInput;
  update: UserUpdateWithoutRequestsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  requests?: InputMaybe<RequestListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  requests?: InputMaybe<RequestListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CreateOneRequestMutationVariables = Exact<{
  data: RequestCreateInput;
}>;

export type CreateOneRequestMutation = {
  __typename?: 'Mutation';
  createOneRequest: { __typename?: 'Request'; id: string };
};

export type FindManyContributorQueryVariables = Exact<{
  where?: InputMaybe<ContributorWhereInput>;
}>;

export type FindManyContributorQuery = {
  __typename?: 'Query';
  findManyContributor: Array<{
    __typename?: 'Contributor';
    id: string;
    first_name: string;
    last_name: string;
    email?: string | null;
    signal_phone_number?: string | null;
    telegram_id?: any | null;
    threema_id?: string | null;
    whats_app_phone_number?: string | null;
    tags: Array<{ __typename?: 'Tag'; id: string; name: string }>;
  }>;
};

export type CountContributorQueryVariables = Exact<{
  where?: InputMaybe<ContributorWhereInput>;
}>;

export type CountContributorQuery = {
  __typename?: 'Query';
  countContributor: number;
};

export type FindManyRequestQueryVariables = Exact<{
  where?: InputMaybe<RequestWhereInput>;
}>;

export type FindManyRequestQuery = {
  __typename?: 'Query';
  findManyRequest: Array<{
    __typename?: 'Request';
    id: string;
    title: string;
    text?: string | null;
    created_at: string;
    updated_at: string;
    broadcasted_at?: string | null;
    schedule_send_for: string;
    user_id: string;
    tags: Array<{ __typename?: 'Tag'; id: string; name: string }>;
    user: {
      __typename?: 'User';
      id: string;
      first_name: string;
      last_name: string;
    };
  }>;
};

export type CountRequestQueryVariables = Exact<{
  where?: InputMaybe<RequestWhereInput>;
}>;

export type CountRequestQuery = { __typename?: 'Query'; countRequest: number };

export type FindUniqueContributorQueryVariables = Exact<{
  where: ContributorWhereUniqueInput;
}>;

export type FindUniqueContributorQuery = {
  __typename?: 'Query';
  findUniqueContributor?: {
    __typename?: 'Contributor';
    id: string;
    first_name: string;
    last_name: string;
    created_at: string;
  } | null;
};

export type FindUniqueRequestQueryVariables = Exact<{
  where: RequestWhereUniqueInput;
}>;

export type FindUniqueRequestQuery = {
  __typename?: 'Query';
  findUniqueRequest?: {
    __typename?: 'Request';
    id: string;
    title: string;
    text?: string | null;
  } | null;
};

export type FindManyTagQueryVariables = Exact<{
  where?: InputMaybe<TagWhereInput>;
}>;

export type FindManyTagQuery = {
  __typename?: 'Query';
  findManyTag: Array<{ __typename?: 'Tag'; id: string; name: string }>;
};

export const CreateOneRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createOneRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RequestCreateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOneRequest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateOneRequestMutation,
  CreateOneRequestMutationVariables
>;
export const FindManyContributorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'findManyContributor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ContributorWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findManyContributor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'signal_phone_number' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'telegram_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'threema_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'whats_app_phone_number' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindManyContributorQuery,
  FindManyContributorQueryVariables
>;
export const CountContributorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'countContributor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ContributorWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countContributor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CountContributorQuery,
  CountContributorQueryVariables
>;
export const FindManyRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'findManyRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'RequestWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findManyRequest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'broadcasted_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'schedule_send_for' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'user_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'first_name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'last_name' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindManyRequestQuery,
  FindManyRequestQueryVariables
>;
export const CountRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'countRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'RequestWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countRequest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CountRequestQuery, CountRequestQueryVariables>;
export const FindUniqueContributorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'findUniqueContributor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ContributorWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findUniqueContributor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindUniqueContributorQuery,
  FindUniqueContributorQueryVariables
>;
export const FindUniqueRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'findUniqueRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RequestWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findUniqueRequest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindUniqueRequestQuery,
  FindUniqueRequestQueryVariables
>;
export const FindManyTagDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'findManyTag' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'TagWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findManyTag' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindManyTagQuery, FindManyTagQueryVariables>;

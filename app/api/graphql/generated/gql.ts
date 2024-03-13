/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation createOneRequest($data: RequestCreateInput!) {\n    createOneRequest(data: $data) {\n      id\n    }\n  }\n':
    types.CreateOneRequestDocument,
  '\n  query findManyContributor($where: ContributorWhereInput) {\n    findManyContributor(where: $where) {\n      id\n      first_name\n      last_name\n      email\n      signal_phone_number\n      telegram_id\n      threema_id\n      whats_app_phone_number\n      # telegram_chat_id\n      # created_at\n      # updated_at\n      # username\n      # additional_consent_given_at\n      # additional_email\n      # city\n      # data_processing_consented_at\n      # deactivated_at\n      # deactivated_by_admin\n      # deactivated_by_user_id\n      # email\n      # note\n      # organization_id\n      # phone\n      # signal_onboarding_completed_at\n      # signal_phone_number\n      tags {\n        id\n        name\n      }\n      # telegram_onboarding_token\n      # unsubscribed_at\n      # whats_app_message_template_responded_at\n      # whats_app_message_template_sent_at\n      # zip_code\n    }\n  }\n':
    types.FindManyContributorDocument,
  '\n  query countContributor($where: ContributorWhereInput) {\n    countContributor(where: $where)\n  }\n':
    types.CountContributorDocument,
  '\n  query findManyRequest($where: RequestWhereInput) {\n    findManyRequest(where: $where) {\n      id\n      title\n      text\n      created_at\n      updated_at\n      broadcasted_at\n      schedule_send_for\n      user_id\n      tags {\n        id\n        name\n      }\n      user {\n        id\n        first_name\n        last_name\n      }\n    }\n  }\n':
    types.FindManyRequestDocument,
  '\n  query countRequest($where: RequestWhereInput) {\n    countRequest(where: $where)\n  }\n':
    types.CountRequestDocument,
  '\n  query findUniqueContributor($where: ContributorWhereUniqueInput!) {\n    findUniqueContributor(where: $where) {\n      id\n      first_name\n      last_name\n      created_at\n    }\n  }\n':
    types.FindUniqueContributorDocument,
  '\n  query findUniqueRequest($where: RequestWhereUniqueInput!) {\n    findUniqueRequest(where: $where) {\n      id\n      title\n      text\n    }\n  }\n':
    types.FindUniqueRequestDocument,
  '\n  query findManyTag($where: TagWhereInput) {\n    findManyTag(where: $where) {\n      id\n      name\n    }\n  }\n':
    types.FindManyTagDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation createOneRequest($data: RequestCreateInput!) {\n    createOneRequest(data: $data) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation createOneRequest($data: RequestCreateInput!) {\n    createOneRequest(data: $data) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query findManyContributor($where: ContributorWhereInput) {\n    findManyContributor(where: $where) {\n      id\n      first_name\n      last_name\n      email\n      signal_phone_number\n      telegram_id\n      threema_id\n      whats_app_phone_number\n      # telegram_chat_id\n      # created_at\n      # updated_at\n      # username\n      # additional_consent_given_at\n      # additional_email\n      # city\n      # data_processing_consented_at\n      # deactivated_at\n      # deactivated_by_admin\n      # deactivated_by_user_id\n      # email\n      # note\n      # organization_id\n      # phone\n      # signal_onboarding_completed_at\n      # signal_phone_number\n      tags {\n        id\n        name\n      }\n      # telegram_onboarding_token\n      # unsubscribed_at\n      # whats_app_message_template_responded_at\n      # whats_app_message_template_sent_at\n      # zip_code\n    }\n  }\n',
): (typeof documents)['\n  query findManyContributor($where: ContributorWhereInput) {\n    findManyContributor(where: $where) {\n      id\n      first_name\n      last_name\n      email\n      signal_phone_number\n      telegram_id\n      threema_id\n      whats_app_phone_number\n      # telegram_chat_id\n      # created_at\n      # updated_at\n      # username\n      # additional_consent_given_at\n      # additional_email\n      # city\n      # data_processing_consented_at\n      # deactivated_at\n      # deactivated_by_admin\n      # deactivated_by_user_id\n      # email\n      # note\n      # organization_id\n      # phone\n      # signal_onboarding_completed_at\n      # signal_phone_number\n      tags {\n        id\n        name\n      }\n      # telegram_onboarding_token\n      # unsubscribed_at\n      # whats_app_message_template_responded_at\n      # whats_app_message_template_sent_at\n      # zip_code\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query countContributor($where: ContributorWhereInput) {\n    countContributor(where: $where)\n  }\n',
): (typeof documents)['\n  query countContributor($where: ContributorWhereInput) {\n    countContributor(where: $where)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query findManyRequest($where: RequestWhereInput) {\n    findManyRequest(where: $where) {\n      id\n      title\n      text\n      created_at\n      updated_at\n      broadcasted_at\n      schedule_send_for\n      user_id\n      tags {\n        id\n        name\n      }\n      user {\n        id\n        first_name\n        last_name\n      }\n    }\n  }\n',
): (typeof documents)['\n  query findManyRequest($where: RequestWhereInput) {\n    findManyRequest(where: $where) {\n      id\n      title\n      text\n      created_at\n      updated_at\n      broadcasted_at\n      schedule_send_for\n      user_id\n      tags {\n        id\n        name\n      }\n      user {\n        id\n        first_name\n        last_name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query countRequest($where: RequestWhereInput) {\n    countRequest(where: $where)\n  }\n',
): (typeof documents)['\n  query countRequest($where: RequestWhereInput) {\n    countRequest(where: $where)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query findUniqueContributor($where: ContributorWhereUniqueInput!) {\n    findUniqueContributor(where: $where) {\n      id\n      first_name\n      last_name\n      created_at\n    }\n  }\n',
): (typeof documents)['\n  query findUniqueContributor($where: ContributorWhereUniqueInput!) {\n    findUniqueContributor(where: $where) {\n      id\n      first_name\n      last_name\n      created_at\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query findUniqueRequest($where: RequestWhereUniqueInput!) {\n    findUniqueRequest(where: $where) {\n      id\n      title\n      text\n    }\n  }\n',
): (typeof documents)['\n  query findUniqueRequest($where: RequestWhereUniqueInput!) {\n    findUniqueRequest(where: $where) {\n      id\n      title\n      text\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query findManyTag($where: TagWhereInput) {\n    findManyTag(where: $where) {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  query findManyTag($where: TagWhereInput) {\n    findManyTag(where: $where) {\n      id\n      name\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

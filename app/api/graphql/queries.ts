import { gql } from './generated/gql';

export const findFirstUser = gql(/* GraphQL */ `
  {
    findFirstUser {
      id
    }
  }
`);

export const findManyContributor = gql(/* GraphQL */ `
  query findManyContributor($where: ContributorWhereInput) {
    findManyContributor(where: $where) {
      id
      first_name
      last_name
      email
      signal_phone_number
      telegram_id
      threema_id
      whats_app_phone_number
      tags {
        id
        name
      }
    }
  }
`);

export const contributorsCount = gql(/* GraphQL */ `
  query countContributor($where: ContributorWhereInput) {
    countContributor(where: $where)
  }
`);

export const findManyRequest = gql(/* GraphQL */ `
  query findManyRequest($where: RequestWhereInput) {
    findManyRequest(where: $where) {
      id
      title
      text
      created_at
      updated_at
      broadcasted_at
      schedule_send_for
      user_id
      tags {
        id
        name
      }
      user {
        id
        first_name
        last_name
      }
    }
  }
`);

export const requestsCount = gql(/* GraphQL */ `
  query countRequest($where: RequestWhereInput) {
    countRequest(where: $where)
  }
`);

export const findUniqueContributor = gql(/* GraphQL */ `
  query findUniqueContributor($where: ContributorWhereUniqueInput!) {
    findUniqueContributor(where: $where) {
      id
      first_name
      last_name
      created_at
    }
  }
`);

export const findUniqueRequest = gql(/* GraphQL */ `
  query findUniqueRequest($where: RequestWhereUniqueInput!) {
    findUniqueRequest(where: $where) {
      id
      title
      text
    }
  }
`);

export const findManyTag = gql(/* GraphQL */ `
  query findManyTag($where: TagWhereInput) {
    findManyTag(where: $where) {
      id
      name
    }
  }
`);

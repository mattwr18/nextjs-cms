import gql from 'graphql-tag';

export const findManyContributor = gql`
  query findManyContributor($filter: ContributorFilter) {
    findManyContributor(filter: $filter) {
      id
      first_name
      last_name
      email
      signal_phone_number
      telegram_id
      threema_id
      whats_app_phone_number
    }
  }
`;

export const contributorsCount = gql`
  query countContributor($filter: ContributorFilter) {
    countContributor(filter: $filter)
  }
`;

export const findManyRequest = gql`
  query findManyContributor($filter: RequestFilter) {
    findManyRequest(filter: $filter) {
      id
      title
      text
      created_at
      broadcasted_at
      schedule_send_for
    }
  }
`;

export const requestsCount = gql`
  query countRequest($filter: RequestFilter) {
    countRequest(filter: $filter)
  }
`;

export const findUniqueContributor = gql`
  query findUniqueContributor($filter: ContributorUniqueFilter!) {
    findUniqueContributor(filter: $filter) {
      id
      first_name
      last_name
      created_at
    }
  }
`;

export const findUniqueRequest = gql`
  query findUniqueRequet($filter: RequestUniqueFilter!) {
    findUniqueRequest(filter: $filter) {
      id
      title
      text
    }
  }
`;

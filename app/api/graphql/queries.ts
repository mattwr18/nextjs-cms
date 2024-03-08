import gql from 'graphql-tag';

export const findFirstUser = gql`
  {
    findFirstUser {
      id
    }
  }
`;

export const findManyContributor = gql`
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
    }
  }
`;

export const contributorsCount = gql`
  query countContributor($where: ContributorWhereInput) {
    countContributor(where: $where)
  }
`;

export const findManyRequest = gql`
  query findManyContributor($where: RequestWhereInput) {
    findManyRequest(where: $where) {
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
  query countRequest($where: RequestWhereInput) {
    countRequest(where: $where)
  }
`;

export const findUniqueContributor = gql`
  query findUniqueContributor($where: ContributorWhereUniqueInput!) {
    findUniqueContributor(where: $where) {
      id
      first_name
      last_name
      created_at
    }
  }
`;

export const findUniqueRequest = gql`
  query findUniqueRequet($where: RequestWhereUniqueInput!) {
    findUniqueRequest(where: $where) {
      id
      title
      text
    }
  }
`;

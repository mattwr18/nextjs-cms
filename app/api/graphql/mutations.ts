import { gql } from '@/app/api/graphql/generated/gql';

export const createOneRequest = gql(/* GraphQL */ `
  mutation createOneRequest($data: RequestCreateInput!) {
    createOneRequest(data: $data) {
      id
    }
  }
`);

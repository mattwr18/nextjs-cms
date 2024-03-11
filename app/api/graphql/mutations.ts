import gql from 'graphql-tag';

export const createOneRequest = gql`
  mutation createOneRequest($data: RequestCreateInput!) {
    createOneRequest(data: $data) {
      id
    }
  }
`;

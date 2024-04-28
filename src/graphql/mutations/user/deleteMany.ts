import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_USERS = gql`
  mutation DeleteManyUsers($deleteManyUsers: [String!]!) {
    deleteManyUsers(deleteManyUsers: $deleteManyUsers) {
      avatar_url
      created_at
      email
      id
      name
      password
      role
      updated_at
      username
    }
  }
`;

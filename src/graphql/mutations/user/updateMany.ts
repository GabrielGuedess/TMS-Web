import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_USERS = gql`
  mutation UpdateManyUsers($updateManyUsers: [UserUpdateManyInput!]!) {
    updateManyUsers(updateManyUsers: $updateManyUsers) {
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

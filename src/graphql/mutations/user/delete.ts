import { gql } from '@apollo/client';

export const MUTATION_DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: String!) {
    deleteUser(id: $deleteUserId) {
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

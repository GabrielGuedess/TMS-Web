import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User($email: String, $userId: String, $username: String) {
    user(email: $email, id: $userId, username: $username) {
      created_at
      email
      id
      avatar_url
      name
      password
      role
      updated_at
      username
    }
  }
`;

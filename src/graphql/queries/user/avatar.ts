import { gql } from '@apollo/client';

export const QUERY_AVATAR = gql`
  query Avatar($userId: String) {
    user(id: $userId) {
      avatar_url
    }
  }
`;

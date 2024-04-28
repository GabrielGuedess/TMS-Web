import { gql } from '@apollo/client';

export const MUTATION_UPDATE_USER = gql`
  mutation UpdateUser(
    $userUpdate: UserUpdateInput!
    $avatar: Upload
    $updateUserId: String!
  ) {
    updateUser(userUpdate: $userUpdate, avatar: $avatar, id: $updateUserId) {
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

import { gql } from '@apollo/client';

export const MUTATION_CREATE_USER = gql`
  mutation CreateUser($createUserInput: UserInput!, $avatar: Upload) {
    createUser(createUserInput: $createUserInput, avatar: $avatar) {
      created_at
      email
      id
      name
      password
      role
      avatar_url
      updated_at
      username
    }
  }
`;

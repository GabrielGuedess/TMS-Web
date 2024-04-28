import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Users(
    $limit: Int
    $offset: Int
    $sort: UserOrderByWithRelationInput
    $where: UserWhereInput
  ) {
    totalUsers(where: $where)
    users(limit: $limit, offset: $offset, sort: $sort, where: $where) {
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

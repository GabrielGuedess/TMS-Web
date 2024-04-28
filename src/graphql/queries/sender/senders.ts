import { gql } from '@apollo/client';

export const QUERY_OWN_RECIPIENTS = gql`
  query GetAllSender(
    $limit: Int
    $offset: Int
    $sort: SenderOrderByWithRelationInput
    $where: SenderWhereInput
  ) {
    totalSenders(where: $where)
    getAllSender(limit: $limit, offset: $offset, sort: $sort, where: $where) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

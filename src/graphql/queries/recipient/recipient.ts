import { gql } from '@apollo/client';

export const QUERY_OWN_RECIPIENTS = gql`
  query GetAllRecipient(
    $limit: Int
    $offset: Int
    $sort: RecipientOrderByWithRelationInput
    $where: RecipientWhereInput
  ) {
    totalRecipients(where: $where)
    getAllRecipient(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

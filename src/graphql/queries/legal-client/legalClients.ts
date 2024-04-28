import { gql } from '@apollo/client';

export const QUERY_LEGAL_CLIENTS = gql`
  query GetAllLegalClient(
    $limit: Int
    $offset: Int
    $sort: LegalClientOrderByWithRelationInput
    $where: LegalClientWhereInput
  ) {
    totalLegalClients(where: $where)
    getAllLegalClient(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      branch
      created_at
      created_by
      id
      legal_person_id
      updated_at
      updated_by
    }
  }
`;

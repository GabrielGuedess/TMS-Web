import { gql } from '@apollo/client';

export const QUERY_LEGAL_PERSONS_COMBO = gql`
  query GetAllLegalPersonCombo(
    $limit: Int
    $offset: Int
    $sort: LegalPersonOrderByWithRelationInput
    $where: LegalPersonWhereInput
  ) {
    getAllLegalPerson(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      id
      fantasy_name
      cnpj
    }
  }
`;

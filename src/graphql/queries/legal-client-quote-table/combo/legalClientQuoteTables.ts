import { gql } from '@apollo/client';

export const QUERY_LEGAL_CLIENT_QUOTE_TABLES_COMBO = gql`
  query GetAllLegalClientQuoteTableCombo(
    $limit: Int
    $offset: Int
    $sort: LegalClientQuoteTableOrderByWithRelationInput
    $where: LegalClientQuoteTableWhereInput
  ) {
    getAllLegalClientQuoteTable(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      codQuote
      description
      id
    }
  }
`;

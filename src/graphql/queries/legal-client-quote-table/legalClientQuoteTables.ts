import { gql } from '@apollo/client';

export const QUERY_LEGAL_CLIENT_QUOTE_TABLES = gql`
  query GetAllLegalClientQuoteTable(
    $limit: Int
    $offset: Int
    $sort: LegalClientQuoteTableOrderByWithRelationInput
    $where: LegalClientQuoteTableWhereInput
  ) {
    countLegalClientQuoteTable(where: $where)
    getAllLegalClientQuoteTable(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      amount
      codQuote
      created_at
      created_by
      description
      formPayment
      icms_id
      id
      kindService
      mass
      natureService
      nf_value
      recipientId
      senderId
      typeCte
      typeMerchandise
      updated_at
      updated_by
      volume
      who_pays
    }
  }
`;

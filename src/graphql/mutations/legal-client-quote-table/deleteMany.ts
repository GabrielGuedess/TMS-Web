import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_LEGAL_CLIENT_QUOTE_TABLES = gql`
  mutation DeleteManyLegalClientQuoteTable($ids: [String!]!) {
    deleteManyLegalClientQuoteTable(ids: $ids) {
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

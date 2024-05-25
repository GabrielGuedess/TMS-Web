import { gql } from '@apollo/client';

export const MUTATION_DELETE_LEGAL_CLIENT_QUOTE_TABLE = gql`
  mutation DeleteLegalClientQuoteTable(
    $deleteLegalClientQuoteTableId: String!
  ) {
    deleteLegalClientQuoteTable(id: $deleteLegalClientQuoteTableId) {
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

import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_LEGAL_CLIENT_QUOTE_TABLES = gql`
  mutation UpdateManyLegalClientQuoteTable(
    $data: [LegalClientQuoteTableUpdateManyInput!]!
  ) {
    updateManyLegalClientQuoteTable(data: $data) {
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
      nf_value
      recipientId
      senderId
      typeMerchandise
      updated_at
      updated_by
      volume
      who_pays
      nf_number
      nf_serie
      digital_signature
    }
  }
`;

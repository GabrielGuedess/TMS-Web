import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_PHYSICAL_CUSTOMER_QUOTE_TABLES = gql`
  mutation UpdateManyPhysicalCustomerQuoteTable(
    $data: [PhysicalCustomerQuoteTableUpdateManyInput!]!
  ) {
    updateManyPhysicalCustomerQuoteTable(data: $data) {
      amount
      codQuote
      created_at
      created_by
      description
      digital_signature
      formPayment
      icms_id
      id
      kindService
      mass
      nf_number
      nf_serie
      nf_value
      recipientId
      senderId
      typeMerchandise
      updated_at
      updated_by
      volume
      who_pays
    }
  }
`;

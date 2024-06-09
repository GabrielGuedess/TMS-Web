import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_CUSTOMER_QUOTE_TABLES = gql`
  query GetAllPhysicalCustomerQuoteTable(
    $limit: Int
    $offset: Int
    $sort: PhysicalCustomerQuoteTableOrderByWithRelationInput
    $where: PhysicalCustomerQuoteTableWhereInput
  ) {
    countPhysicalCustomerQuoteTable(where: $where)
    getAllPhysicalCustomerQuoteTable(
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

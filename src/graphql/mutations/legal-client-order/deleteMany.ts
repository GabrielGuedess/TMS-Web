import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_LEGAL_CLIENT_ORDERS = gql`
  mutation DeleteManyLegalClientOrder($ids: [String!]!) {
    deleteManyLegalClientOrder(ids: $ids) {
      calculate_cofins
      calculate_icms
      calculated_pis
      carrier_id
      cofins_tax
      created_at
      created_by
      icms_tax
      id
      legal_contract_id
      order
      pis_tax
      quote_table_id
      total_receivable
      total_shipping_cost
      total_tax_payable
      updated_at
      updated_by
    }
  }
`;

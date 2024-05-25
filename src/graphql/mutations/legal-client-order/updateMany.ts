import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_LEGAL_CLIENT_ORDERS = gql`
  mutation UpdateManyLegalClientOrder(
    $data: [LegalClientOrderUpdateManyInput!]!
  ) {
    updateManyLegalClientOrder(data: $data) {
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

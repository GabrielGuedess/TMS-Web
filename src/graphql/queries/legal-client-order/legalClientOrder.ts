import { gql } from '@apollo/client';

export const QUERY_LEGAL_CLIENT_ORDER = gql`
  query GetLegalClientOrderModel($getLegalClientOrderModelId: String) {
    getLegalClientOrderModel(id: $getLegalClientOrderModelId) {
      CarrierCompany {
        LegalPerson {
          cnpj
        }
      }
      LegalContract {
        id
        contract_number
      }
      Quote {
        id
        codQuote
      }
      expenses {
        expenseName
        id
        value
      }
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

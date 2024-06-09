import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_CUSTOMER_ORDER = gql`
  query GetPhysicalCustomerOrderModel(
    $getPhysicalCustomerOrderModelId: String
  ) {
    getPhysicalCustomerOrderModel(id: $getPhysicalCustomerOrderModelId) {
      calculate_cofins
      calculate_icms
      calculated_pis
      carrier_id
      cofins_tax
      created_at
      created_by
      icms_tax
      id
      order
      physicalCustomerId
      pis_tax
      quote_table_id
      total_receivable
      total_shipping_cost
      total_tax_payable
      updated_at
      updated_by
      expenses {
        expenseName
        id
        value
      }
      PhysicalCustomer {
        id
        NaturalPerson {
          cpf
        }
      }
      CarrierCompany {
        id
        rntrc
      }
      Quote {
        id
        codQuote
      }
    }
  }
`;

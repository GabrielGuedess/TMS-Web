import { gql } from '@apollo/client';

export const QUERY_LEGAL_CONTRACT = gql`
  query GetLegalContractModel($getLegalContractModelId: String) {
    getLegalContractModel(id: $getLegalContractModelId) {
      CarrierCompany {
        id
        rntrc
      }
      LegalClient {
        id
        LegalPerson {
          cnpj
        }
      }
      carrier_company_id
      contract_number
      created_at
      created_by
      delivery_conditions
      effective_date
      id
      legal_client_id
      observations
      updated_at
      updated_by
    }
  }
`;

import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_LEGAL_CONTRACTS = gql`
  mutation UpdateManyLegalContract($data: [LegalContractUpdateManyInput!]!) {
    updateManyLegalContract(data: $data) {
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

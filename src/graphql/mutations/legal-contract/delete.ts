import { gql } from '@apollo/client';

export const MUTATION_DELETE_LEGAL_CONTRACT = gql`
  mutation DeleteLegalContract($deleteLegalContractId: String!) {
    deleteLegalContract(id: $deleteLegalContractId) {
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

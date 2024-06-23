import { gql } from '@apollo/client';

export const MUTATION_UPDATE_LEGAL_CLIENT = gql`
  mutation UpdatelegalContract(
    $updatelegalContractId: String!
    $legalContractInput: LegalContractUpdateInput!
  ) {
    updatelegalContract(
      id: $updatelegalContractId
      legalContractInput: $legalContractInput
    ) {
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

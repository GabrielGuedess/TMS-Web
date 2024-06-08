import { gql } from '@apollo/client';

export const QUERY_LEGAL_CONTRACTS = gql`
  query GetAllLegalContract(
    $limit: Int
    $offset: Int
    $sort: LegalContractOrderByWithRelationInput
    $where: LegalContractWhereInput
  ) {
    countLegalContract(where: $where)
    getAllLegalContract(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
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

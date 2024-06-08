import { gql } from '@apollo/client';

export const QUERY_LEGAL_CONTRACTS_COMBO = gql`
  query GetAllLegalContractCombo(
    $limit: Int
    $offset: Int
    $sort: LegalContractOrderByWithRelationInput
    $where: LegalContractWhereInput
  ) {
    getAllLegalContract(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      contract_number
      id
    }
  }
`;

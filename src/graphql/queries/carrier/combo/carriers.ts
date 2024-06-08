import { gql } from '@apollo/client';

export const QUERY_CARRIERS_COMBO = gql`
  query GetAllCarrierCompanyCombo(
    $limit: Int
    $offset: Int
    $sort: CarrierCompanyOrderByWithRelationInput
    $where: CarrierCompanyWhereInput
  ) {
    getAllCarrierCompany(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      id
      rntrc
    }
  }
`;

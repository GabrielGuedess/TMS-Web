import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query GetAllCarrierCompany(
    $limit: Int
    $offset: Int
    $sort: CarrierCompanyOrderByWithRelationInput
    $where: CarrierCompanyWhereInput
  ) {
    totalCarrierCompanies(where: $where)
    getAllCarrierCompany(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      created_at
      created_by
      id
      legalPersonId
      rntrc
      updated_at
      updated_by
    }
  }
`;

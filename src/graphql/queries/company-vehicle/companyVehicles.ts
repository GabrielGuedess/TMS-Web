import { gql } from '@apollo/client';

export const QUERY_COMPANY_VEHICLES = gql`
  query GetAllCompanyVehicle(
    $limit: Int
    $offset: Int
    $sort: CompanyVehicleOrderByWithRelationInput
    $where: CompanyVehicleWhereInput
  ) {
    totalCompanyVehicles(where: $where)
    getAllCompanyVehicle(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      carrier_company_id
      created_at
      created_by
      id
      updated_at
      updated_by
      vehicle_id
    }
  }
`;

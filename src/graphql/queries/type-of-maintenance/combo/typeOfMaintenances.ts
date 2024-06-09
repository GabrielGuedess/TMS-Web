import { gql } from '@apollo/client';

export const QUERY_TYPE_OF_MAINTENANCE_COMBO = gql`
  query GetAllTypeOfMaintenanceCombo(
    $limit: Int
    $offset: Int
    $sort: TypeOfMaintenanceOrderByWithRelationInput
    $where: TypeOfMaintenanceWhereInput
  ) {
    getAllTypeOfMaintenance(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      created_at
      created_by
      description
      id
      typeMaintenance
      updated_at
      updated_by
    }
  }
`;

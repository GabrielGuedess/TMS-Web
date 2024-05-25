import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MAINTENANCE = gql`
  mutation UpdateMaintenance(
    $data: MaintenanceUpdateInput!
    $updateMaintenanceId: String!
  ) {
    updateMaintenance(data: $data, id: $updateMaintenanceId) {
      created_at
      created_by
      finished_at
      id
      maintenance_company_id
      type_of_maintenance_id
      updated_at
      updated_by
      vehicle_id
    }
  }
`;

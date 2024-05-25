import { gql } from '@apollo/client';

export const MUTATION_DELETE_MAINTENANCE = gql`
  mutation DeleteMaintenance($deleteMaintenanceId: String!) {
    deleteMaintenance(id: $deleteMaintenanceId) {
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

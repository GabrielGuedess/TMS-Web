import { gql } from '@apollo/client';

export const MUTATION_CREATE_MAINTENANCE = gql`
  mutation CreateMaintenance($data: MaintenanceInput!) {
    createMaintenance(data: $data) {
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

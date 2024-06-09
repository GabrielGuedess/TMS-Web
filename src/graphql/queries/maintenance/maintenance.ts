import { gql } from '@apollo/client';

export const QUERY_MAINTENANCE = gql`
  query GetMaintenance($getMaintenanceId: String!) {
    getMaintenance(id: $getMaintenanceId) {
      MaintenanceCompany {
        LegalPerson {
          id
          cnpj
        }
      }
      TypeOfMaintenance {
        id
        typeMaintenance
      }
      Vehicle {
        id
        plate
        VehicleModel {
          id
          name
        }
      }
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

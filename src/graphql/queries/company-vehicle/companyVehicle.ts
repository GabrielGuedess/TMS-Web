import { gql } from '@apollo/client';

export const QUERY_COMPANY_VEHICLE = gql`
  query GetCompanyVehicle($getCompanyVehicleId: String) {
    getCompanyVehicle(id: $getCompanyVehicleId) {
      CarrierCompany {
        id
        rntrc
      }
      Vehicle {
        id
        plate
        VehicleModel {
          name
        }
      }
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

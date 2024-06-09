import { gql } from '@apollo/client';

export const QUERY_VEHICLE_TYPE = gql`
  query GetVehicleType($getVehicleTypeId: String) {
    getVehicleType(id: $getVehicleTypeId) {
      BodyWorks {
        id
        name
        axles
      }
      bodyWork
      created_at
      created_by
      id
      name
      updated_at
      updated_by
    }
  }
`;

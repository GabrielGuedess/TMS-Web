import { gql } from '@apollo/client';

export const MUTATION_UPDATE_CARRIER_COMPANY = gql`
  mutation UpdateCarrierCompany(
    $id: String!
    $data: CarrierCompanyUpdateInput!
  ) {
    updateCarriercompany(data: $data, id: $id) {
      id
      legalPersonId
      rntrc
      created_at
      created_by
      updated_at
      updated_by
    }
  }
`;

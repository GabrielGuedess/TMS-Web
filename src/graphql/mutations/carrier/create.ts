import { gql } from '@apollo/client';

export const MUTATION_CREATE_CARRIER_COMPANY = gql`
  mutation CreateCarrierCompany($carrier: CarrierCompanyInput!) {
    createCarrierCompany(data: $carrier) {
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

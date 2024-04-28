import { gql } from '@apollo/client';

export const MUTATION_DELETE_CARRIER_COMPANY = gql`
  mutation DeleteCarrierCompany($deleteCarrierCompanyId: String!) {
    deleteCarrierCompany(id: $deleteCarrierCompanyId) {
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

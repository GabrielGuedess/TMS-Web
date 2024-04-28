import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_CARRIER_COMPANIES = gql`
  mutation UpdateManyCarrierCompanies(
    $updateManyCarrierCompanies: [CarrierCompanyUpdateManyInput!]!
  ) {
    updateManyCarrierCompanies(
      updateManyCarrierCompanies: $updateManyCarrierCompanies
    ) {
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

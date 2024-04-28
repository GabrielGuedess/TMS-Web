import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_CARRIER_COMPANIES = gql`
  mutation DeleteManyCarrierCompanies($deleteManyCarrierCompanies: [String!]!) {
    deleteManyCarrierCompanies(
      deleteManyCarrierCompanies: $deleteManyCarrierCompanies
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

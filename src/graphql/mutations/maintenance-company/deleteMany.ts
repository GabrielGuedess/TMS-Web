import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_MAINTENANCE_COMPANIES = gql`
  mutation DeleteManyMaintenanceCompany($ids: [String!]!) {
    deleteManyMaintenanceCompany(ids: $ids) {
      created_at
      created_by
      id
      legal_person_id
      specialty_maintenance
      updated_at
      updated_by
    }
  }
`;

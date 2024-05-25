import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_INCIDENTS = gql`
  mutation DeleteManyIncident($ids: [String!]!) {
    deleteManyIncident(ids: $ids) {
      created_at
      created_by
      date_incident
      date_resolved
      description
      id
      order_process_id
      updated_at
      updated_by
    }
  }
`;

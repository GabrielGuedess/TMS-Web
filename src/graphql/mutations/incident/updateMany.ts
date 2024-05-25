import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_INCIDENTS = gql`
  mutation UpdateManyIncident($data: [IncidentUpdateManyInput!]!) {
    updateManyIncident(data: $data) {
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

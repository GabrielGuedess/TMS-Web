import { gql } from '@apollo/client';

export const MUTATION_CREATE_INCIDENT = gql`
  mutation CreateIncident($data: IncidentInput!) {
    createIncident(data: $data) {
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

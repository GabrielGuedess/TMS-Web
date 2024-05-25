import { gql } from '@apollo/client';

export const MUTATION_DELETE_INCIDENT = gql`
  mutation DeleteIncident($deleteIncidentId: String!) {
    deleteIncident(id: $deleteIncidentId) {
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

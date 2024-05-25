import { gql } from '@apollo/client';

export const MUTATION_UPDATE_INCIDENT = gql`
  mutation UpdateIncident(
    $updateIncidentId: String!
    $upData: IncidentUpdateInput!
  ) {
    updateIncident(id: $updateIncidentId, upData: $upData) {
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

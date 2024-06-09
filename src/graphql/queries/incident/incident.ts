import { gql } from '@apollo/client';

export const QUERY_INCIDENT = gql`
  query GetIncident($getIncidentId: String) {
    getIncident(id: $getIncidentId) {
      created_at
      created_by
      date_incident
      date_resolved
      description
      id
      order_process_id
      updated_at
      updated_by
      OrderProcessing {
        id
        order_processing_number
      }
    }
  }
`;

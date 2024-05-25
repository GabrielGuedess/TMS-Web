import { gql } from '@apollo/client';

export const QUERY_INCIDENTS = gql`
  query GetAllIncidents(
    $limit: Int
    $offset: Int
    $sort: IncidentOrderByWithRelationInput
    $where: IncidentWhereInput
  ) {
    countIncident(where: $where)
    getAllIncidents(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
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

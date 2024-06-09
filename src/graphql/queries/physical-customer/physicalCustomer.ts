import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_CUSTOMER = gql`
  query GetPhysicalCustomer($getPhysicalCustomerId: String) {
    getPhysicalCustomer(id: $getPhysicalCustomerId) {
      NaturalPerson {
        id
        name
        cpf
      }
      branch
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;

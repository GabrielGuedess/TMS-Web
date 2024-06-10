import { gql } from '@apollo/client';

export const QUERY_SENDER = gql`
  query GetSender($getSenderId: String) {
    getSender(id: $getSenderId) {
      LegalPerson {
        address_number
        cep
        city
        cnpj
        complement
        corporate_name
        created_at
        email
        fantasy_name
        first_phone
        id
        neighborhood
        public_place
        second_phone
        state_registration
        third_phone
        uf
        updated_at
      }
      NaturalPerson {
        address_number
        cep
        city
        complement
        cpf
        date_birth
        email
        first_phone
        gender
        id
        name
        nationality
        neighborhood
        public_place
        rg
        second_phone
        third_phone
        uf
      }
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;

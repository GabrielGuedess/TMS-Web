import { gql } from '@apollo/client';

export const QUERY_CARRIER = gql`
  query GetCarrierCompanyModel($cnpj: String) {
    getCarrierCompanyModel(cnpj: $cnpj) {
      created_at
      created_by
      id
      legalPersonId
      rntrc
      updated_at
      updated_by
      LegalPerson {
        cnpj
        fantasy_name
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const QUERY_RECIPIENTS_COMBO = gql`
  query GetAllRecipientCombo(
    $limit: Int
    $offset: Int
    $sort: RecipientOrderByWithRelationInput
    $where: RecipientWhereInput
  ) {
    getAllRecipient(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      id
      NaturalPerson {
        id
        cpf
        name
      }
      LegalPerson {
        id
        cnpj
        fantasy_name
      }
    }
  }
`;

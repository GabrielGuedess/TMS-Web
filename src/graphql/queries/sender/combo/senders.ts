import { gql } from '@apollo/client';

export const QUERY_SENDERS_COMBO = gql`
  query GetAllSenderCombo(
    $limit: Int
    $offset: Int
    $sort: SenderOrderByWithRelationInput
    $where: SenderWhereInput
  ) {
    getAllSender(limit: $limit, offset: $offset, sort: $sort, where: $where) {
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

import { gql } from '@apollo/client';

export const QUERY_NATURAL_PERSONS_COMBO = gql`
  query GetAllNaturalPersonCombo(
    $limit: Int
    $offset: Int
    $sort: NaturalPersonOrderByWithRelationInput
    $where: NaturalPersonWhereInput
  ) {
    getAllNaturalPerson(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      id
      name
      cpf
    }
  }
`;

import { gql } from '@apollo/client';

export const MUTATION_UPDATE_ICMS = gql`
  mutation UpdateIcms(
    $updateIcmsId: String!
    $invoiceForLegalClientInput: IcmsUpdateInput!
  ) {
    updateIcms(
      id: $updateIcmsId
      invoiceForLegalClientInput: $invoiceForLegalClientInput
    ) {
      aliquot
      created_by
      effective_date
      id
      recipient_state
      state_origin
      updated_by
    }
  }
`;

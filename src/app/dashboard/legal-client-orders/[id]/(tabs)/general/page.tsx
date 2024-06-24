import { apollo } from 'apollo/client';

import { QUERY_LEGAL_CLIENT_ORDER } from 'graphql/queries/legal-client-order/legalClientOrder';
import {
  type GetLegalClientOrderModelQuery,
  type GetLegalClientOrderModelQueryVariables,
} from 'graphql/generated';

import { LegalClientOrderGeneral } from 'components/organisms/LegalClientOrderGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetLegalClientOrderModelQuery,
    GetLegalClientOrderModelQueryVariables
  >({
    query: QUERY_LEGAL_CLIENT_ORDER,
    variables: { getLegalClientOrderModelId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <LegalClientOrderGeneral data={data} />;
};

export default Page;

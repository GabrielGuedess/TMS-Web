import { apollo } from 'apollo/client';

import { QUERY_LEGAL_CLIENT } from 'graphql/queries/legal-client/legalClient';
import {
  type GetLegalClientModelQuery,
  type GetLegalClientModelQueryVariables,
} from 'graphql/generated';

import { LegalClientGeneral } from 'components/organisms/LegalClientGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetLegalClientModelQuery,
    GetLegalClientModelQueryVariables
  >({
    query: QUERY_LEGAL_CLIENT,
    variables: { getLegalClientModelId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <LegalClientGeneral data={data} />;
};

export default Page;

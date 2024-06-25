import { apollo } from 'apollo/client';

import { QUERY_LEGAL_CLIENT_QUOTE_TABLE } from 'graphql/queries/legal-client-quote-table/legalClientQuoteTable';
import {
  type GetLegalClientQuoteTableQuery,
  type GetLegalClientQuoteTableQueryVariables,
} from 'graphql/generated';

import { OverviewLegalClientQuoteTable } from 'components/organisms/LegalClientQuoteTableGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetLegalClientQuoteTableQuery,
    GetLegalClientQuoteTableQueryVariables
  >({
    query: QUERY_LEGAL_CLIENT_QUOTE_TABLE,
    variables: { getLegalClientQuoteTableId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <OverviewLegalClientQuoteTable data={data} />;
};

export default Page;

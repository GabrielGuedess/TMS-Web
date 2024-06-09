import { apollo } from 'apollo/client';

import { QUERY_RECIPIENT } from 'graphql/queries/recipient/recipient';
import {
  type GetRecipientQuery,
  type GetRecipientQueryVariables,
} from 'graphql/generated';

import { RecipientGeneral } from 'components/organisms/RecipientGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetRecipientQuery,
    GetRecipientQueryVariables
  >({
    query: QUERY_RECIPIENT,
    variables: { getRecipientId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <RecipientGeneral data={data} />;
};

export default Page;

import { apollo } from 'apollo/client';

import { QUERY_SENDER } from 'graphql/queries/sender/sender';
import {
  type GetSenderQuery,
  type GetSenderQueryVariables,
} from 'graphql/generated';

import { SenderGeneral } from 'components/organisms/SenderGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetSenderQuery,
    GetSenderQueryVariables
  >({
    query: QUERY_SENDER,
    variables: { getSenderId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <SenderGeneral data={data} />;
};

export default Page;

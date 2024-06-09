import { apollo } from 'apollo/client';

import { QUERY_OWN_DRIVER } from 'graphql/queries/own-driver/ownDriver';
import {
  type GetOwnDriverQuery,
  type GetOwnDriverQueryVariables,
} from 'graphql/generated';

import { OwnDriverGeneral } from 'components/organisms/OwnDriverGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetOwnDriverQuery,
    GetOwnDriverQueryVariables
  >({
    query: QUERY_OWN_DRIVER,
    variables: { getOwnDriverId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <OwnDriverGeneral data={data} />;
};

export default Page;

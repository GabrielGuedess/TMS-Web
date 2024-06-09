import { apollo } from 'apollo/client';

import { QUERY_ICMS_ONE } from 'graphql/queries/icms/icmsOne';
import {
  type GetIcmsOneQuery,
  type GetIcmsOneQueryVariables,
} from 'graphql/generated';

import { ICMSGeneral } from 'components/organisms/ICMSGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetIcmsOneQuery,
    GetIcmsOneQueryVariables
  >({
    query: QUERY_ICMS_ONE,
    variables: { getIcmsId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <ICMSGeneral data={data} />;
};

export default Page;

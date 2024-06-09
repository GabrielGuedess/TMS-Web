import { apollo } from 'apollo/client';

import { QUERY_MAINTENANCE } from 'graphql/queries/maintenance/maintenance';
import {
  type GetMaintenanceQuery,
  type GetMaintenanceQueryVariables,
} from 'graphql/generated';

import { MaintenanceGeneral } from 'components/organisms/MaintenanceGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetMaintenanceQuery,
    GetMaintenanceQueryVariables
  >({
    query: QUERY_MAINTENANCE,
    variables: { getMaintenanceId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <MaintenanceGeneral data={data} />;
};

export default Page;

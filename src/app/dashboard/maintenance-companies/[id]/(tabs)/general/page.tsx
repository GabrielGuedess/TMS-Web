import { apollo } from 'apollo/client';

import { QUERY_MAINTENANCE_COMPANY } from 'graphql/queries/maintenance-company/maintenanceCompany';
import {
  type GetMaintenanceCompanyModelQuery,
  type GetMaintenanceCompanyModelQueryVariables,
} from 'graphql/generated';

import { MaintenanceCompanyGeneral } from 'components/organisms/MaintenanceCompanyGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetMaintenanceCompanyModelQuery,
    GetMaintenanceCompanyModelQueryVariables
  >({
    query: QUERY_MAINTENANCE_COMPANY,
    variables: { getMaintenanceCompanyModelId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <MaintenanceCompanyGeneral data={data} />;
};

export default Page;

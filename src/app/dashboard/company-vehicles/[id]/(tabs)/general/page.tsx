import { apollo } from 'apollo/client';

import { QUERY_COMPANY_VEHICLE } from 'graphql/queries/company-vehicle/companyVehicle';
import {
  type GetCompanyVehicleQuery,
  type GetCompanyVehicleQueryVariables,
} from 'graphql/generated';

import { CompanyVehicleGeneral } from 'components/organisms/CompanyVehicleGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetCompanyVehicleQuery,
    GetCompanyVehicleQueryVariables
  >({
    query: QUERY_COMPANY_VEHICLE,
    variables: { getCompanyVehicleId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <CompanyVehicleGeneral data={data} />;
};

export default Page;

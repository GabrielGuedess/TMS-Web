import { apollo } from 'apollo/client';

import { QUERY_VEHICLE_VEHICLE_BODYWORK } from 'graphql/queries/vehicle-bodywork/vehicleBodywork';
import {
  type GetVehicleBodyworkModelQuery,
  type GetVehicleBodyworkModelQueryVariables,
} from 'graphql/generated';

import { VehicleBodyworkGeneral } from 'components/organisms/VehicleBodyworkGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetVehicleBodyworkModelQuery,
    GetVehicleBodyworkModelQueryVariables
  >({
    query: QUERY_VEHICLE_VEHICLE_BODYWORK,
    variables: { getVehicleBodyworkModelId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <VehicleBodyworkGeneral data={data} />;
};

export default Page;

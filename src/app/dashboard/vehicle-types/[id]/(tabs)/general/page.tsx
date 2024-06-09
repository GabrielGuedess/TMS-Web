import { apollo } from 'apollo/client';

import { QUERY_VEHICLE_TYPE } from 'graphql/queries/vehicle-type/vehicleType';
import {
  type GetVehicleTypeQuery,
  type GetVehicleTypeQueryVariables,
} from 'graphql/generated';

import { VehicleTypeGeneral } from 'components/organisms/VehicleTypeGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetVehicleTypeQuery,
    GetVehicleTypeQueryVariables
  >({
    query: QUERY_VEHICLE_TYPE,
    variables: { getVehicleTypeId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <VehicleTypeGeneral data={data} />;
};

export default Page;

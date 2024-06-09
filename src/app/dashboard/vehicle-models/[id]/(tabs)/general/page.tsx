import { apollo } from 'apollo/client';

import { QUERY_VEHICLE_MODEL } from 'graphql/queries/vehicle-model/vehicleModel';
import {
  type GetVehicleModelQuery,
  type GetVehicleModelQueryVariables,
} from 'graphql/generated';

import { VehicleModelGeneral } from 'components/organisms/VehicleModelGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetVehicleModelQuery,
    GetVehicleModelQueryVariables
  >({
    query: QUERY_VEHICLE_MODEL,
    variables: { getVehicleModelId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <VehicleModelGeneral data={data} />;
};

export default Page;

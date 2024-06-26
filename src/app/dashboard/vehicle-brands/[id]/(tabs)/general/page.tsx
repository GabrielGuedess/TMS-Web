import { apollo } from 'apollo/client';

import { QUERY_VEHICLE_BRAND } from 'graphql/queries/vehicle-brand/vehicleBrand';
import {
  type GetVehicleBrandQuery,
  type GetVehicleBrandQueryVariables,
} from 'graphql/generated';

import { VehicleBrandGeneral } from 'components/organisms/VehicleBrandGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetVehicleBrandQuery,
    GetVehicleBrandQueryVariables
  >({
    query: QUERY_VEHICLE_BRAND,
    variables: { getVehicleBrandId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <VehicleBrandGeneral data={data} />;
};

export default Page;

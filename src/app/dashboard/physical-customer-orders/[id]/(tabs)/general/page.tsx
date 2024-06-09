import { apollo } from 'apollo/client';

import { QUERY_PHYSICAL_CUSTOMER_ORDER } from 'graphql/queries/physical-customer-order/physicalCustomerOrder';
import {
  type GetPhysicalCustomerOrderModelQuery,
  type GetPhysicalCustomerOrderModelQueryVariables,
} from 'graphql/generated';

import { PhysicalCustomerOrderGeneral } from 'components/organisms/PhysicalCustomerOrderGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetPhysicalCustomerOrderModelQuery,
    GetPhysicalCustomerOrderModelQueryVariables
  >({
    query: QUERY_PHYSICAL_CUSTOMER_ORDER,
    variables: { getPhysicalCustomerOrderModelId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <PhysicalCustomerOrderGeneral data={data} />;
};

export default Page;

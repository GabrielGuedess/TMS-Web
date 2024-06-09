import { apollo } from 'apollo/client';

import { QUERY_PHYSICAL_CUSTOMER } from 'graphql/queries/physical-customer/physicalCustomer';
import {
  type GetPhysicalCustomerQuery,
  type GetPhysicalCustomerQueryVariables,
} from 'graphql/generated';

import { PhysicalCustomerGeneral } from 'components/organisms/PhysicalCustomerGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetPhysicalCustomerQuery,
    GetPhysicalCustomerQueryVariables
  >({
    query: QUERY_PHYSICAL_CUSTOMER,
    variables: { getPhysicalCustomerId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <PhysicalCustomerGeneral data={data} />;
};

export default Page;

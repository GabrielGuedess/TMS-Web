import { apollo } from 'apollo/client';

import { QUERY_PHYSICAL_CUSTOMER_QUOTE_TABLE } from 'graphql/queries/physical-customer-quote-table/physicalCustomerQuoteTable';
import {
  type GetPhysicalCustomerQuoteTableQuery,
  type GetPhysicalCustomerQuoteTableQueryVariables,
} from 'graphql/generated';

import { PhysicalCustomerQuoteTableGeneral } from 'components/organisms/PhysicalCustomerQuoteTableGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetPhysicalCustomerQuoteTableQuery,
    GetPhysicalCustomerQuoteTableQueryVariables
  >({
    query: QUERY_PHYSICAL_CUSTOMER_QUOTE_TABLE,
    variables: { getPhysicalCustomerQuoteTableId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <PhysicalCustomerQuoteTableGeneral data={data} />;
};

export default Page;

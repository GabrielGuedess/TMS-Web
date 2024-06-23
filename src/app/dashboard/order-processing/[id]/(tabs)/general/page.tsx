import { apollo } from 'apollo/client';

import { QUERY_ORDERS_PROCESSING_ONE } from 'graphql/queries/order-processing/ordersProcessingOne';
import {
  type GetOrderProcessingOneQuery,
  type GetOrderProcessingOneQueryVariables,
} from 'graphql/generated';

import { OrderProcessingGeneral } from 'components/organisms/OrderProcessingGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetOrderProcessingOneQuery,
    GetOrderProcessingOneQueryVariables
  >({
    query: QUERY_ORDERS_PROCESSING_ONE,
    variables: { getOrderProcessingId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <OrderProcessingGeneral data={data} />;
};

export default Page;

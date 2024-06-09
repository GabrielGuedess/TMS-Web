import { apollo } from 'apollo/client';

import { QUERY_CARRIER } from 'graphql/queries/carrier/carrier';
import {
  type GetCarrierCompanyModelQuery,
  type GetCarrierCompanyModelQueryVariables,
} from 'graphql/generated';

import { CarrierGeneral } from 'components/organisms/CarrierGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetCarrierCompanyModelQuery,
    GetCarrierCompanyModelQueryVariables
  >({
    query: QUERY_CARRIER,
    variables: { cnpj: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <CarrierGeneral data={data} />;
};

export default Page;

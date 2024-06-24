import { apollo } from 'apollo/client';

import { QUERY_LEGAL_CONTRACT } from 'graphql/queries/legal-contract/legalContract';
import {
  type GetLegalContractModelQuery,
  type GetLegalContractModelQueryVariables,
} from 'graphql/generated';

import { ContractGeneral } from 'components/organisms/ContractGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetLegalContractModelQuery,
    GetLegalContractModelQueryVariables
  >({
    query: QUERY_LEGAL_CONTRACT,
    variables: { getLegalContractModelId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <ContractGeneral data={data} />;
};

export default Page;

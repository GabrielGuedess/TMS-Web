import { apollo } from 'apollo/client';

import { QUERY_INCIDENT } from 'graphql/queries/incident/incident';
import {
  type GetIncidentQuery,
  type GetIncidentQueryVariables,
} from 'graphql/generated';

import { IncidentGeneral } from 'components/organisms/IncidentGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetIncidentQuery,
    GetIncidentQueryVariables
  >({
    query: QUERY_INCIDENT,
    variables: { getIncidentId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <IncidentGeneral data={data} />;
};

export default Page;

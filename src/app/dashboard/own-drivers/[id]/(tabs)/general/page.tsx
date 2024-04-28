import { apollo } from 'apollo/client';

import { QUERY_USER } from 'graphql/queries/user/user';
import { type UserQuery, type UserQueryVariables } from 'graphql/generated';

import { UserGeneral } from 'components/organisms/UserGeneral';

const General = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<UserQuery, UserQueryVariables>({
    query: QUERY_USER,
    variables: { userId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <UserGeneral data={data} />;
};

export default General;

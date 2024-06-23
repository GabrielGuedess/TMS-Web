import { apollo } from 'apollo/client';

import { QUERY_FREIGHT_EXPENSE } from 'graphql/queries/freight-expense/freightExpense';
import {
  type GetFreightExpenseQuery,
  type GetFreightExpenseQueryVariables,
} from 'graphql/generated';

import { ExpenseGeneral } from 'components/organisms/ExpenseGeneral';

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error } = await apollo().query<
    GetFreightExpenseQuery,
    GetFreightExpenseQueryVariables
  >({
    query: QUERY_FREIGHT_EXPENSE,
    variables: { getFreightExpenseId: params.id },
  });

  if (error?.message) {
    return <span>Not Found!</span>;
  }

  return <ExpenseGeneral data={data} />;
};

export default Page;

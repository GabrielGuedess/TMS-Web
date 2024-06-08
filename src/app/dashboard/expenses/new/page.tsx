import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateExpense } from 'components/organisms/CreateExpense';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Nova Despesa" />

    <CreateExpense />
  </section>
);

export default Page;

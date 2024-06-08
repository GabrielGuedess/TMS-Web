import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateLegalClientQuoteTable } from 'components/organisms/CreateLegalClientQuoteTable';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Nova Cotação" />

    <CreateLegalClientQuoteTable />
  </section>
);

export default Page;

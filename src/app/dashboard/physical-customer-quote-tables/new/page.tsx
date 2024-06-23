import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreatePhysicalCustomerQuoteTable } from 'components/organisms/CreatePhysicalCustomerQuoteTable';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Nova Cotação" />

    <CreatePhysicalCustomerQuoteTable />
  </section>
);

export default Page;

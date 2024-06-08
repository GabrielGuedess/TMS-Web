import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreatePhysicalCustomer } from 'components/organisms/CreatePhysicalCustomer';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Cliente Físico" />

    <CreatePhysicalCustomer />
  </section>
);

export default Page;

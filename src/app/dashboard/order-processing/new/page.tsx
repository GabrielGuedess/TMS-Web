import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateOrderProcessing } from 'components/organisms/CreateOrderProcessing';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Processamento" />

    <CreateOrderProcessing />
  </section>
);

export default Page;

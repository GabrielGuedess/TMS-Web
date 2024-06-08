import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateCarrier } from 'components/organisms/CreateCarrier';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Nova Transportadora" />

    <CreateCarrier />
  </section>
);

export default Page;

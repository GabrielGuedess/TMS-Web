import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateLegalClientOrder } from 'components/organisms/CreateLegalClientOrders';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Pedido Jurídico" />

    <CreateLegalClientOrder />
  </section>
);

export default Page;

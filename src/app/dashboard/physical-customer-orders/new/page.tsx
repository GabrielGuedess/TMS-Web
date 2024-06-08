import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreatePhysicalCustomerOrder } from 'components/organisms/CreatePhysicalCustomerOrder';

const NewUser = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Pedido Físico" />

    <CreatePhysicalCustomerOrder />
  </section>
);

export default NewUser;

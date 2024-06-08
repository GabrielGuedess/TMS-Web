import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateOwnDriver } from 'components/organisms/CreateOwnDriver';

const NewUser = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Motorista Próprio" />

    <CreateOwnDriver />
  </section>
);

export default NewUser;

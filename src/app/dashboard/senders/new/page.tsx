import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateSender } from 'components/organisms/CreateSender';

const NewUser = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Remetente" />

    <CreateSender />
  </section>
);

export default NewUser;

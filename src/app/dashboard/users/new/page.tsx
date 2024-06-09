import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateUser } from 'components/organisms/CreateUser';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Usuário" />

    <CreateUser />
  </section>
);

export default Page;

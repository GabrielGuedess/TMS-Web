import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateContract } from 'components/organisms/CreateContract';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Contrato" />

    <CreateContract />
  </section>
);

export default Page;

import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateICMS } from 'components/organisms/CreateICMS';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo ICMS" />

    <CreateICMS />
  </section>
);

export default Page;

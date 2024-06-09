import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateMaintenance } from 'components/organisms/CreateMaintenance';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Nova manutenção" />

    <CreateMaintenance />
  </section>
);

export default Page;

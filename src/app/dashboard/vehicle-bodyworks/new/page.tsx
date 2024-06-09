import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateVehicleBodywork } from 'components/organisms/CreateVehicleBodywork';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Nova Carroceria" />

    <CreateVehicleBodywork />
  </section>
);

export default Page;

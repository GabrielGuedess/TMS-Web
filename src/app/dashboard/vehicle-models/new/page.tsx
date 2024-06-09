import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateVehicleModel } from 'components/organisms/CreateVehicleModel';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Modelo" />

    <CreateVehicleModel />
  </section>
);

export default Page;

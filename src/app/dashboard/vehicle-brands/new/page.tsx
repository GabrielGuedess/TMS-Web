import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateVehicleBrand } from 'components/organisms/CreateVehicleBrand';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Usuário" />

    <CreateVehicleBrand />
  </section>
);

export default Page;

import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateVehicleType } from 'components/organisms/CreateVehicleType';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Tipo de Veiculo" />

    <CreateVehicleType />
  </section>
);

export default Page;

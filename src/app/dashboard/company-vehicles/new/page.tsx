import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateCompanyVehicle } from 'components/organisms/CreateCompanyVehicle';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Veiculo de Empresa" />

    <CreateCompanyVehicle />
  </section>
);

export default Page;

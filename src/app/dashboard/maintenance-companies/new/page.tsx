import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateMaintenanceCompany } from 'components/organisms/CreateMaintenanceCompany';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Nova Empresa de Manutenção" />

    <CreateMaintenanceCompany />
  </section>
);

export default Page;

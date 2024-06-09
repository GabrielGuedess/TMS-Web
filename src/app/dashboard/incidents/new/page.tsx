import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateIncident } from 'components/organisms/CreateIncident';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Incidente" />

    <CreateIncident />
  </section>
);

export default Page;

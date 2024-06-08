import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateLegalClient } from 'components/organisms/CreateLegalClient';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Cliente Jurídico" />

    <CreateLegalClient />
  </section>
);

export default Page;

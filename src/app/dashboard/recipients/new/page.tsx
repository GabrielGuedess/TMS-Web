import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CreateRecipient } from 'components/organisms/CreateRecipient';

const Page = async () => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Novo Destinatário" />

    <CreateRecipient />
  </section>
);

export default Page;

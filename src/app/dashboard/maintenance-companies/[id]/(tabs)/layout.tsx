import { type Route } from 'next';

import { type ReactNode } from 'react';

import { Tabs } from 'components/molecules/Tabs';
import { Breadcrumb } from 'components/atoms/Breadcrumb';

const Layout = ({ children }: { children: ReactNode }) => (
  <section className="flex flex-col gap-4 md:grid-cols-2 md:gap-6">
    <Breadcrumb pageName="Empresa de Manutenção" />

    <Tabs tabs={[{ title: 'Geral', href: 'general' as Route }]} />

    {children}
  </section>
);

export default Layout;

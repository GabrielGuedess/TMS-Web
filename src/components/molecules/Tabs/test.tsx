import { type Route } from 'next';

import { render } from '@testing-library/react';

import { Tabs } from '.';

import { type TabProps } from './types';

jest.mock('next/navigation', () => ({
  usePathname: () => 'dashboard/groups',
}));

const tabs: TabProps[] = [
  { title: 'Geral', href: 'general' as Route },
  { title: 'Dados Pessoais', href: 'personal' as Route },
  { title: 'Permissões', href: 'permissions' as Route },
  { title: 'Grupos', href: 'groups' as Route },
];

describe('<Tabs />', () => {
  it('should render the tabs correctly', () => {
    const { container } = render(<Tabs tabs={tabs} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

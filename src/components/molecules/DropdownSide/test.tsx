import { render } from '@testing-library/react';
import * as Accordion from '@radix-ui/react-accordion';

import { ArrowUpIcon } from 'components/atoms/ArrowUpIcon';

import { DropdownSide } from '.';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('<DropdownSide />', () => {
  it('should render the dropdown side correctly', () => {
    const { container } = render(
      <Accordion.Root type="single" collapsible>
        <DropdownSide subPath="/" title="Test" icon={ArrowUpIcon} isNavbarOpen>
          <h1>Test Children</h1>
        </DropdownSide>
        ,
      </Accordion.Root>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

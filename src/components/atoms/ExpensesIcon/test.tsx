import { render } from '@testing-library/react';

import { ExpensesIcon } from '.';

describe('<ExpensesIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<ExpensesIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

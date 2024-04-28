import { render } from '@testing-library/react';

import { Search } from '.';

describe('<Search />', () => {
  it('should render the search correctly', () => {
    const { container } = render(<Search />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import { SearchIcon } from '.';

describe('<SearchIcon />', () => {
  it('should render the search icon correctly', () => {
    const { container } = render(<SearchIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

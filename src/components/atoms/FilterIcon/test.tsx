import { render } from '@testing-library/react';

import { FilterIcon } from '.';

describe('<FilterIcon />', () => {
  it('should render the filter icon correctly', () => {
    const { container } = render(<FilterIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

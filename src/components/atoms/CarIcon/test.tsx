import { render } from '@testing-library/react';

import { CarIcon } from '.';

describe('<CarIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<CarIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

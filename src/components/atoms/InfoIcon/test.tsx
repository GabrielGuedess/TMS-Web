import { render } from '@testing-library/react';

import { InfoIcon } from '.';

describe('<InfoIcon />', () => {
  it('should render the info icon correctly', () => {
    const { container } = render(<InfoIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import { CheckIcon } from '.';

describe('<CheckIcon />', () => {
  it('should render the check icon correctly', () => {
    const { container } = render(<CheckIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

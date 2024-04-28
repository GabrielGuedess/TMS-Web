import { render } from '@testing-library/react';

import { CloseIcon } from '.';

describe('<CloseIcon />', () => {
  it('should render the close icon correctly', () => {
    const { container } = render(<CloseIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

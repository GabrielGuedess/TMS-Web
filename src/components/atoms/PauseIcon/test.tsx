import { render } from '@testing-library/react';

import { PauseIcon } from '.';

describe('<PauseIcon />', () => {
  it('should render the PauseIcon correctly', () => {
    const { container } = render(<PauseIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

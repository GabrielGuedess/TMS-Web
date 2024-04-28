import { render } from '@testing-library/react';

import { SendAngleIcon } from '.';

describe('<SendAngleIcon />', () => {
  it('should render the SendAngleIcon correctly', () => {
    const { container } = render(<SendAngleIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

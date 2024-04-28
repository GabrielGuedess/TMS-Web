import { render } from '@testing-library/react';

import { EyeIcon } from '.';

describe('<EyeIcon />', () => {
  it('should render the EyeIcon correctly', () => {
    const { container } = render(<EyeIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

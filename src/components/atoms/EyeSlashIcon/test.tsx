import { render } from '@testing-library/react';

import { EyeSlashIcon } from '.';

describe('<EyeSlashIcon />', () => {
  it('should render the EyeSlashIcon correctly', () => {
    const { container } = render(<EyeSlashIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

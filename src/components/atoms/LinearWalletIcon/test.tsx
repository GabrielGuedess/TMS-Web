import { render } from '@testing-library/react';

import { LinearWalletIcon } from '.';

describe('<LinearWalletIcon />', () => {
  it('should render the moon icon correctly', () => {
    const { container } = render(<LinearWalletIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

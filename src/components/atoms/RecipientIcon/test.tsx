import { render } from '@testing-library/react';

import { RecipientIcon } from '.';

describe('<RecipientIcon />', () => {
  it('should render the recipient icon correctly', () => {
    const { container } = render(<RecipientIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

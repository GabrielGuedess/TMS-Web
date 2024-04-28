import { render } from '@testing-library/react';

import { SenderIcon } from '.';

describe('<SenderIcon />', () => {
  it('should render the sender icon correctly', () => {
    const { container } = render(<SenderIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

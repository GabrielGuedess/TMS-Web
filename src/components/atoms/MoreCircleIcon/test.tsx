import { render } from '@testing-library/react';

import { MoreCircleIcon } from '.';

describe('<MoreCircleIcon />', () => {
  it('should render the more circle icon correctly', () => {
    const { container } = render(<MoreCircleIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

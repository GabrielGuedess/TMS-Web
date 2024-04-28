import { render } from '@testing-library/react';

import { WarningIcon } from '.';

describe('<WarningIcon />', () => {
  it('should render the warning icon correctly', () => {
    const { container } = render(<WarningIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

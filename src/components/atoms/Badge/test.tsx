import { render } from '@testing-library/react';

import { Badge } from '.';

describe('<Badge />', () => {
  it('should render the badge', () => {
    const { container } = render(<Badge title="Test" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

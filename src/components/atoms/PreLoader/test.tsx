import { render } from '@testing-library/react';

import { PreLoader } from '.';

describe('<PreLoader />', () => {
  it('should render the pre loader correctly', () => {
    const { container } = render(<PreLoader />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

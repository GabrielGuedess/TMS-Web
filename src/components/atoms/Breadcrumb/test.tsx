import { render } from '@testing-library/react';

import { Breadcrumb } from '.';

describe('<Breadcrumb />', () => {
  it('should render the breadcrumb correctly', () => {
    const { container } = render(<Breadcrumb pageName="Test" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

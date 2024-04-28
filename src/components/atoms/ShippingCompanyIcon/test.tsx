import { render } from '@testing-library/react';

import { ShippingCompanyIcon } from '.';

describe('<ShippingCompanyIcon />', () => {
  it('should render the shipping company icon correctly', () => {
    const { container } = render(<ShippingCompanyIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

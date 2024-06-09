import { render } from '@testing-library/react';

import { ChevronDown } from '.';

describe('<ChevronDown />', () => {
  it('should render the heading', () => {
    const { container } = render(<ChevronDown />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

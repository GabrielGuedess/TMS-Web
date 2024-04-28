import { render } from '@testing-library/react';

import { CheckBox } from '.';

describe('<CheckBox />', () => {
  it('should render the CheckBox correctly', () => {
    const { container } = render(<CheckBox />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

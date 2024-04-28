import { render } from '@testing-library/react';

import { Select } from '.';

const values = [20, 30, 50];

describe('<Select />', () => {
  it('should render the select correctly', () => {
    const { container } = render(
      <Select values={values} placeholder="value" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

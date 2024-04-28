import { render } from '@testing-library/react';

import { ArrowDownIcon } from '.';

describe('<ArrowDownIcon />', () => {
  it('should render the arrow down icon correctly', () => {
    const { container } = render(<ArrowDownIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import { ArrowUpIcon } from '.';

describe('<ArrowUpIcon />', () => {
  it('should render the arrow up icon correctly', () => {
    const { container } = render(<ArrowUpIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

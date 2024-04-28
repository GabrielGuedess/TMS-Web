import { render } from '@testing-library/react';

import { PlusIcon } from '.';

describe('<PlusIcon />', () => {
  it('should render the PlusIcon correctly', () => {
    const { container } = render(<PlusIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

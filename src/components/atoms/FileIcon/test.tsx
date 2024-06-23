import { render } from '@testing-library/react';

import { FileIcon } from '.';

describe('<FileIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<FileIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import { IcmsIcon } from '.';

describe('<IcmsIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<IcmsIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

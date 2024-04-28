import { render } from '@testing-library/react';

import { ProfileDeleteIcon } from '.';

describe('<ProfileDeleteIcon />', () => {
  it('should render the ProfileDeleteIcon correctly', () => {
    const { container } = render(<ProfileDeleteIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

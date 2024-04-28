import { render } from '@testing-library/react';

import { PlayIcon } from '.';

describe('<PlayIcon />', () => {
  it('should render the PlayIcon correctly', () => {
    const { container } = render(<PlayIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

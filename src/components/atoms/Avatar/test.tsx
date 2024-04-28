import { render } from '@testing-library/react';

import { Avatar } from '.';

describe('<Avatar />', () => {
  it('should render the avatar correctly', () => {
    const { container } = render(
      <Avatar
        alt="Gabriel"
        src="https://avatars.githubusercontent.com/u/64827875?v=4"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';

import { CameraIcon } from '.';

describe('<CameraIcon />', () => {
  it('should render the camera icon correctly', () => {
    const { container } = render(<CameraIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

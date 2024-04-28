import { render } from '@testing-library/react';

import { CloseCircleIcon } from '.';

describe('<CloseCircleIcon />', () => {
  it('should render the close circle icon correctly', () => {
    const { container } = render(<CloseCircleIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

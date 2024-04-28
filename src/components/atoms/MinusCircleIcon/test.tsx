import { render } from '@testing-library/react';

import { MinusCircleIcon } from '.';

describe('<MinusCircleIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<MinusCircleIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

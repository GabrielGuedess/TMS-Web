import { render } from '@testing-library/react';

import { CaretRightIcon } from '.';

describe('<CaretRightIcon />', () => {
  it('should render the caret right icon correctly', () => {
    const { container } = render(<CaretRightIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

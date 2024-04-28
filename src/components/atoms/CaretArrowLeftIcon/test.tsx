import { render } from '@testing-library/react';

import { CaretArrowLeftIcon } from '.';

describe('<CaretArrowLeftIcon />', () => {
  it('should render the caret arrow left icon correctly', () => {
    const { container } = render(<CaretArrowLeftIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

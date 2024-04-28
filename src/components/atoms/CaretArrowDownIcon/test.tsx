import { render } from '@testing-library/react';

import { CaretArrowDownIcon } from '.';

describe('<CaretArrowDownIcon />', () => {
  it('should render the caret arrow down icon correctly', () => {
    const { container } = render(<CaretArrowDownIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

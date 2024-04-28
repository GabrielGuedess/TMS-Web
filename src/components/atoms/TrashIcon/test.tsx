import { render } from '@testing-library/react';

import { TrashIcon } from '.';

describe('<TrashIcon />', () => {
  it('should render the trash icon correctly', () => {
    const { container } = render(<TrashIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
